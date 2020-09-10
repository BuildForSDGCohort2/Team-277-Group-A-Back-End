module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    }
  });
  Doctor.associate = (models) => {
    Doctor.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Doctor.belongstoMany(models.Hospital, {
      through: 'doctorHospital',
      foreignKey: 'doctorId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Doctor.hasMany(models.Consultation, {
      target: 'id',
      foreignKey: 'doctorId',
      onDelete: 'CASCADE'
    });
    Doctor.belongstoMany(models.Specialization, {
      through: 'doctorSpecialization',
      foreignKey: 'doctorId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Doctor.hasMany(models.Appointment, {
      target: 'id',
      foreignKey: 'doctorId',
      onDelete: 'CASCADE'
    });
    Doctor.hasMany(models.Schedule, {
      target: 'id',
      foreignKey: 'doctorId',
      onDelete: 'CASCADE'
    });
  };
  return Doctor;
};
