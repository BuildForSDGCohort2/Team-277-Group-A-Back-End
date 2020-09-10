import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import Hospital from '../../server/models/hospital';
import HospitalAdmin from '../../server/models/hospitaladmin';
import User from '../../server/models/user';

describe('test for hospitalAdmins model', () => {
  const HospitalAdminModel = HospitalAdmin(sequelize, dataTypes);
  const hospitalAdmin = new HospitalAdminModel();

  checkModelName(HospitalAdminModel)('HospitalAdmin');
  describe('properties', () => {
    [
      'hospitalId'
    ].forEach(checkPropertyExists(hospitalAdmin));
  });

  describe('Check the HospitalAdmin Model associations', () => {
    beforeEach(() => {
      HospitalAdminModel.associate({
        Hospital,
        User

      });
    });
  });
});
