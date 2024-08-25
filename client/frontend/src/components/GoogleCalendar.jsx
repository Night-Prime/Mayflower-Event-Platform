import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../assets/styles/calendar.css';

const GoogleCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      googleCalendarApiKey="AIzaSyCyVfgfKWEag8Jcw_6zrwUsI1U6quKtGrw"
      events={{
        googleCalendarId: "danielabatibabatunde1@gmail.com",
      }}
      headerToolbar={{
        left: "prev",
        center: "title",
        right: "next",
      }}
      height="550px"
      contentHeight="550px"
      aspectRatio={1.5}
    />
  )
}


export default GoogleCalendar