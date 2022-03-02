import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user.isAuth;
}

export default function ProtectedRoutes() {

  return useAuth() ? <Outlet /> : <Navigate to="/Login" replace={true}/>;
}
