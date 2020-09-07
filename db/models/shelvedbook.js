'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShelvedBook = sequelize.define('ShelvedBook', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    bookshelfId: DataTypes.INTEGER
  }, {});
  ShelvedBook.associate = function(models) {
    // associations can be defined here
  };
  return ShelvedBook;
};