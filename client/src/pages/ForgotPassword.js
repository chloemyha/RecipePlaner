import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Show loading state
    setIsSubmitting(true);

    // Simulate API request (replace this with your actual API call)
    try {
      // Replace this with your API endpoint for sending reset password email
      const response = await fetch("/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }

    // Hide loading state
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Forgot Password</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
            
            <div className="sign-up text-right mt-2">
              {message && <p>{message}</p>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
