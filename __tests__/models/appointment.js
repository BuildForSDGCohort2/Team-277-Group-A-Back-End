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
