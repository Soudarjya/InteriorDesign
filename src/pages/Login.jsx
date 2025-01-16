import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoogleLogin } from "react-google-login";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSuccess = (response) => {
    console.log("Google Log In Success:", response);
    // Handle Google log in success
  };

  const handleGoogleFailure = (response) => {
    console.log("Google Log In Failure:", response);
    // Handle Google log in failure
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
    console.log({ email, password, phoneNumber });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-200 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 ">
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="IN"
              className="p-2"
            />
          </div>

          {/* Submit Button */}

          <div className="flex items-center justify-center">
            <button type='submit'  className="px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2">
                Log In
            </button>
          </div>
        </form>

        {/* Google Log In */}
        <div className="mt-6">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Log In with Google"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={"single_host_origin"}
            className="w-full"
          />
        </div>

        {/* Link to Sign Up */}
        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
