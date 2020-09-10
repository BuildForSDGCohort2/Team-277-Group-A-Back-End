module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Users',
      'address',
      {
        allowNull: true,
        type: Sequelize.STRING
      }
    )
  ]),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('Users', 'address')
  ])
};
