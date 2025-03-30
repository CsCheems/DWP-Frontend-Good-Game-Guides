// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; 

const RutaPrivada = ({ element, ...rest }) => {
  const { user } = useAuth(); 

  if (!user) {
    return <Navigate to="/" />;
  }
  return element;
};

export default RutaPrivada;