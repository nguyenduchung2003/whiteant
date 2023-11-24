import { Box, Button, Typography, Input } from "@mui/material"

import { useAppSelector, useAppDispatch } from "../../hook"
import { deleteItem, updateItem } from "../../Slice/Order"
interface Props {
     arrayDataProduct: arrayOrderProduct[]
}
const FrameListProduct = ({ arrayDataProduct }: Props) => {
     const selectOrder = useAppSelector((state) => state.order)
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

     return (
          <>
               <Box className="flex flex-col gap-5 ml-5">
                    {arrayDataProduct.map((product, index) => {
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
                                   <Box className="w-[225px] flex flex-col gap-3">
                                        <Typography className="text-ellipsis text-sm">
                                             {product.name}
                                        </Typography>
                                        <Typography>{product.price}</Typography>
                                        <Box className="flex">
                                             <Button
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
                                                  className="border-2 w-[100px] h-[20px]  content-center mr-2 "
                                                  value={product.quantity}
                                                  readOnly
                                             ></Input>
                                             <Button
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

                                        <Typography>
                                             Sum{" "}
                                             {`${
                                                  product.quantity *
                                                  (product.price as unknown as number)
                                             }`}
                                        </Typography>
                                   </Box>
                                   <Button
                                        onClick={() =>
                                             deleteProduct(product.id as number)
                                        }
                                   >
                                        delete
                                   </Button>
                              </Box>
                         )
                    })}
               </Box>
          </>
     )
}

export default FrameListProduct
