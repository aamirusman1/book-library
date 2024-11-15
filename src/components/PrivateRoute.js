import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const isAuthenticated = false;

  return isAuthenticated ? Component : <Navigate to="/" />;
};

//This is kind of middleware that checks what you are requesting for - are you authenticated for
//If yes you can access the component you are requesting for
//If No then you will be redirected to another url
