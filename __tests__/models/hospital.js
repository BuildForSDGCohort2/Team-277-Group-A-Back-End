
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import Hospital from '../../server/models/hospital';
import Facility from '../../server/models/facility';
import Doctor from '../../server/models/doctor';
import Consultation from '../../server/models/consultation';
import HospitalAdmin from '../../server/models/hospitaladmin';
import Appointment from '../../server/models/appointment';
import Schedule from '../../server/models/schedule';
import User from '../../server/models/user';

describe('test for hospitals model', () => {
  const HospitalModel = Hospital(sequelize, dataTypes);
  const hospital = new HospitalModel();

  checkModelName(HospitalModel)('Hospital');
  describe('properties', () => {
    [
      'name',
      'description'
    ].forEach(checkPropertyExists(hospital));
  });

  describe('Check the Hospital Model associations', () => {
    beforeEach(() => {
      HospitalModel.associate({
        Facility,
        Doctor,
        Consultation,
        HospitalAdmin,
        Appointment,
        Schedule,
        User

      });
    });
  });
});
