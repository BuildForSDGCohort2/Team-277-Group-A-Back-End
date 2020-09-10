import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import Hospital from '../../server/models/hospital';
import Doctor from '../../server/models/doctor';
import Schedule from '../../server/models/schedule';

describe('test for schedule model', () => {
  const ScheduleModel = Schedule(sequelize, dataTypes);
  const schedule = new ScheduleModel();

  checkModelName(ScheduleModel)('Schedule');
  describe('properties', () => {
    [
      'doctorId',
      'hospitalId'
    ].forEach(checkPropertyExists(schedule));
  });

  describe('Check the Schedule Model associations', () => {
    beforeEach(() => {
      ScheduleModel.associate({
        Doctor,
        Hospital

      });
    });
  });
});
