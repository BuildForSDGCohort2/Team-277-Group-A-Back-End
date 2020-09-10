/* eslint-disable no-param-reassign */
import bcrypt from 'bcrypt';

// eslint-disable-next-line no-unused-expressions
'use strict';

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
  // User.beforeUpdate((user) => {
  //   user.password = user.encryptPassword(user.password);
  // });

  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Appointment, {
      foreignKey: 'userId',
      as: 'appointment',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Consultation, {
      foreignKey: 'userId',
      as: 'appointment',
      onDelete: 'CASCADE'
    });
    User.belongstoMany(models.Doctor, {
      through: 'doctorUser'
    });
    User.belongstoMany(models.Hospital, {
      through: 'hospitalUser'
    });
    User.hasOne(models.HospitalAdmin, {
      foreignKey: 'userId',
      as: 'profile',
      onDelete: 'CASCADE'
    });
  };
  return User;
};
