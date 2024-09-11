const { google } = require("googleapis");
const { OAuth2 } = google.auth;

/**
 * This handles the scheduling of events
 */

const createEvent = async (booking) => {
  try {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URL
    );

    oauth2Client.setCredentials({
      access_token: process.env.ACCESS_TOKEN, // Access token obtained from Google OAuth
      refresh_token: process.env.REFRESH_TOKEN, // Refresh token obtained from Google OAuth
    });

    // Create a calendar client with the authenticated OAuth2 client
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    // Extract event details from the booking object
    const { eventDate, eventTitle, eventDescription, eventTime } = booking;
    console.log("Booking: ", booking);

    // Create a new event object with the extracted details
    const event = {
      summary: `Event: ${eventTitle}`,
      location: "", // Add a default location or make it optional
      description: eventDescription,
      start: {
        dateTime: eventDate + "T" + eventTime, // Format: YYYY-MM-DDTHH:MM:SS
        timeZone: "Africa/Lagos", // Set a default time zone or make it optional
      },
      end: {
        dateTime: eventDate + "T" + eventTime, // Format: YYYY-MM-DDTHH:MM:SS
        timeZone: "Africa/Lagos", // Set a default time zone or make it optional
      },
    };
    console.log("Event: ", event);

    // Create the event on the calendar
    const response = await calendar.events.insert({
      calendarId: "primary", // Use the primary calendar or specify a different one
      resource: event,
    });

    console.log(`Event created: ${response.data.htmlLink}`);
  } catch (error) {
    console.error(`Error creating event: ${error}`);
  }
};

module.exports = {
  createEvent,
};
