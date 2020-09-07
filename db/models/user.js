'use strict';
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          isEmail: true,
          len: [3, 255],
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [3, 40],
        },
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validates: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
        createdAt: {
          attributes: {
            exclude: ["hashedPassword", "email", "updatedAt"],
          },
        },
      },
    }
  );

  User.associate = function(models) {
   User.hasOne(models.Challenge, {foreignKey: 'userId'})
   User.hasMany(models.ShelvedBook, {foreighKey: 'userId'})
   
  };

  User.prototype.toSafeObject = function() {
    const {
      id,
      name
    } = this;

    return { id, name };
  };

  User.login = async function({ name, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: [{ name }, { email: name }], //may need email to say 'email: username'
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function(id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.signup = async function({ name, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      name,
      email,
      hashedPassword
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
