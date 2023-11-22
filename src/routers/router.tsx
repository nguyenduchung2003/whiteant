import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Register from "../components/Register"
import Login from "../components/Login"
import Order from "../components/Cart/Order"
const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
     },
     {
          path: "/register",
          element: <Register />,
     },
     {
          path: "/login",
          element: <Login />,
     },
     {
          path: "/order",
          element: <Order />,
     },
])
export default router
