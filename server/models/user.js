import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your firstname'
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your lastname'
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email already exists'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please provide a password'
      }
    },
    sex: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    isSuperAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    dateOfBirth: {
      type: DataTypes.DATE
    },
    hospitalId: {
      type: DataTypes.UUID,
      allowNull: true,
      validate: {
        isUUID: 4
      }
    }
  }, {
    timestamps: false,
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] }
      }
    }
  });
  /**
   * compares if the passed arguments are equal
   * @param {string} password
   * @param {object} user
   * @returns {boolean} true or false
   */
  User.prototype.comparePassword = (password, user) => bcrypt.compareSync(password, user.password);
  /**
   * encrypt a user's password
   * @param {string} password
   * @returns {string} hashed password
   *
   */
  User.prototype.encryptPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(6));
  User.beforeCreate((user) => {
    user.password = user.encryptPassword(user.password);
  });
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Appointment, {
      foreignKey: 'userId',
      as: 'userAppointment',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Consultation, {
      foreignKey: 'userId',
      as: 'appointment',
      onDelete: 'CASCADE'
    });
    User.belongsToMany(models.Doctor, {
      through: 'doctorUser'
    });
    User.belongsToMany(models.Hospital, {
      through: 'hospitalUser'
    });
    User.hasOne(models.HospitalAdmin, {
      foreignKey: 'userId',
      as: 'admin',
      onDelete: 'CASCADE'
    });
  };
  return User;
};
