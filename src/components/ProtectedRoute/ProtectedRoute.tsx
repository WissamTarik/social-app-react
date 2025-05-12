import { Navigate } from "react-router-dom";
import { useAppSelector } from "@redux/index";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((store) => store.authReducer);

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;