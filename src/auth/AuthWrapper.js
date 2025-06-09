import React, { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenicated: false });

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (password === "1234") {
        setUser({ name: "usename", isAuthenicated: true });
        resolve("success");
      } else {
        reject("Incorrect Password");
      }
    });
  };

  const logout = () => {
    setUser({ name: "", isAuthenicated: false });
  };
  return <div>AuthWrapper</div>;
};

export default AuthWrapper;
