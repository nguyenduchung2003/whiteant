import {
     //  useEffect, useRef,
     useState,
     // useEffect,
} from "react"
// import { useDispatch, useSelector } from "react-redux"
// import {
//      // register,
//      // registerUser,
//      requestToken,
//      // registerUsersAuthenToken,
// } from "../Slice/SliceAction"
// import { AppDispatch, RootState } from "../Store/store"
import { NavLink, useNavigate } from "react-router-dom"

import { Formik, Form, ErrorMessage } from "formik"
import { useSchemasRegister } from "../../Validate/Validate"
import FooterContent from "../Footer/FooterContent"
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

// import { userType } from "../types/User"

const Register = () => {
     const [checkEye, setCheckEye] = useState<boolean>(true)
     const [checkEyeConfirm, setCheckEyeConfirm] = useState<boolean>(true)

     const navigate = useNavigate()
     // const dispatch = useDispatch<AppDispatch>()
     // const dataMovie = useSelector((state: RootState) => {

     // })

     interface MyFormValues {
          email: string
          password: string
          passwordConfirm: string
     }
     const initialValues: MyFormValues = {
          email: "",
          password: "",
          passwordConfirm: "",
     }

     return (
          <>
               <HeadSideBar />

               <hr />
               <Box className="flex justify-center items-center mt-[120px] ">
                    <Formik
                         initialValues={initialValues}
                         validationSchema={useSchemasRegister}
                         onSubmit={async (values, actions) => {
                              const newUser = {
                                   userName: values.email,
                                   passWord: values.password,
                                   list: [],
                                   status: false,
                              }
                              let usersFromLocalStorage: userType[] = []
                              const storedData = localStorage.getItem("userss")

                              if (storedData !== null) {
                                   usersFromLocalStorage =
                                        JSON.parse(storedData)
                              } else {
                                   console.log(1)
                              }

                              const updatedUsers = [
                                   ...usersFromLocalStorage,
                                   newUser,
                              ]
                              localStorage.setItem(
                                   "userss",
                                   JSON.stringify(updatedUsers)
                              )

                              navigate("/whiteant/login")

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
                                             ĐĂNG KÍ
                                        </Typography>
                                   </Box>
                                   <Form className="w-1/3 h-[80%] flex flex-col gap-[50px] justify-center items-center">
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
                                                  className="border-2 bg-[white] rounded w-full"
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
                                                  className="border-2 bg- rounded w-full"
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
                                                                      <VisibilityOffIcon />
                                                                 ) : (
                                                                      <VisibilityIcon />
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
                                        <Box className=" w-[100%] h-[50px]">
                                             <TextField
                                                  variant="outlined"
                                                  label="Password confirm"
                                                  type={
                                                       checkEyeConfirm
                                                            ? "password"
                                                            : "text"
                                                  }
                                                  value={
                                                       formikProps.values
                                                            .passwordConfirm !==
                                                       undefined
                                                            ? formikProps.values
                                                                   .passwordConfirm
                                                            : ""
                                                  }
                                                  name="passwordConfirm"
                                                  className="border-2 bg-grey rounded w-full"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .passwordConfirm &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .passwordConfirm
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
                                                                      setCheckEyeConfirm(
                                                                           !checkEyeConfirm
                                                                      )
                                                                 }}
                                                            >
                                                                 {checkEyeConfirm ? (
                                                                      <VisibilityOffIcon />
                                                                 ) : (
                                                                      <VisibilityIcon />
                                                                 )}
                                                            </InputAdornment>
                                                       ),
                                                  }}
                                                  InputLabelProps={{
                                                       style: { color: "grey" },
                                                  }}
                                                  autoComplete="off"
                                             />
                                             <ErrorMessage name="passwordConfirm">
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
                                             className="rounded 10  h-[50px] w-[100%] bg-black text-white hover-white"
                                        >
                                             Register
                                        </Button>
                                        <Typography className="text-grey ">
                                             Tôi đã có tài khoản
                                             <NavLink
                                                  to="/whiteant/login"
                                                  className="text-red-600 relative left-5"
                                             >
                                                  Đăng nhập
                                             </NavLink>
                                        </Typography>
                                   </Form>
                              </>
                         )}
                    </Formik>
               </Box>
               <FooterContent />
          </>
     )
}
export default Register
