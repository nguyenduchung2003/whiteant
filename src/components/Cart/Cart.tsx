import { Box, Button } from "@mui/material"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"

import ProductCart from "../Cart/ProductCart"

// import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hook"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Cart = ({
     setOpenCart,
}: {
     setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
     const selectData = useAppSelector((state) => state.order.arrayOrderProduct)
     //   const [open, setOpen] = useState<boolean>(false);
     const navigate = useNavigate()

     const ClickCloseCart = () => {
          setOpenCart(false)
     }

     //   const storedData: userType[] = JSON.parse(
     //     localStorage.getItem("userss") as string
     //   );
     //   interface userType {
     //     price: string;
     //     // ... other properties of userType
     //   }
     return (
          <>
               <ToastContainer />
               <Box className="w-full h-full  fixed">
                    <List
                         sx={{
                              width: "100%",
                              maxWidth: 485,
                              bgcolor: "background.paper",
                         }}
                         className="h-full absolute right-0 bg-white overflow-y-auto"
                         component="nav"
                         aria-labelledby="nested-list-subheader"
                         subheader={
                              <>
                                   <Box className="flex relative">
                                        <ListSubheader
                                             component="div"
                                             id="nested-list-subheader"
                                        >
                                             Giỏ hàng
                                        </ListSubheader>
                                        <Box
                                             className="absolute right-0"
                                             onClick={ClickCloseCart}
                                        >
                                             X
                                        </Box>
                                   </Box>
                              </>
                         }
                    >
                         {/* Content of the cart */}
                         <ProductCart />

                         {/* Button to Checkout */}
                         <Box
                              className="
            flex
            justify-center
            items-center
            w-[100%]
            mt-5
            "
                         >
                              {/* Button to View Cart */}
                              <Button
                                   variant="contained"
                                   className=" bg-black w-[90%]"
                                   onClick={() => {
                                        selectData.some(
                                             (item) => item.size?.length == 0
                                        )
                                             ? toast.warning(
                                                    "Bạn cần phải chọn size",
                                                    {
                                                         position: "top-right",
                                                         autoClose: 3000,
                                                         hideProgressBar: false,
                                                         closeOnClick: true,
                                                         pauseOnHover: true,
                                                         draggable: true,
                                                         progress: undefined,
                                                         theme: "light",
                                                    }
                                               )
                                             : navigate("/whiteant/checkout")
                                   }}
                              >
                                   Thanh toán
                              </Button>
                         </Box>
                    </List>
               </Box>
          </>
     )
}

export default Cart
