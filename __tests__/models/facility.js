import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import Hospital from '../../server/models/hospital';
import Facility from '../../server/models/facility';

describe('test for facilities model', () => {
  const FacilityModel = Facility(sequelize, dataTypes);
  const facility = new FacilityModel();

  checkModelName(FacilityModel)('Facility');
  describe('properties', () => {
    [
      'name',
      'description'
    ].forEach(checkPropertyExists(facility));
  });

  describe('Check the Facility Model associations', () => {
    beforeEach(() => {
      FacilityModel.associate({
        Hospital
      });
    });
  });
});
