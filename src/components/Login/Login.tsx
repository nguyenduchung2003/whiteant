import { useEffect, useState } from "react"
// import {
//      useDispatch,
//      // , useSelector
// } from "react-redux"
// import {
//      // login,
//      // loginUsersAuthen,
//      // registerUsersAuthenToken,
//      accessToken,
// } from "../Slice/SliceAction"
// import {
//      AppDispatch,
//      // , RootState
// } from "../Store/store"
import { NavLink, useNavigate } from "react-router-dom"

import { Formik, Form, ErrorMessage } from "formik"
// import useSchemas from "../Validate/Validate"

import {
     Button,
     TextField,
     Box,
     Typography,
     InputAdornment,
} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import HeadSideBar from "../SideBar/HeadSideBar"
import Menu from "../Menu"
import FooterContent from "../Footer/FooterContent"
import Cart from "../Cart/Cart"
// import { useSelector } from "react-redux"
// import { RootState } from "../Store/store"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import { ListMovieFavorites } from "../axios/customAxios"
const Login = () => {
     const navigate = useNavigate()
     // const dispatch = useDispatch<AppDispatch>()
     // const tokenUser = useSelector(
     //      (state: RootState) => state.accountSlice.token
     // )
     const [checkEye, setCheckEye] = useState<boolean>(true)

     interface MyFormValues {
          email: string
          password: string
     }
     interface userNow {
          userName: string
          passWord: string
          list: string
          status: boolean
     }
     // interface registerUsersAuthenToken {
     //           payload
     // }
     const initialValues: MyFormValues = {
          email: "",
          password: "",
     }
     // const dataSelectorToken = useSelector(
     //      (state: RootState) => state.accountSlice.token
     // )
     // const dispatch = useDispatch<AppDispatch>()
     // const dataSelectorSessionId = useSelector(
     //      (state: RootState) => state.accountSlice.sessionId
     // )
     // console.log(dataSelectorSessionId)
     // // const [sessionId1, setSessionId1] = useState("")
     // useEffect(() => {
     //      async function z() {
     //           const token = JSON.parse(localStorage.getItem("token") || "[]")

     //           // const user = JSON.parse(localStorage.getItem("users") || "[]")

     //           // console.log(user)

     //           //const y = await dispatch(registerUsersAuthenToken(String(x)))
     //           // const y =
     //           await dispatch(accessToken(String(token)))
     //           // console.log(y)
     //           // await setSessionId1(y.payload?.access_token)
     //           // console.log(y)
     //      }
     //      z()
     // }, [dispatch])
     // const access_token = useSelector(
     //      (state: RootState) => state.accountSlice.access_token as string
     // )
     const [openMenu, setOpenMenu] = useState<boolean>(false)
     const [openCart, setOpenCart] = useState<boolean>(false) // New state for cart visibility
     const ClickOpenMenu = () => {
          setOpenMenu(true)
     }
     const ClickOpenCart = () => {
          setOpenCart(true)
          setOpenMenu(false)
     }
     useEffect(() => {
          const admin = {
               userName: "admin@gmail.com",
               passWord: "123123",
               list: [],
               status: false,
          }
          const storedData: userNow[] = JSON.parse(
               localStorage.getItem("userss") as string
          )

          if (!storedData) {
               localStorage.setItem("userss", JSON.stringify([admin]))
          } else {
               storedData.forEach((user) => {
                    if (user.status == true) {
                         user.status = false
                    }
               })
               localStorage.setItem("userss", JSON.stringify(storedData))
          }
     }, [])
     return (
          <>
               <HeadSideBar
                    ClickOpenMenu={ClickOpenMenu}
                    ClickOpenCart={ClickOpenCart}
               />
               {openMenu ? (
                    <Box className="w-full h-[100vh] bg-[rgba(0,0,0,.75)] fixed top-[0px] z-[30]">
                         <Menu setOpenMenu={setOpenMenu} />
                    </Box>
               ) : (
                    ""
               )}
               {openCart ? (
                    <Box className="w-full h-[100vh] bg-[rgba(0,0,0,.75)] fixed top-[0px] z-[30]">
                         <Cart setOpenCart={setOpenCart} />
                    </Box>
               ) : (
                    ""
               )}
               <hr />
               <Box className=" flex justify-center items-center mt-[150px]">
                    <ToastContainer />
                    <Formik
                         initialValues={initialValues}
                         onSubmit={async (values, actions) => {
                              console.log(actions)
                              console.log(values)

                              const storedData: userNow[] = JSON.parse(
                                   localStorage.getItem("userss") as string
                              )

                              if (storedData !== null) {
                                   storedData.forEach((value) => {
                                        if (
                                             value.userName == values.email &&
                                             value.passWord == values.password
                                        ) {
                                             value.status = true
                                             navigate("/whiteant/")
                                        } else {
                                             console.log(
                                                  "Fail to update session"
                                             )
                                             // alert(
                                             //      "Tài khoản hoặc mật khẩu không đúng"
                                             // )
                                        }
                                   })
                                   if (
                                        !storedData.some(
                                             (value) =>
                                                  value.userName ==
                                                       values.email &&
                                                  value.passWord ==
                                                       values.password
                                        )
                                   ) {
                                        toast.error(
                                             "Tài khoản hoặc mật khẩu không chính xác",
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
                                   }
                                   localStorage.setItem(
                                        "userss",
                                        JSON.stringify(storedData)
                                   )
                              } else {
                                   toast.error(
                                        "Tài khoản hoặc mật khẩu không chính xác",
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
                                   console.log("No users local storage")
                              }

                              actions.setSubmitting(false)
                         }}
                    >
                         {(formikProps) => (
                              <>
                                   <Box className=" flex w-1/2">
                                        <Typography
                                             variant="h3"
                                             className="font-bold text-black relative ml-[100px] p-[10px]"
                                        >
                                             ĐĂNG NHẬP
                                        </Typography>
                                   </Box>
                                   <Form className=" w-1/3 h-[80%] flex flex-col gap-[50px] justify-center items-center">
                                        <Typography
                                             variant="h3"
                                             className="text-white relative "
                                        >
                                             Login
                                        </Typography>
                                        <Box className=" w-[100%] h-[50px]">
                                             <TextField
                                                  variant="outlined"
                                                  label="Email"
                                                  value={
                                                       formikProps.values
                                                            .email !== undefined
                                                            ? formikProps.values
                                                                   .email
                                                            : ""
                                                  }
                                                  name="email"
                                                  className="border-2 bg-grey rounded w-full"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .email &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .email
                                                       )
                                                  }
                                                  inputProps={{
                                                       style: {
                                                            color: "black",
                                                       },
                                                  }}
                                                  InputLabelProps={{
                                                       style: { color: "grey" },
                                                  }}
                                                  autoComplete="off"
                                             />
                                             <ErrorMessage name="email">
                                                  {(msg) => (
                                                       <Typography className="text-lg text-red-600">
                                                            {msg}
                                                       </Typography>
                                                  )}
                                             </ErrorMessage>
                                        </Box>
                                        <Box className=" w-[100%] h-[50px]">
                                             <TextField
                                                  variant="outlined"
                                                  label="Password"
                                                  type={
                                                       checkEye
                                                            ? "password"
                                                            : "text"
                                                  }
                                                  value={
                                                       formikProps.values
                                                            .password !==
                                                       undefined
                                                            ? formikProps.values
                                                                   .password
                                                            : ""
                                                  }
                                                  name="password"
                                                  className="border-2 bg-grey rounded w-full"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .password &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .password
                                                       )
                                                  }
                                                  InputProps={{
                                                       style: {
                                                            color: "black",
                                                       },
                                                       endAdornment: (
                                                            <InputAdornment
                                                                 position="start"
                                                                 onClick={() => {
                                                                      setCheckEye(
                                                                           !checkEye
                                                                      )
                                                                 }}
                                                            >
                                                                 {checkEye ? (
                                                                      <VisibilityIcon />
                                                                 ) : (
                                                                      <VisibilityOffIcon />
                                                                 )}
                                                            </InputAdornment>
                                                       ),
                                                  }}
                                                  InputLabelProps={{
                                                       style: { color: "grey" },
                                                  }}
                                                  autoComplete="off"
                                             />
                                             <ErrorMessage name="password">
                                                  {(msg) => (
                                                       <Typography className="text-lg text-red-600">
                                                            {msg}
                                                       </Typography>
                                                  )}
                                             </ErrorMessage>
                                        </Box>

                                        <Button
                                             type="submit"
                                             variant="contained"
                                             className="rounded w-[100%]  h-[50px] bg-black "
                                        >
                                             Login
                                        </Button>
                                        <Typography className="text-black ">
                                             Tôi chưa có tài khoản
                                             <NavLink
                                                  to="/register"
                                                  className="text-red-600 relative left-5"
                                             >
                                                  Đăng kí
                                             </NavLink>
                                        </Typography>
                                   </Form>
                              </>
                         )}
                    </Formik>
               </Box>
               <FooterContent />
               {/* Display Cart when openCart is true */}
               {openCart && <Cart setOpenCart={setOpenCart} />}
          </>
     )
}

export default Login
