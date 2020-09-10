
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import User from '../../server/models/user';
import Hospital from '../../server/models/hospital';
import Doctor from '../../server/models/doctor';
import Consultation from '../../server/models/consultation';

describe('test for appointments model', () => {
  const ConsultationModel = Consultation(sequelize, dataTypes);
  const appointment = new ConsultationModel();

  checkModelName(ConsultationModel)('Consultation');
  describe('properties', () => {
    [
      'diagnosis',
      'labWork',
      'prescription',
      'more'
    ].forEach(checkPropertyExists(appointment));
  });

  describe('Check the Appointment Model associations', () => {
    beforeEach(() => {
      ConsultationModel.associate({
        Doctor,
        Hospital,
        User
      });
    });
  });
});
