'use strict';


module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define(
    'Challenge',
     {
      goal: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validates: {
          notEmpty: {
            msg: "Please set a goal."
          },
          min: {
            args: [0],
            msg: "goal must not be less than zero"
          }
        }
      },
    
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER

    }
  }, {});
  Challenge.associate = function(models) {
    Challenge.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Challenge;
};