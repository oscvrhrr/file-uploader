import { Outlet, Navigate } from "react-router";







const ProtectedRoutes = () => {
  const token = localStorage.getItem("token")

  const auth = { token }

  return (
    auth.token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoutes