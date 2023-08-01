import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with the appropriate email service (e.g., "Gmail", "Outlook", etc.)
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to send the password reset email
async function sendPasswordResetEmail(email, token) {
  try {
    // Compose the email
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,// Your email address
      to: email,
      subject: "Password Reset",
      html: `
      <p>Hello,</p>
      <p>You've requested a password reset. Please click the link below to reset your password:</p>
      <a href="http://localhost:3000/update-password?email=${email}&token=${token}">Reset Password</a>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
}

export default sendPasswordResetEmail;
