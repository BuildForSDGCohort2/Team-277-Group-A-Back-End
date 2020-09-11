module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Users',
      'phoneNumber',
      {
        allowNull: true,
        type: Sequelize.STRING
      }
    )
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Users', 'phoneNumber')
  ])
};
