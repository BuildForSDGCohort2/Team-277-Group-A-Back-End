module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define('Hospital', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });


  Hospital.associate = (models) => {
    Hospital.hasMany(models.Facility, {
      foreignKey: 'hospitalId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Hospital.belongstoMany(models.Doctor, {
      through: 'doctorHospital'
    });
    Hospital.hasMany(models.Consultation, {
      foreignKey: 'hospitalId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Hospital.hasMany(models.HospitalAdmin, {
      foreignKey: 'hospitalId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Hospital.hasMany(models.Appointment, {
      foreignKey: 'hospitalId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Hospital.hasMany(models.Schedule, {
      foreignKey: 'hospitalId',
      target: 'id',
      onDelete: 'CASCADE'
    });
    Hospital.hasMany(models.User, {
      foreignKey: 'hospitalId',
      target: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Hospital;
};
