"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([queryInterface.addColumn('Users', 'address', {
    allowNull: true,
    type: Sequelize.STRING
  })]),
  down: queryInterface => Promise.all([queryInterface.removeColumn('Users', 'address')])
};