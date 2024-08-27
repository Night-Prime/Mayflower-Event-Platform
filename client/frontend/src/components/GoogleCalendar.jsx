import '../assets/styles/calendar.css';

import React from 'react';

import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from '@fullcalendar/react';

const GoogleCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      googleCalendarApiKey={`${process.env.REACT_APP_GOOGLR_API_KEY}`}
      events={{
        googleCalendarId: "danielabatibabatunde1@gmail.com",
      }}
      headerToolbar={{
        left: "prev",
        center: "title",
        right: "next",
      }}
      height="600px"
      contentHeight="550px"
      aspectRatio={1.5}
    />
  )
}


export default GoogleCalendar