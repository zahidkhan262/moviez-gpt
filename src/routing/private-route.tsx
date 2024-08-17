import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated }: any) => {


    return isAuthenticated || true ? <Outlet /> : <Navigate to='/' replace />
}
