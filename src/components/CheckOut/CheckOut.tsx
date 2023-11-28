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
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import SelectProvinces from "./SelectProvinces"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hook"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { completeMyOrder } from "../../Slice/Order"
import logo from "../../Image/logo.png"
const CheckOut = () => {
     const dataLocal: userType[] = JSON.parse(
          localStorage.getItem("userss") as string
     )
     const x = dataLocal.filter((user) => user.status == true)
     const userNow = Object.assign({}, x)[0]

     const selectOrder = useAppSelector((state) => {
          const dataFilters = state.order.arrayOrderProduct

          return userNow
               ? dataFilters.filter(
                      (item) => item.emailNow === userNow.userName
                 )
               : []
     })
     const dispatch = useAppDispatch()
     const [nameProvince, setNameProvince] = useState<string>("")
     const [nameDistrict, setNameDistrict] = useState<string>("")
     const [nameWard, setNameWard] = useState<string>("")
     const navigate = useNavigate()
     const [name, setName] = useState<string>("")
     const [email, setEmail] = useState<string>(userNow.userName)
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
          const x = userLocal.filter((user) => user.status == true)
          const user = Object.assign({}, x)[0]
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
                    emailNow: user.userName,
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
               navigate("/whiteant/bill")
               console.log(newOrder)
          }
     }
     const userLocal: userType[] = JSON.parse(
          localStorage.getItem("userss") as string
     )
     // useEffect(() => {
     //      if (userLocal.some((user) => user.status == true)) {
     //           const x = userLocal.filter((user) => user.status == true)
     //           const user = Object.assign({}, x)[0]
     //           console.log(user)
     //           setEmail()
     //      }
     // }, [userLocal])
     const formattedPrice = Number(totalAmount).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
     })
     return (
          <>
               <ToastContainer />
               <Box className="flex ml-10 h-[1000px]">
                    <Box className="w-[50%]">
                         <Button onClick={() => navigate("/whiteant/")}>
                              {" "}
                              <img
                                   className="w-[100px]"
                                   src={logo}
                                   alt=""
                              />{" "}
                         </Button>
                         <Box className="flex flex-col gap-10 w-[60%] ml-[300px] ">
                              <Box className="flex flex-col gap-2">
                                   <Typography variant="h5" className="mt-5">
                                        Thông tin giao hàng
                                   </Typography>
                                   <Box className="flex">
                                        {userLocal.some(
                                             (user) => user.status == true
                                        ) ? (
                                             ""
                                        ) : (
                                             <>
                                                  <Typography>
                                                       Bạn đã có tài khoản ?
                                                  </Typography>
                                                  <Typography
                                                       onClick={() =>
                                                            navigate(
                                                                 "/whiteant/login"
                                                            )
                                                       }
                                                       className="text-cyan-500 cursor-pointer"
                                                  >
                                                       Đăng nhập
                                                  </Typography>
                                             </>
                                        )}
                                   </Box>
                              </Box>

                              <Box className="flex flex-col  gap-5">
                                   <TextField
                                        label="Họ và tên"
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
                                        label="Số điện thoại"
                                        value={numberPhone}
                                        onChange={(e) =>
                                             setNumberPhone(e.target.value)
                                        }
                                   ></TextField>
                                   <TextField
                                        label="Địa chỉ"
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
                                   <FormLabel>Phương thức vận chuyển</FormLabel>
                                   <RadioGroup
                                        name="vanchuyen"
                                        value={valueShip}
                                        onChange={handleChangeShip}
                                   >
                                        <FormControlLabel
                                             value="Ship"
                                             control={<Radio />}
                                             label="Giao hàng tận nơi, Freeship với đơn hàng trên 1.000.000"
                                        />
                                        <FormControlLabel
                                             value="Shop"
                                             control={<Radio />}
                                             label="Đến trực tiếp cửa hàng"
                                        />
                                   </RadioGroup>
                              </FormControl>
                              <FormControl>
                                   <FormLabel>Phương thức thanh toán</FormLabel>
                                   <RadioGroup
                                        name="thanhtoan"
                                        value={valuePayment}
                                        onChange={handleChangePayment}
                                   >
                                        <FormControlLabel
                                             value="COD"
                                             control={<Radio />}
                                             label="Thanh toán khi giao hàng (COD)"
                                        />
                                        <FormControlLabel
                                             value="CHUYENKHOAN"
                                             control={<Radio />}
                                             label="Chuyển khoản qua ngân hàng"
                                        />
                                   </RadioGroup>
                              </FormControl>

                              <Button
                                   variant="contained"
                                   onClick={CompleteOrder}
                                   className="bg-black"
                              >
                                   Hoàn tất đơn hàng
                              </Button>
                         </Box>
                    </Box>
                    <Box className="w-[50%] ml-10 border-l-[1px] pt-[70px] bg-[#f5f5f5]">
                         <Box className="flex flex-col gap-5 ml-10">
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
                                                       <Typography className="text-sm">
                                                            SL:
                                                            {product.quantity}
                                                       </Typography>
                                                  </Box>
                                                  <Box className="flex">
                                                       <Typography className="text-sm">
                                                            Size:
                                                            {product.size}
                                                       </Typography>
                                                  </Box>
                                             </Box>
                                        </Box>
                                   )
                              })}
                         </Box>
                         <hr className="mt-[20px] w-[38%] ml-10" />
                         <Typography className="mt-[20px] ml-10">
                              Tạm tính: {`${formattedPrice}`}
                         </Typography>
                         <Typography className="mt-[20px] ml-10">
                              Phí vận chuyển: Free
                         </Typography>
                         <hr className="mt-[20px] w-[38%] ml-10" />
                         <Typography className="mt-[20px] ml-10">
                              Tổng cộng: {`${formattedPrice}`}
                         </Typography>
                    </Box>
               </Box>
          </>
     )
}
export default CheckOut
