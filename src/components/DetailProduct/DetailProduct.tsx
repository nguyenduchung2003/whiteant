import { Box, Typography, Button, Input } from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hook"
import HeadSideBar from "../SideBar/HeadSideBar"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const DetailProduct = () => {
     const { id } = useParams()
     const selectData = useAppSelector((state) => {
          return state.dataProduct.filter((item) => item.id == id)
     })
     const [quantity, setQuantity] = useState<number>(1)

     return (
          <>
               <HeadSideBar />
               <ToastContainer />
               <Box>
                    {selectData.map((item, index) => {
                         return (
                              <Box key={index}>
                                   <img src={`${item.pathImg}`} alt="" />
                                   <Box className="flex">
                                        <Button
                                             className="w-[20px] h-[20px] content-center mr-3 text-white rounded-full bg-black"
                                             variant="contained"
                                             onClick={() => {
                                                  if (
                                                       item.quantity &&
                                                       quantity < item.quantity
                                                  ) {
                                                       setQuantity(quantity + 1)
                                                  } else {
                                                       toast.warning(
                                                            "Không được vượt quá số lượng",
                                                            {
                                                                 position:
                                                                      "top-right",
                                                                 autoClose: 1000,
                                                                 hideProgressBar:
                                                                      false,
                                                                 closeOnClick:
                                                                      true,
                                                                 pauseOnHover:
                                                                      true,
                                                                 draggable:
                                                                      true,
                                                                 progress:
                                                                      undefined,
                                                                 theme: "light",
                                                            }
                                                       )
                                                  }
                                             }}
                                        >
                                             +
                                        </Button>
                                        <Input
                                             type="text"
                                             className="w-[20px] h-[20px] justify-center text-center content-center mr-3 flex items-center"
                                             value={quantity}
                                             readOnly
                                        />
                                        <Button
                                             className="w-[10px] h-[20px] content-center mr-3 text-white rounded-full  bg-black"
                                             // disabled={
                                             //      product.quantity <= 1
                                             // }
                                             variant="contained"
                                             onClick={() => {
                                                  if (quantity == 0) {
                                                       toast.warning(
                                                            "Số lượng sản phẩm phải lớn hơn 0",
                                                            {
                                                                 position:
                                                                      "top-right",
                                                                 autoClose: 1000,
                                                                 hideProgressBar:
                                                                      false,
                                                                 closeOnClick:
                                                                      true,
                                                                 pauseOnHover:
                                                                      true,
                                                                 draggable:
                                                                      true,
                                                                 progress:
                                                                      undefined,
                                                                 theme: "light",
                                                            }
                                                       )
                                                  } else {
                                                       setQuantity(quantity - 1)
                                                  }
                                             }}
                                        >
                                             -
                                        </Button>
                                   </Box>
                                   <Typography>
                                        Gia san pham : {item.price}
                                   </Typography>
                                   <Typography>
                                        Chat lieu san pham : {item.material}
                                   </Typography>
                                   <Typography>
                                        Mo ta san pham : {item.describe}
                                   </Typography>
                                   <Button>Mua ngay</Button>
                              </Box>
                         )
                    })}
                    <Button>Huy</Button>
               </Box>
          </>
     )
}
export default DetailProduct
