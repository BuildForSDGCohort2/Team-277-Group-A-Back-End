module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define('Facility', {
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
  Facility.associate = (models) => {
    Facility.belongsTo(models.Hospital, {
      foreignKey: 'hospitalId',
      as: 'hospital',
      target: 'id',
      onDelete: 'CASCADE'
    });
  };
  return Facility;
};
