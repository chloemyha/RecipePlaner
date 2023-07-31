// emailSender.js
import nodemailer from "nodemailer"
// Create a transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., "Gmail", "Outlook", etc.
  auth: {
    user: "chloehuynh2401@gmail.com", // Your email address
    pass:"xwtggnagtukasvxa", // Your email password or an app password if using Gmail
  },
});

// Function to send the verification email
async function sendVerificationEmail(email, verificationCode) {
  try {
    // Compose the email
    const mailOptions = {
      from: "chloehuynh2401@gmail.com", // Your email address
      to: email,
      subject: "Verify Your Email",
      html: `
      <p>Hello,</p>
      <p>Thank you for signing up. Please enter the following verification code to verify your email:</p>
      <p><strong>Verification Code: ${verificationCode}</strong></p>
      <a href="http://localhost:3000/verify-email?email=${email}&code=${verificationCode}">Verify Email</a>
    `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
}

export default sendVerificationEmail;