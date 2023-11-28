import { Box, Typography, Button, Input } from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hook"
import HeadSideBar from "../SideBar/HeadSideBar"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../Footer"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CollapsibleSection from './CollapsibleSection'
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
                              <Box className="flex" key={index}>
                                   <Box className="flex">
                                        <img src={item.pathImg} alt="" className="" />
                                   </Box>
                                   <Box className=" flex flex-col gap-5 ml-20">
                                        <Box className="flex flex-col gap-5">
                                             <Typography variant="h4" className="w-full" ><strong>{item.name}</strong></Typography>
                                             <Typography className="w-full" >Mã SP: 123456</Typography>
                                             <Typography className="w-full" >Tình trạng: Còn hàng</Typography>
                                             <Typography variant="h5">
                                                  <strong> {item.price}</strong>
                                             </Typography>
                                             <Box className="flex content-center">
                                                  <Box className="flex justify-center">
                                                       <Button
                                                            className="w-[10px] h-[40px] content-center mr-3 text-white rounded-full bg-black"
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
                                                            className="w-[20px] h-[40px] justify-center text-center content-center mr-3 flex items-center"
                                                            value={quantity}
                                                            readOnly
                                                       />
                                                       <Button
                                                            className="w-[10px] h-[40px] content-center text-white rounded-full  bg-black"
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
                                                  <Button className="ml-5 bg-black text-white w-[20%] rounded-full"><AddShoppingCartIcon></AddShoppingCartIcon>Thêm vào giỏ hàng</Button>
                                             </Box>
                                        </Box>


                                        <Box className="flex flex-col gap-1 mt-10">
                                             <CollapsibleSection title="Mô tả chi tiết" content={item.describe} />
                                             <CollapsibleSection title="Hướng dẫn bảo quản" content={item.describe} />
                                        </Box>

                                   </Box>
                              </Box>
                         )
                    })}

               </Box>
               <Footer />
          </>
     )
}
export default DetailProduct