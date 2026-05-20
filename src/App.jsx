import React from "react";
import Login from "./components/Auth/Login";
import Employee_Dashboard from "./components/Dashboard/Employee_Dashboard";
import Admin_Dashboard from "./components/Dashboard/Admin_Dashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useState } from "react";

const App = () => {
  const [user, setuser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setuser("admin");
      console.log(user);
    } else if (email === "employee@example.com" && password === "123") {
      setuser("employee");
      console.log(user);
    } else {
      alert("invalid Credentials ");
    }
  };

  // handleLogin("admin@example.com", "123");

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <Admin_Dashboard /> : ""}
      {user === "employee" ? <Employee_Dashboard /> : ""}
      {/* < Employee_Dashboard /> */}
      {/* < Admin_Dashboard /> */}
    </>
  );
};

export default App;
