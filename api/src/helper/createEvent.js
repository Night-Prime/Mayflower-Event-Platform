const { google } = require("googleapis");
const { OAuth2 } = google.auth;

/**
 * This handles the scheduling of events
 */

const createEvent = async (booking) => {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.AUTH_SECRET_ID,
      process.env.AUTH_SECRET_TOKEN,
      "https://developers.google.com/oauthplayground"
    );

    // Set credentials with the refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.AUTH_REFRESH_TOKEN,
    });

    // Get a new access token
    const { token } = await oauth2Client.getAccessToken();

    // Set the access token explicitly
    oauth2Client.setCredentials({
      access_token: token,
      refresh_token: process.env.AUTH_REFRESH_TOKEN,
    });

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const { eventDate, eventTitle, eventDescription, eventTime } = booking;
    console.log("Booking: ", booking);

    const event = {
      summary: `Event: ${eventTitle}`,
      location: "",
      description: eventDescription,
      start: {
        dateTime: eventDate + "T" + eventTime,
        timeZone: "Africa/Lagos",
      },
      end: {
        dateTime: eventDate + "T" + eventTime,
        timeZone: "Africa/Lagos",
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    console.log(`Event created: ${response.data.htmlLink}`);
  } catch (error) {
    console.error(`Error creating event: ${error.message}`);
  }
};

module.exports = {
  createEvent,
};
