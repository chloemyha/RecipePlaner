import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EmailVerificationForm = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
    const navigate = useNavigate();
  useEffect(() => {
    // Extract email and verification code from the URL parameters
    const searchParams = new URLSearchParams(location.search);
    const emailFromURL = searchParams.get('email');
    const verificationCodeFromURL = searchParams.get('code');

    // Update state with the extracted values
    setEmail(emailFromURL);
    setVerificationCode(verificationCodeFromURL);
  }, [location.search]);

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleVerifyEmail = async () => {
    try {
      // Make the API call to verify the email with the extracted email and verification code
      const response = await fetch(`/verify-email?email=${email}&code=${verificationCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        // Email verified successfully, show success message
        alert('Email verification successful! You can now login with your account.');
        // Optionally, you can clear the verificationCode state and let the user enter a new code
        setVerificationCode('');
        navigate('/login')
      } else {
        // Email verification failed, show error message or handle the error
        alert('Email verification failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      alert('Error verifying email. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      <p>Please enter the verification code sent to your email:</p>
      <input
        type="text"
        value={verificationCode}
        onChange={handleVerificationCodeChange}
        placeholder="Verification Code"
      />
      <button onClick={handleVerifyEmail}>Verify</button>
    </div>
  );
};

export default EmailVerificationForm;
