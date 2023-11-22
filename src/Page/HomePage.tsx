import SideBar from "../components/SideBar"
import Product from "../components/Product"
import Information from "../components/Information"
import Iconcontact from "../components/IconContact"
import Menu from "../components/Menu"
import { Box } from "@mui/material"
import { useState } from "react"
function HomePage() {
     const [openMenu, setOpenMenu] = useState<boolean>(false)
     return (
          <>
               <SideBar setOpenMenu={setOpenMenu} />
               <Product />
               <Information />
               <Iconcontact />
               {openMenu ? (
                    <Box className="w-full h-[100vh] bg-[rgba(0,0,0,.75)] fixed top-[0px] z-[30]">
                         <Menu setOpenMenu={setOpenMenu} />
                    </Box>
               ) : (
                    ""
               )}
          </>
     )
}

export default HomePage
