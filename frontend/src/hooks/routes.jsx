// routes.js
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound";
import { Navigate } from "react-router-dom";

const routesConfig = [
{
    path: "/",
    element: <Home />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />
  }
]

export default routesConfig