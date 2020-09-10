import { expect } from 'chai';

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkHookDefined,
  checkPropertyExists
} from 'sequelize-test-helpers';

import User from '../../server/models/user';
import Appointment from '../../server/models/appointment';
import Hospital from '../../server/models/hospital';
import HospitalAdmin from '../../server/models/hospitaladmin';
import Doctor from '../../server/models/doctor';
import Consultation from '../../server/models/consultation';

describe('test for users model', () => {
  const UserModel = User(sequelize, dataTypes);
  const user = new UserModel();

  checkModelName(UserModel)('User');
  describe('properties', () => {
    [
      'firstName',
      'lastName',
      'email',
      'sex',
      'dateOfBirth',
      'address',
      'phoneNumber',
      'isSuperAdmin',
      'encryptPassword',
      'comparePassword'
    ].forEach(checkPropertyExists(user));
  });

  describe('hooks', () => {
    ['beforeCreate'].forEach(checkHookDefined(user));
  });

  describe('Check the User Model associations', () => {
    beforeEach(() => {
      UserModel.associate({
        Doctor,
        Hospital,
        HospitalAdmin,
        Appointment,
        Consultation
      });
    });
  });
  it('it should test for hashed password', (done) => {
    const userData = {
      firstName: 'John',
      lastName: 'Smith',
      email: 'smith@gmail.com',
      password: 'password1',
      dateOfBirth: '2016-06-22 19:10:25-07'
    };
    const hashedPassword = user.encryptPassword(userData.password);
    expect(hashedPassword).to.be.a('string');
    expect(hashedPassword).to.not.eql(userData.password);
    userData.password = hashedPassword;
    expect(user.comparePassword('password1', userData)).to.eql(true);
    done();
  });
});
