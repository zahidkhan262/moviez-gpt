import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "../pages/auth/login"
import { BrowsePage } from "../pages/browse"
import routes from "../utils/routes"
import { PrivateRoute } from "./private-route"


export const AppRouter: React.FC = () => {
  const isAuthenticated = localStorage.getItem('AUTH_TOKEN') ? true : false;
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.BROWSE);
    } else {
      navigate(routes.LOGIN);
    }
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path={routes.BROWSE} element={<BrowsePage />} />
        </Route>
      </Routes>
    </>
  )
}

