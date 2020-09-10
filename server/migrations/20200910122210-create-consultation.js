
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Consultations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      doctorId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Doctors',
          key: 'id',
          as: 'doctorId'
        }
      },
      hospitalId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Hospitals',
          key: 'id',
          as: 'hospitalId'
        }
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      labWork: {
        type: Sequelize.STRING
      },
      prescription: {
        type: Sequelize.STRING
      },
      more: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Consultations');
  }
};
