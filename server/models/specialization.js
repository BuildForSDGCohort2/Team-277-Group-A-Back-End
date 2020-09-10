module.exports = (sequelize, DataTypes) => {
  const Specialization = sequelize.define('Specialization', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    doctorId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    }
  });


  Specialization.associate = (models) => {
    Specialization.belongstoMany(models.Doctor, {
      through: 'doctorSpecialization',
      foreignKey: 'specializationId',
      target: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Specialization;
};
