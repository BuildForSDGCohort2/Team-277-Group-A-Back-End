module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
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
    doctorId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    }
  });


  Schedule.associate = (models) => {
    Schedule.belongsto(models.Doctor, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });
    Schedule.belongsto(models.Hospital, {
      foreignKey: 'hospitalId',
      as: 'hospital',
      onDelete: 'CASCADE'
    });
  };

  return Schedule;
};
