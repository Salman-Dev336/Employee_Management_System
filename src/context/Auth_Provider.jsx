import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext()
const Auth_Provider = ({ children }) => {
  // localStorage.clear()


  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage();
    setuserdata({ employees});
  },[]);

  return (
    <div>
      <AuthContext.Provider value={[userdata, setuserdata]}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default Auth_Provider;
