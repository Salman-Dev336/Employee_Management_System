import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext()
const Auth_Provider = ({ children }) => {
  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
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
