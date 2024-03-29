import {
     Box,
     Typography,
     Button,
     Input,
     Checkbox,
     FormGroup,
     FormControlLabel,
} from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hook"
import HeadSideBar from "../SideBar/HeadSideBar"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../Footer"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import CollapsibleSection from "./CollapsibleSection"
import { addItem } from "../../Slice/Order"

const DetailProduct = () => {
     const { id } = useParams()

     const selectData = useAppSelector((state) => {
          return state.dataProduct.filter((item) => item.id == id)
     })

     const dispatch = useAppDispatch()
     const [quantity, setQuantity] = useState<number>(1)
     // const [selectedSize, setSelectedSize] = useState<string>("")
     const [checkedValues, setCheckedValues] = useState<string[]>([])
     const handleCheckboxChange = (value: string) => {
          if (checkedValues.includes(value)) {
               setCheckedValues(checkedValues.filter((v) => v !== value))
          } else {
               setCheckedValues([...checkedValues, value])
          }
     }
     const handlerAddItemOrder = async (
          id: number,
          path: string,
          name: string,
          price: string
     ) => {
          const dataLocal: userType[] = JSON.parse(
               localStorage.getItem("userss") as string
          )
          const x = dataLocal.filter((user) => user.status == true)
          const userNow = Object.assign({}, x)[0]
          const newItem: arrayOrderProduct = {
               id: id,
               pathImg: path,
               name: name,
               price: price,
               quantity: quantity,
               size: checkedValues,
               emailNow: userNow?.userName,
          }

          await dispatch(addItem(newItem))

          toast.success("Thêm vào giỏ hàng thành công", {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
          })
     }

     return (
          <>
               <HeadSideBar />

               <ToastContainer />
               <Box>
                    {selectData.map((item, index) => {
                         return (
                              <Box className="flex" key={index}>
                                   <Box className="flex">
                                        <img
                                             src={item.pathImg}
                                             alt=""
                                             className=""
                                        />
                                   </Box>
                                   <Box className=" flex flex-col gap-5 ml-20">
                                        <Box className="flex flex-col gap-5">
                                             <Typography
                                                  variant="h4"
                                                  className="w-full"
                                             >
                                                  <strong>{item.name}</strong>
                                             </Typography>
                                             <Typography className="w-full">
                                                  Mã SP: {item.id}
                                             </Typography>
                                             <Typography className="w-full">
                                                  Tình trạng:{" "}
                                                  {item.quantity &&
                                                  item.quantity > 0
                                                       ? "Còn hàng"
                                                       : "Hết hàng"}
                                             </Typography>
                                             <Typography variant="h5">
                                                  <strong>
                                                       Giá:
                                                       {new Intl.NumberFormat(
                                                            "vi-VN",
                                                            {
                                                                 style: "currency",
                                                                 currency:
                                                                      "VND",
                                                            }
                                                       ).format(
                                                            item.price as unknown as number
                                                       )}
                                                  </strong>
                                             </Typography>
                                             <Box className="flex content-center">
                                                  <Typography className="h-[50px]">
                                                       Chọn size:
                                                  </Typography>
                                                  {/* <ul className="grid w-[50%] gap-6 md:grid-cols-3 ">
                                                       <li>
                                                            <button
                                                                 onClick={() =>
                                                                      setSelectedSize(
                                                                           "S"
                                                                      )
                                                                 }
                                                                 className={`${
                                                                      selectedSize ===
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
                                                                 onClick={() =>
                                                                      setSelectedSize(
                                                                           "M"
                                                                      )
                                                                 }
                                                                 className={`${
                                                                      selectedSize ===
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
                                                                 onClick={() =>
                                                                      setSelectedSize(
                                                                           "L"
                                                                      )
                                                                 }
                                                                 className={`${
                                                                      selectedSize ===
                                                                      "L"
                                                                           ? "bg-gray-300"
                                                                           : ""
                                                                 } w-full text-lg font-semibold`}
                                                            >
                                                                 L
                                                            </button>
                                                       </li>
                                                  </ul> */}
                                                  <FormGroup className="ml-10 ">
                                                       <FormControlLabel
                                                            control={
                                                                 <Checkbox />
                                                            }
                                                            label="S"
                                                            onChange={() =>
                                                                 handleCheckboxChange(
                                                                      "S"
                                                                 )
                                                            }
                                                       />
                                                       <FormControlLabel
                                                            control={
                                                                 <Checkbox />
                                                            }
                                                            label="M"
                                                            onChange={() =>
                                                                 handleCheckboxChange(
                                                                      "M"
                                                                 )
                                                            }
                                                       />
                                                       <FormControlLabel
                                                            control={
                                                                 <Checkbox />
                                                            }
                                                            label="L"
                                                            onChange={() =>
                                                                 handleCheckboxChange(
                                                                      "L"
                                                                 )
                                                            }
                                                       />
                                                       {/* <div>
                                                            <strong>
                                                                 Giá trị đã
                                                                 chọn:
                                                            </strong>{" "}
                                                            {checkedValues.join(
                                                                 ", "
                                                            )}
                                                       </div> */}
                                                  </FormGroup>
                                             </Box>
                                             <Box className="flex content-center">
                                                  <Box className="flex justify-center">
                                                       <Button
                                                            className="w-[10px] h-[40px] content-center mr-3 text-white rounded-full bg-black"
                                                            variant="contained"
                                                            onClick={() => {
                                                                 if (
                                                                      item.quantity &&
                                                                      quantity <
                                                                           item.quantity
                                                                 ) {
                                                                      setQuantity(
                                                                           quantity +
                                                                                1
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
                                                                 if (
                                                                      quantity ==
                                                                      0
                                                                 ) {
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
                                                                      setQuantity(
                                                                           quantity -
                                                                                1
                                                                      )
                                                                 }
                                                            }}
                                                       >
                                                            -
                                                       </Button>
                                                  </Box>
                                                  <Button
                                                       className="ml-5 bg-black text-white w-[50%] rounded-full"
                                                       onClick={() =>
                                                            handlerAddItemOrder(
                                                                 item.id as number,
                                                                 item.pathImg,
                                                                 item.name,
                                                                 item.price
                                                            )
                                                       }
                                                  >
                                                       <AddShoppingCartIcon></AddShoppingCartIcon>
                                                       Thêm vào giỏ hàng
                                                  </Button>
                                             </Box>
                                        </Box>

                                        <Box className="flex flex-col gap-1 mt-10">
                                             <CollapsibleSection
                                                  title="Mô tả chi tiết"
                                                  content={item.describe}
                                             />
                                             <CollapsibleSection
                                                  title="Hướng dẫn bảo quản"
                                                  content={item.describe}
                                             />
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
