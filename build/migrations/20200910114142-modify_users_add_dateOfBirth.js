"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([queryInterface.addColumn('Users', 'dateOfBirth', {
    allowNull: true,
    type: Sequelize.DATE
  })]),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.removeColumn('Users', 'dateOfBirth')])
};