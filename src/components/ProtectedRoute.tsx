import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./../utils/auth";

const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
