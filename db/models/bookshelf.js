'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  //   userId: {
  //     allowNull: false,
  //     type: DataTypes.INTEGER,
  //     references: {model: "Users"}
  // }, 
});
  Bookshelf.associate = function(models) {
    Bookshelf.belongsToMany(models.Book, {through: models.ShelvedBook, foreignKey: 'bookshelfId', otherKey: 'bookId'});
    Bookshelf.hasMany(models.Challenge, {foreignKey: 'bookshelfId'}) //maybe through models.User
    
   
  };
  return Bookshelf;
};