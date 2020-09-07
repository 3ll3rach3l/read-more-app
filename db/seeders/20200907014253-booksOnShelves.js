'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ShelvedBooks', [
        {
        userId: 1,
        bookId: 2,
        bookshelfId: 2
        },
        {
          userId: 1,
          bookId: 3,
          bookshelfId: 2
        },
        {
          userId: 1,
          bookId: 4,
          bookshelfId: 2
        },
        {
          userId: 1,
          bookId: 5,
          bookshelfId: 2
        },
        {
          userId: 1,
          bookId: 6,
          bookshelfId: 3
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('ShelvedBooks', null, {});
    
  }
};
