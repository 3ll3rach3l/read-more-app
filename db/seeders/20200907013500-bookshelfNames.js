'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Bookshelves', [
        {name: 'Currently Reading'},
        { name: 'Want to Read' },
        { name: 'Finished Reading' },
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Bookshelves', null, {});
  
  }
};
