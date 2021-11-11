import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointment from './../AvailableAppointment/AvailableAppointment';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';
import MainMenu from './../../Shared/Navigation/MainMenu';
const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      {/* <Navigation></Navigation> */}
      <MainMenu></MainMenu>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointment;