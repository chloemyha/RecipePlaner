import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    // Extract email and token from the URL parameters
    const searchParams = new URLSearchParams(location.search);
    const emailFromURL = searchParams.get("email");
    const tokenFromURL = searchParams.get("token");

    // Update state with the extracted values
    setEmail(emailFromURL);
    setToken(tokenFromURL);
  }, [location.search]);

  const isPasswordValid = (password) => {
    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    // Validate password and set error message accordingly
    if (!isPasswordValid(value)) {
      setPasswordError(
        "Passwords must be at least 6 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!isPasswordValid(password)) {
      setMessage(
        "Passwords must be at least 6 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
      );
      return;
    }

    try {
      const response = await axios.post("/update-password", {
        email: email,
        token: token,
        newPassword: password,
      });

      if (response.status === 200) {
        setMessage("Password updated successfully.");
        // Add a timeout before navigating to the login page
        setTimeout(() => {
          navigate("/login");
        }, 1000); // 3000 milliseconds (3 seconds) timeout
      } else {
        setMessage("Failed to update the password. Please try again later.");
      }
    } catch (error) {
      setMessage("Failed to update the password. Please try again later.");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleResetPassword}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Reset Password</h3>
          <div className="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter new password"
              value={password}
              onChange={handlePasswordChange} // Call the handler on password change
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="fine-print" style={{ paddingTop: "10px" }}>
            <label>Passwords must include:</label>
            <div className="even-finer-print">
              <ul>
                <li style={{ color: password.length >= 6 ? "green" : "red" }}>
                  At least 6 characters
                </li>
                <li style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}>
                  At least 1 uppercase letter
                </li>
                <li style={{ color: /[a-z]/.test(password) ? "green" : "red" }}>
                  At least 1 lowercase letter
                </li>
                <li style={{ color: /\d/.test(password) ? "green" : "red" }}>
                  At least 1 number
                </li>
                <li
                  style={{
                    color: /[!@#$%^&*]/.test(password) ? "green" : "red",
                  }}
                >
                  At least 1 special character
                </li>
              </ul>
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </div>
          <div>
            {message && <p>{message}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;

