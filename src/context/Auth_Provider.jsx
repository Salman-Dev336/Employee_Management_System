import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext()
const Auth_Provider = ({ children }) => {


  localStorage.clear()
  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setuserdata({ employees, admin });
  },[]);

  return (
    <div>
      <AuthContext.Provider value={userdata}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default Auth_Provider;
