const { google } = require("googleapis");
const nodemailer = require("nodemailer");

/**
 * This function handles the sending of mail.
 */
const sendMail = async (clientEmail, eventTitle, eventDate, eventTime) => {
  const auth = new google.auth.OAuth2(
    process.env.AUTH_SECRET_ID,
    process.env.AUTH_SECRET_TOKEN,
    "https://developers.google.com/oauthplayground"
  );

  auth.setCredentials({
    refresh_token: process.env.AUTH_REFRESH_TOKEN,
  });

  const accessToken = await auth.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.ADMIN_GMAIL,
      pass: process.env.ADMIN_PASSWORD,
      clientId: process.env.AUTH_SECRET_ID,
      clientSecret: process.env.AUTH_SECRET_TOKEN,
      refreshToken: process.env.AUTH_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  const mailOptions = {
    from: clientEmail,
    to: `${process.env.ADMIN_GMAIL}`,
    subject: "New Booking Created",
    text: `A new booking has been created for ${eventTitle} on ${eventDate} at ${eventTime}.`,
    html: `<p>A new booking has been created for ${eventTitle} on ${eventDate} at ${eventTime}.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error Sending mail: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

module.exports = {
  sendMail,
};
