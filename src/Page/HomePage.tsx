import SideBar from "../components/SideBar"
import Product from "../components/Product"
import Information from "../components/Information"
import Iconcontact from "../components/IconContact"
import Menu from "../components/Menu"
import { Box } from "@mui/material"
import { useState } from "react"
import FooterContent from "../components/Footer/FooterContent"
import HeaderFooter from "../components/HeaderFooter"
import HeadSideBar from "../components/SideBar/HeadSideBar"
import Cart from "../components/Cart/Cart"
function HomePage() {
     const [openMenu, setOpenMenu] = useState<boolean>(false)
     const [openCart, setOpenCart] = useState<boolean>(false) // New state for cart visibility
     const ClickOpenMenu = () => {
          setOpenMenu(true)
     }
     const ClickOpenCart = () => {
          setOpenCart(true)
          setOpenMenu(false)
     }
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
               <SideBar />
               <Product />
               <Information />
               <HeaderFooter />
               <FooterContent />
               <Iconcontact />
               {/* Display Cart when openCart is true */}
               {openCart && <Cart setOpenCart={setOpenCart} />}
          </>
     )
}

export default HomePage
