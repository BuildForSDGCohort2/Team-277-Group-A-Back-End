module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Users',
      'hospitalId',
      {
        allowNull: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      }
    )
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Users', 'hospitalId')
  ])
};
