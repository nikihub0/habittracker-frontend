import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
