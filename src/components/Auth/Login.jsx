import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('email is :' + email);
    console.log('password is :' + password);

    setemail("");
    setpassword("");
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="border-2 border-green-500 p-20 rounded-3xl top-1/2 left-1/2 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="border-2 border-green-500 rounded-2xl py-2 px-10 text-medium"
            type="email"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.password);
            }}
            required
            className="border-2 border-green-500 rounded-2xl py-2 px-10 text-medium mt-3"
            type="password"
            placeholder="password"
          />
          <button className="border-2 border-green-500 rounded-lg py-2 px-24 font-bold hover:bg-purple-800 text-medium mt-10 bg-purple-600 cursor-pointer active:scale-95">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
