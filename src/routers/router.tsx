import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Register from "../components/Register"
import Login from "../components/Login"
import Order from "../components/Cart/UpdateProduct"
import CheckOut from "../components/CheckOut"
import Bill from "../components/Bill"
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
     {
          path: "/checkout",
          element: <CheckOut />,
     },
     {
          path: "/bill",
          element: <Bill />,
     },
])
export default router
