import logo2 from "../../Image/logo.png"
import { Box } from "@mui/material"
// import SearchIcon from "@mui/icons-material/Search"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import { Link } from "react-router-dom"
import { useState } from "react"
import Menu from "../Menu/Menu"
import Cart from "../Cart/Cart"
import { ToastContainer, toast } from "react-toastify"
const HeadSideBar = () => {
     const [openMenu, setOpenMenu] = useState<boolean>(false)
     const [openCart, setOpenCart] = useState<boolean>(false)
     const ClickOpenMenu = () => {
          setOpenMenu(true)
     }
     const ClickOpenCart = () => {
          const dataLocal: userType[] = JSON.parse(
               localStorage.getItem("userss") as string
          )
          const x = dataLocal?.filter((user) => user.status == true)
          const userNow = Object.assign({}, x)[0]
          // const newItem: arrayOrderProduct = {
          //      id: id,
          //      pathImg: path,
          //      name: name,
          //      price: price,
          //      quantity: 1,
          //      emailNow: userNow?.userName,
          // }

          if (userNow) {
               setOpenCart(true)
               setOpenMenu(false)
          } else {
               toast.warning("Bạn cần phải đăng nhập trước", {
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
     }
     return (
          <>
               <ToastContainer />
               <Box className="flex justify-around h-[110px] gap-[900px] relative z-[10] bg-white">
                    <Box className="flex gap-4 justify-center items-center w-[300px]">
                         <Link to="/whiteant/">
                              <img src={logo2} alt="" />
                         </Link>
                    </Box>
                    <Box className="flex gap-10 justify-center items-center w-[250px]">
                         {/* <SearchIcon className="cursor-pointer"  fontSize="large" /> */}
                         <ShoppingBagOutlinedIcon
                              className="cursor-pointer"
                              fontSize="large"
                              onClick={ClickOpenCart}
                         />

                         <Box>
                              <MenuOutlinedIcon
                                   className="cursor-pointer"
                                   fontSize="large"
                                   onClick={ClickOpenMenu}
                              />
                              Menu
                         </Box>
                    </Box>
               </Box>
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
          </>
     )
}

export default HeadSideBar
