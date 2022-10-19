import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedLayout;
