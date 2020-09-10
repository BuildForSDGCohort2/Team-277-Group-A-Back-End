module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Users',
      'sex',
      {
        allowNull: true,
        type: Sequelize.STRING
      }
    )
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Users', 'sex')
  ])
};
