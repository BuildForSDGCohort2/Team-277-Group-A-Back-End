
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import User from '../../server/models/user';
import Appointment from '../../server/models/appointment';
import Hospital from '../../server/models/hospital';
import Doctor from '../../server/models/doctor';
import Consultation from '../../server/models/consultation';
import Specialization from '../../server/models/specialization';
import Schedule from '../../server/models/schedule';

describe('test for doctors model', () => {
  const DoctorModel = Doctor(sequelize, dataTypes);
  const doctor = new DoctorModel();

  checkModelName(DoctorModel)('Doctor');
  describe('properties', () => {
    [
      'userId'
    ].forEach(checkPropertyExists(doctor));
  });

  describe('Check the Doctor Model associations', () => {
    beforeEach(() => {
      DoctorModel.associate({
        Schedule,
        Hospital,
        User,
        Consultation,
        Specialization,
        Appointment
      });
    });
  });
});
