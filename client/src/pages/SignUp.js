import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [ email, setEmail] = useState();
  const [ password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post ('http://localhost:8000/SignUp',{firstName: firstName, lastName: lastName, email: email,password: password})
    .then((result) => {
      console.log(result);
      alert ("Please check your email for verification")
      // Navigate to the login page after successful signup
      navigate("/login");
    })
    .catch((err) => {
      console.error(err);
      alert("This email has been registered. Please go to log in your account ")
      navigate("/login");
      // Handle signup error here if needed
    });
  }
  return (
    <>
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="sign-up-form-content">
            <div className="sign-up-form-title">
              <h3>Sign Up</h3>
            </div>

            <div className="form-group.mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="First name"
                name ="firstname"
                onChange={(e)=>setFirstName(e.target.value)}

              />
            </div>

            <div className="form-group.mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Last Name"
                name ="lastname"
                onChange={(e)=>setLastName(e.target.value)}
              />
            </div>

            <div className="form-group.mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="example@emailClient.com"
                name ="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="form-group.mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ex: $caffeineHyperLoop37!"
                name ="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid" style={{ paddingTop: "30px" }}>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>

              <div className="fine-print" style={{ paddingTop: "10px" }}>
                <label />
                Passwords must include:
                <div className="even-finer-print">
                  <ul style={{ alignItems: "left" }}>
                    <li>At least 6 characters</li>
                    <li>At least 1 uppercase letter</li>
                    <li>At least 1 lowercase letter</li>
                    <li>At least 1 number</li>
                    <li>At least 1 special character</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
