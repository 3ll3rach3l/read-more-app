'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShelvedBook = sequelize.define('ShelvedBook', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    bookshelfId: DataTypes.INTEGER
  }, {});
  ShelvedBook.associate = function(models) {
   ShelvedBook.hasMany(models.Challenge, {foreignKey: 'shelvedBooksId'})
   //ShelvedBook.hasMany(models.User, {foreignKey: 'userId'})
   ShelvedBook.hasMany(models.Book, {foreignKey: 'bookId'})
   ShelvedBook.belongsTo(models.Bookshelf, {foreignKey: 'bookshelfId'})
  };
  return ShelvedBook;
};