module.exports = (sequelize, DataTypes) => {
  const HospitalAdmin = sequelize.define('HospitalAdmin', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    hospitalId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    }
  });
  HospitalAdmin.associate = (models) => {
    HospitalAdmin.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });
    HospitalAdmin.belongsTo(models.Hospital, {
      foreignKey: 'hospitalId',
      as: 'hospital',
      onDelete: 'CASCADE'
    });
  };
  return HospitalAdmin;
};
