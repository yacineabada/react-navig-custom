import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(email, password) {
    setUser({
      type: "person",
      name: "yacine",
      la9ab: "abada",
      ID: "234628",
      points: 200,
      email: "yacine1287@gmail.com",
      status: "not confirmed",
      docsupload: false,
    });
  }

  function signOut() {
    setUser(null);
  }

  function signUp(Nom, Prenom, phone, type, email) {
    return setUser({
      type: type,
      name: Nom,
      la9ab: Prenom,
      phone: phone,
      ID: "234628",
      points: 0,
      email: email,
      status: "not confirmed",
      docsupload: false,
    });
  }

  function getUser() {
    return user;
  }

  const value = {
    getUser,
    login,
    signOut,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
