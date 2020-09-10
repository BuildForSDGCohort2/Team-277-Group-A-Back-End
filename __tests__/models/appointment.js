
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

describe('test for appointments model', () => {
  const AppointmentModel = Appointment(sequelize, dataTypes);
  const appointment = new AppointmentModel();

  checkModelName(AppointmentModel)('Appointment');
  describe('properties', () => {
    [
      'reasonforAppointment',
      'appointmentStatus',
      'bookSpecialist',
      'noOnQueue',
      'isFirstAppointment',
      'isVirtualAppointment',
      'isEmmergency'
    ].forEach(checkPropertyExists(appointment));
  });

  describe('Check the Appointment Model associations', () => {
    beforeEach(() => {
      AppointmentModel.associate({
        Doctor,
        Hospital,
        User
      });
    });
  });
});
