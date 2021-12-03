import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ loggedIn, user, setLoggedIn, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
