import React, { useState } from "react";

const Login = ({handleLogin}) => {

  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();
    handleLogin(email, password); 

    // console.log("Email is: " + email);
    // console.log("Password is: " + password);

    setemail("");
    setpassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black">
      {/* Login Card */}
      <div className="w-[380px] bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-300 mt-2">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          {/* Email */}
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-gray-400 text-white placeholder-gray-300 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all"
            type="email"
            placeholder="Enter your email"
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-gray-400 text-white placeholder-gray-300 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all"
            type="password"
            placeholder="Enter your password"
          />

          {/* Forgot Password */}
          <div className="w-full text-right">
            <a
              href="#"
              className="text-sm text-purple-300 hover:text-purple-200"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer">
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-gray-300 mt-4">
            Don’t have an account?{" "}
            <span className="text-purple-300 cursor-pointer hover:text-purple-200">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
