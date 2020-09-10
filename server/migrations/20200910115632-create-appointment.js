
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Doctors',
          key: 'id',
          as: 'doctorId'
        }
      },
      reasonforAppointment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      appointmentStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'new'
      },
      bookSpecialist: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      noOnQueue: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      isFirstAppointment: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      isVirtualAppointment: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false

      },
      isEmmergency: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    await queryInterface.dropTable('Appointments');
  }
};
