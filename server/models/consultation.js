module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('Consultation', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    diagnosis: {
      type: DataTypes.STRING
    },
    labWork: {
      type: DataTypes.STRING
    },
    prescription: {
      type: DataTypes.STRING
    },
    more: {
      type: DataTypes.STRING
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


  Consultation.associate = (models) => {
    Consultation.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Consultation.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      as: 'doctor',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Consultation.belongsTo(models.Hospital, {
      foreignKey: 'hospitalId',
      as: 'hospital',
      target: 'id',
      onDelete: 'CASCADE'
    });
  };
  return Consultation;
};
