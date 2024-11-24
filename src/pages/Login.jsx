import React from "react";
import "../Styles/Login.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <h2>Login to VahanCheck</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email or username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group form-group-checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <div className="form-links">
          <a href="/forgot-password">Forgot Password?</a>
          <span> | </span>
          <a href="/signup">Don't have an account? Sign Up</a>
        </div>
      </form>
      <div className="social-login">
        <h4>Or login with:</h4>
        <button className="social-button">Login with Facebook</button>
        <button className="social-button">Login with Google</button>
      </div>
      <p className="security-info">
        Your password must be at least 8 characters long and include a mix of
        letters, numbers, and symbols.
      </p>
      <div className="terms">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">
          I agree to the <a href="/terms">Terms and Conditions</a>
        </label>
      </div>
      <p className="support-info">
        Need help? Contact our support team at{" "}
        <a href="mailto:support@vahancheck.com">support@vahancheck.com</a>.
      </p>
    </div>
  );
};

export default LoginForm;
