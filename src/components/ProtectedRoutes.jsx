import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

// useAuth Function returns from user Context if user authenticated
const useAuth = () => {
  const { user } = useContext(UserContext);
  return user.isAuth;
}

// If user authenticated, returns outlet, else Redirect to Login
// Outlet is the components that are wrapped in protected routes
export default function ProtectedRoutes() {

  return useAuth() ? <Outlet /> : <Navigate to="/Login" replace={true}/>;
}
