import {
     Box,
     Typography,
     TextField,
     FormControl,
     FormLabel,
     RadioGroup,
     FormControlLabel,
     Radio,
     Button,
     Divider,
     Input,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import SelectProvinces from "./SelectProvinces"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hook"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { completeMyOrder } from "../../Slice/Order"
const CheckOut = () => {
     const selectOrder = useAppSelector(
          (state) => state.order.arrayOrderProduct
     )
     const dispatch = useAppDispatch()
     const [nameProvince, setNameProvince] = useState<string>("")
     const [nameDistrict, setNameDistrict] = useState<string>("")
     const [nameWard, setNameWard] = useState<string>("")
     const navigate = useNavigate()
     const [name, setName] = useState<string>("")
     const [email, setEmail] = useState<string>("")
     const [numberPhone, setNumberPhone] = useState<string>("")
     const [address, setAddress] = useState<string>("")
     const [valueShip, setValueShip] = useState("ghtk")
     const [valuePayment, setValuePayment] = useState("tienmat")

     const handleChangeShip = (event: React.ChangeEvent<HTMLInputElement>) => {
          setValueShip((event.target as HTMLInputElement).value)
     }
     const handleChangePayment = (
          event: React.ChangeEvent<HTMLInputElement>
     ) => {
          setValuePayment((event.target as HTMLInputElement).value)
     }
     const totalAmount = selectOrder.reduce(
          (total, product) =>
               total + product.quantity * (product.price as unknown as number),
          0
     )

     const CompleteOrder = async () => {
          if (
               !name ||
               !email ||
               !numberPhone ||
               !address ||
               !valueShip ||
               !valuePayment ||
               !nameProvince ||
               !nameDistrict ||
               !nameWard
          ) {
               toast.error("Vui long nhap day du", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
               })
          } else if (selectOrder.length <= 0) {
               toast.error("Chua co san pham nao trong hoa don", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
               })
          } else {
               const newOrder = {
                    name: name,
                    email: email,
                    numberPhone: numberPhone,
                    address: address,
                    valueShip: valueShip,
                    valuePayment: valuePayment,
                    nameProvince: nameProvince,
                    nameDistrict: nameDistrict,
                    nameWard: nameWard,
                    arrayOder: selectOrder,
                    totalAmount: totalAmount,
               }
               toast.success("Dat hang thanh cong", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
               })
               await dispatch(completeMyOrder(newOrder))
               navigate("/bill")
               console.log(newOrder)
          }
     }
     const userLocal: userType[] = JSON.parse(
          localStorage.getItem("userss") as string
     )
     useEffect(() => {
          if (userLocal.some((user) => user.status == true)) {
               const x = userLocal.filter((user) => user.status == true)
               const user = Object.assign({}, x)[0]
               console.log(user)
               setEmail(user.userName)
          }
     }, [userLocal])
     return (
          <>
               <ToastContainer />
               <Box className="flex">
                    <Box className="w-[50%]">
                         <Button onClick={() => navigate("/")}>Logo</Button>
                         <Box className="flex flex-col gap-10  ">
                              <Box className="flex flex-col gap-2">
                                   <Typography variant="h5">
                                        Thong tin giao hang
                                   </Typography>
                                   <Box className="flex">
                                        {userLocal.some(
                                             (user) => user.status == true
                                        ) ? (
                                             ""
                                        ) : (
                                             <>
                                                  <Typography>
                                                       Ban da co tai khoan ?
                                                  </Typography>
                                                  <Typography
                                                       onClick={() =>
                                                            navigate("/login")
                                                       }
                                                       className="text-cyan-500 cursor-pointer"
                                                  >
                                                       Dang nhap
                                                  </Typography>
                                             </>
                                        )}
                                   </Box>
                              </Box>

                              <Box className="flex flex-col  gap-5">
                                   <TextField
                                        label="Ho va ten"
                                        value={name}
                                        onChange={(e) =>
                                             setName(e.target.value)
                                        }
                                   ></TextField>
                                   <TextField
                                        label="Email"
                                        value={email}
                                        onChange={(e) =>
                                             setEmail(e.target.value)
                                        }
                                   ></TextField>
                                   <TextField
                                        label="So dien thoai"
                                        value={numberPhone}
                                        onChange={(e) =>
                                             setNumberPhone(e.target.value)
                                        }
                                   ></TextField>
                                   <TextField
                                        label="Dia chi"
                                        value={address}
                                        onChange={(e) =>
                                             setAddress(e.target.value)
                                        }
                                   ></TextField>
                              </Box>
                              <SelectProvinces
                                   setNameProvince={setNameProvince}
                                   setNameDistrict={setNameDistrict}
                                   setNameWard={setNameWard}
                              />

                              <FormControl>
                                   <FormLabel>Phuong thuc van chuyen</FormLabel>
                                   <RadioGroup
                                        name="vanchuyen"
                                        value={valueShip}
                                        onChange={handleChangeShip}
                                   >
                                        <FormControlLabel
                                             value="ghtk"
                                             control={<Radio />}
                                             label="GHTK"
                                        />
                                        <FormControlLabel
                                             value="denshop"
                                             control={<Radio />}
                                             label="Den shop"
                                        />
                                   </RadioGroup>
                              </FormControl>
                              <FormControl>
                                   <FormLabel>Phuong thuc thanh toan</FormLabel>
                                   <RadioGroup
                                        name="thanhtoan"
                                        value={valuePayment}
                                        onChange={handleChangePayment}
                                   >
                                        <FormControlLabel
                                             value="tienmat"
                                             control={<Radio />}
                                             label="tien mat"
                                        />
                                        <FormControlLabel
                                             value="chuyenkhoan"
                                             control={<Radio />}
                                             label="chuyen khoan"
                                        />
                                   </RadioGroup>
                              </FormControl>

                              <Button
                                   variant="outlined"
                                   onClick={CompleteOrder}
                              >
                                   Hoan tat don hang
                              </Button>
                         </Box>
                    </Box>
                    <Box className="w-[50%] mt-[50px]">
                         <Box className="flex flex-col gap-5 ml-5">
                              {selectOrder.map((product, index) => {
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
                                                       {new Intl.NumberFormat(
                                                            "vi-VN",
                                                            {
                                                                 style: "currency",
                                                                 currency:
                                                                      "VND",
                                                            }
                                                       ).format(
                                                            product.price as unknown as number
                                                       )}
                                                  </Typography>
                                                  <Box className="flex">
                                                       <Input
                                                            type="text"
                                                            className="w-[20px] h-[20px] justify-center text-center content-center mr-3 flex items-center"
                                                            value={
                                                                 product.quantity
                                                            }
                                                            readOnly
                                                       />
                                                  </Box>
                                             </Box>
                                        </Box>
                                   )
                              })}
                         </Box>
                         <hr className="mt-[20px]" />
                         <Typography>Tong tien : {`${totalAmount}`}</Typography>
                    </Box>
               </Box>
          </>
     )
}
export default CheckOut
