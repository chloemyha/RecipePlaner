import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [ email, setEmail] = useState();
  const [ password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

axios.defaults.withCredentials = true; 
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();

    if (response.status === 403) {
      setMessage(responseData.message); // Display "Email not verified" alert
    } else if (response.status === 200) {
      setMessage(responseData.message); // Display "Login Successful" alert
      navigate("/recipe")
    } else if (response.status === 400) {
      setMessage(responseData.message); // Display "Invalid password" alert
    } else if (response.status === 409) {
      setMessage(responseData.message); // Display "No records found" alert
    } else {
      setMessage("An error occurred. Please try again later.");
    }
  } catch (error) {
    console.log(error)
    setMessage("An error occurred. Please try again later.");
  }
};
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name ="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name ="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {message && <p>{message}</p>}
            </div>
            <div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="/reset-password">password?</a>
              </p>
              <p className="sign-up text-right mt-2">
                Don't have an account? <a href="./SignUp">Sign Up</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
