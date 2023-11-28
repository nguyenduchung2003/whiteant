import {
     Box,
     Button,
     Typography,
     Input,
     IconButton,
     FormControlLabel,
     Checkbox,
     FormGroup,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
// import AddIcon from "@mui/icons-material/Add"
// import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hook"
import { deleteItem, updateItem, updateItemSize } from "../../Slice/Order"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
interface Props {
     arrayDataProduct: arrayOrderProduct[]
}

const ProductFameListCart = ({ arrayDataProduct }: Props) => {
     const arrayData = useAppSelector((state) => state.dataProduct)
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
     const data = arrayData.filter((item) =>
          arrayDataProduct.some((itemO) => itemO.id == item.id)
     )

     const [checkedValues, setCheckedValues] = useState<{
          [key: number]: string[]
     }>({})

     const handleCheckboxChange = (value: string, id: number) => {
          setCheckedValues((prevValues) => {
               const currentSizes = prevValues[id] || []

               if (currentSizes.includes(value)) {
                    return {
                         ...prevValues,
                         [id]: currentSizes.filter((v) => v !== value),
                    }
               } else {
                    return {
                         ...prevValues,
                         [id]: [...currentSizes, value],
                    }
               }
          })
     }
     useEffect(() => {
          Object.keys(checkedValues).forEach((id) => {
               dispatch(
                    updateItemSize({
                         id: parseInt(id),
                         size: checkedValues[parseInt(id)],
                    })
               )
          })
     }, [checkedValues, dispatch])

     return (
          <>
               <ToastContainer />
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
                                        <Box className="flex content-center">
                                             <Typography className="h-[50px]">
                                                  Chọn size
                                             </Typography>

                                             <FormGroup>
                                                  <FormControlLabel
                                                       control={
                                                            <Checkbox
                                                                 checked={
                                                                      product.size?.some(
                                                                           (
                                                                                value
                                                                           ) =>
                                                                                value ==
                                                                                "S"
                                                                      )
                                                                           ? true
                                                                           : false
                                                                 }
                                                            />
                                                       }
                                                       label="S"
                                                       onChange={() =>
                                                            handleCheckboxChange(
                                                                 "S",
                                                                 product?.id as number
                                                            )
                                                       }
                                                  />
                                                  <FormControlLabel
                                                       control={
                                                            <Checkbox
                                                                 checked={
                                                                      product.size?.some(
                                                                           (
                                                                                value
                                                                           ) =>
                                                                                value ==
                                                                                "M"
                                                                      )
                                                                           ? true
                                                                           : false
                                                                 }
                                                            />
                                                       }
                                                       label="M"
                                                       onChange={() =>
                                                            handleCheckboxChange(
                                                                 "M",
                                                                 product?.id as number
                                                            )
                                                       }
                                                  />
                                                  <FormControlLabel
                                                       control={
                                                            <Checkbox
                                                                 checked={
                                                                      product.size?.some(
                                                                           (
                                                                                value
                                                                           ) =>
                                                                                value ==
                                                                                "L"
                                                                      )
                                                                           ? true
                                                                           : false
                                                                 }
                                                            />
                                                       }
                                                       label="L"
                                                       onChange={() =>
                                                            handleCheckboxChange(
                                                                 "L",
                                                                 product?.id as number
                                                            )
                                                       }
                                                  />
                                             </FormGroup>

                                             {/* <ul className="grid w-[50%] gap-6 md:grid-cols-3 ">
                                                  <li>
                                                       <button
                                                            onClick={() => {
                                                                 // setSelectedSize(
                                                                 //      "S"
                                                                 // )
                                                                 dispatch(
                                                                      updateItemSize(
                                                                           {
                                                                                id: product.id,
                                                                                size: "S",
                                                                           }
                                                                      )
                                                                 )
                                                            }}
                                                            className={`${
                                                                 product.size ==
                                                                 "S"
                                                                      ? "bg-gray-300"
                                                                      : ""
                                                            } w-full text-lg font-semibold`}
                                                       >
                                                            S
                                                       </button>
                                                  </li>
                                                  <li>
                                                       <button
                                                            onClick={() => {
                                                                 dispatch(
                                                                      updateItemSize(
                                                                           {
                                                                                id: product.id,
                                                                                size: "M",
                                                                           }
                                                                      )
                                                                 )
                                                                 // setSelectedSize(
                                                                 //      "M"
                                                                 // )
                                                            }}
                                                            className={`${
                                                                 // selectedSize ===
                                                                 //      "M" &&
                                                                 product.size ==
                                                                 "M"
                                                                      ? "bg-gray-300"
                                                                      : ""
                                                            } w-full text-lg font-semibold`}
                                                       >
                                                            M
                                                       </button>
                                                  </li>
                                                  <li>
                                                       <button
                                                            onClick={() => {
                                                                 dispatch(
                                                                      updateItemSize(
                                                                           {
                                                                                id: product.id,
                                                                                size: "L",
                                                                           }
                                                                      )
                                                                 )
                                                                 // setSelectedSize(
                                                                 //      "L"
                                                                 // )
                                                            }}
                                                            className={`${
                                                                 product.size ==
                                                                 "L"
                                                                      ? "bg-gray-300"
                                                                      : ""
                                                            } w-full text-lg font-semibold`}
                                                       >
                                                            L
                                                       </button>
                                                  </li>
                                             </ul> */}
                                        </Box>
                                        <Box className="flex">
                                             <Button
                                                  className="w-[20px] h-[20px] content-center mr-3 text-white rounded-full bg-black"
                                                  variant="contained"
                                                  onClick={() => {
                                                       if (
                                                            product.quantity &&
                                                            product.quantity <
                                                                 (data[index]
                                                                      ?.quantity as unknown as number)
                                                       ) {
                                                            updateProductTang(
                                                                 product.id as number
                                                            )
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

export default ProductFameListCart
