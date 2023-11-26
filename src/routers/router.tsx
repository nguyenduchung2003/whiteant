import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Register from "../components/Register"
import Login from "../components/Login"
import Order from "../components/Cart/UpdateProduct"
import CheckOut from "../components/CheckOut"
import Bill from "../components/Bill"
const router = createBrowserRouter([
     {
          path: "/whiteant/",
          element: <App />,
     },
     {
          path: "/whiteant//register",
          element: <Register />,
     },
     {
          path: "/whiteant/login",
          element: <Login />,
     },
     {
          path: "/whiteant/order",
          element: <Order />,
     },
     {
          path: "/whiteant/checkout",
          element: <CheckOut />,
     },
     {
          path: "/whiteant/bill",
          element: <Bill />,
     },
])
export default router
