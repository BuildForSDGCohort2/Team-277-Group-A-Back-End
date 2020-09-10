
// eslint-disable-next-line no-unused-expressions


module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    reasonforAppointment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    appointmentStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'new'
    },
    bookSpecialist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    noOnQueue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isFirstAppointment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isVirtualAppointment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false

    },
    isEmmergency: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    },
    hospitalId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    },
    doctorId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    }

  });


  Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Appointment.belongsTo(models.Hospital, {
      foreignKey: 'hospitalId',
      as: 'hospital',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Appointment.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      as: 'doctor',
      target: 'id',
      onDelete: 'CASCADE'
    });
  };
  return Appointment;
};
