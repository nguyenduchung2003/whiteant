import { Box, Button } from "@mui/material"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"

import ProductCart from "../Cart/ProductCart"

// import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Cart = ({
     setOpenCart,
}: {
     setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
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
                                        navigate("/whiteant/checkout")
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
