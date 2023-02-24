import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../auth'


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    return (
      (!logged)
      ?children
      : <Navigate to="/home" />
  )
}
