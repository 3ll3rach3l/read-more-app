'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    Book.belongsToMany(models.Bookshelf, {through: models.ShelvedBook, foreignKey: 'bookId', otherKey: 'bookshelfId'})
  };
  return Book;
};