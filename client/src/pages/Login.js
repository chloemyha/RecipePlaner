import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [ email, setEmail] = useState();
  const [ password, setPassword] = useState();
  const navigate = useNavigate();

axios.defaults.withCredentials = true; 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post ('http://localhost:8000/login',{email, password})
    .then( result => {
      console.log(result);
      if(result.status === 200) {
        console.log(result.data)
        navigate('/recipe');
    } else if (result.status === 403) {
      alert (result.message)
  } else if (result.status === 409){
    alert ( "Email not verified")
  }})
    .catch(err =>console.error(err))
  }
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
            </div>
            <div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
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
