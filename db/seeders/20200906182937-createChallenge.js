'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Challenges', [
        {goal: 20, userId: 1},
        { goal: 2, userId: 2 },
        { goal: 10, userId: 3 },
        { goal: 32, userId: 4 }

        ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Challenges');
    
  }
};
