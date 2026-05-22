import React from "react";
import Login from "./components/Auth/Login";
import Employee_Dashboard from "./components/Dashboard/Employee_Dashboard";
import Admin_Dashboard from "./components/Dashboard/Admin_Dashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/Auth_Provider";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserdata, setloggedInUserdata] = useState(null);
  const authdata = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setloggedInUserdata();
    }
  },[]);

  // useEffect(() => {
  //   if (authdata) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setuser(loggedInUser.role)
  //     }
  //   }
  // }, [authdata]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authdata) {
      const employee = authdata.employees.find(
        (e) => email === e.email && password === e.password,
      );
      if (employee) {
        setuser("employee");
        setloggedInUserdata(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("invalid Credentials ");
    }
  };

  // handleLogin("admin@example.com", "123");

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <Admin_Dashboard /> : ""}
      {user === "employee" ? (
        <Employee_Dashboard data={loggedInUserdata} />
      ) : (
        ""
      )}
      {/* < Employee_Dashboard /> */}
      {/* < Admin_Dashboard /> */}
    </>
  );
};
export default App;
