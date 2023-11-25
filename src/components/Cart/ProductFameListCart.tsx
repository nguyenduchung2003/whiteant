import { Box, Button, Typography, Input, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"

import { useAppSelector, useAppDispatch } from "../../hook"
import { deleteItem, updateItem } from "../../Slice/Order"

interface Props {
     arrayDataProduct: arrayOrderProduct[]
}

const FrameListProduct = ({ arrayDataProduct }: Props) => {
     const selectOrder = useAppSelector(
          (state) => state.order.arrayOrderProduct
     )
     const dispatch = useAppDispatch()

     const deleteProduct = async (id: number) => {
          await dispatch(deleteItem(id || 0))
     }

     const updateProductTang = async (id: number) => {
          const type = {
               type: "tang",
               id: id,
          }
          await dispatch(updateItem(type))
     }

     const updateProductGiam = async (id: number) => {
          const type = {
               type: "giam",
               id: id,
          }
          await dispatch(updateItem(type))
     }

     // Format total amount to VND
     const totalAmount = arrayDataProduct?.reduce(
          (total, product) =>
               total + product.quantity * (product.price as unknown as number),
          0
     )

     return (
          <>
               <Box className="flex flex-col gap-5 ml-5">
                    {arrayDataProduct?.map((product, index) => {
                         return (
                              <Box
                                   key={index}
                                   className="flex gap-5 group/item relative"
                              >
                                   <img
                                        src={`${product.pathImg}`}
                                        alt=""
                                        className="w-[70px] h-[103px]"
                                   />
                                   <Box className="w-[250px] flex flex-col gap-3">
                                        <Typography className="text-ellipsis text-sm">
                                             {product.name}
                                        </Typography>
                                        <Typography>
                                             {new Intl.NumberFormat("vi-VN", {
                                                  style: "currency",
                                                  currency: "VND",
                                             }).format(
                                                  product.price as unknown as number
                                             )}
                                        </Typography>
                                        <Box className="flex">
                                             <Button
                                                  className="w-[20px] h-[20px] content-center mr-3 text-white rounded-full bg-black"
                                                  variant="contained"
                                                  onClick={() =>
                                                       updateProductTang(
                                                            product.id as number
                                                       )
                                                  }
                                             >
                                                  +
                                             </Button>
                                             <Input
                                                  type="text"
                                                  className="w-[20px] h-[20px] justify-center text-center content-center mr-3 flex items-center"
                                                  value={product.quantity}
                                                  readOnly
                                             />
                                             <Button
                                                  className="w-[10px] h-[20px] content-center mr-3 text-white rounded-full  bg-black"
                                                  disabled={
                                                       product.quantity <= 1
                                                  }
                                                  variant="contained"
                                                  onClick={() =>
                                                       updateProductGiam(
                                                            product.id as number
                                                       )
                                                  }
                                             >
                                                  -
                                             </Button>
                                        </Box>
                                   </Box>
                                   <IconButton
                                        className="absolute top-0 right-0"
                                        aria-label="delete"
                                        onClick={() =>
                                             deleteProduct(product.id as number)
                                        }
                                   >
                                        <DeleteIcon />
                                   </IconButton>
                              </Box>
                         )
                    })}
               </Box>

               {/* Display formatted total amount */}
               <Box className="ml-4 mt-5 text-2xl ">
                    <Typography className="font-bold">
                         TỔNG TIỀN:{" "}
                         {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                         }).format(totalAmount || 0)}
                    </Typography>
               </Box>
          </>
     )
}

export default FrameListProduct
