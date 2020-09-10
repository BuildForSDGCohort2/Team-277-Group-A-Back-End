import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import Doctor from '../../server/models/doctor';
import Specialization from '../../server/models/specialization';

describe('test for specialization model', () => {
  const SpecializationModel = Specialization(sequelize, dataTypes);
  const specialization = new SpecializationModel();

  checkModelName(SpecializationModel)('Specialization');
  describe('properties', () => {
    [
      'doctorId'
    ].forEach(checkPropertyExists(specialization));
  });

  describe('Check the Specialization Model associations', () => {
    beforeEach(() => {
      SpecializationModel.associate({
        Doctor

      });
    });
  });
});
