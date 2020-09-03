'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      r({
        name: "Demo",
        email: "demo@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        name: "Jon",
        email: "dade@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        name: "Pat",
        email: "mom@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        name: "Lars",
        email: "read@example.com",
        hashedPassword: createPassword(),
      }),
      
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
