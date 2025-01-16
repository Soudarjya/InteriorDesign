import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Sign Up Success:', credentialResponse);
    // Handle Google sign up success
  };

  const handleGoogleFailure = () => {
    console.log('Google Sign Up Failure');
    // Handle Google sign up failure
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up form submission
    console.log({ name, email, password, phoneNumber });
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-200 p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
            <div className="mb-4">
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                defaultCountry="IN"
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button 
                type="submit" 
                className="px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Google Sign Up */}
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap
            />
          </div>

          {/* Link to Login */}
          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-500 hover:underline">
              Already have an account? Log in
            </Link>
          </div>
        </motion.div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
