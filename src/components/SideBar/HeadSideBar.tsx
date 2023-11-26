import logo2 from "../../Image/logo.png"
import { Box } from "@mui/material"
// import SearchIcon from "@mui/icons-material/Search"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import { Link } from "react-router-dom"

const HeadSideBar = ({
     ClickOpenMenu,
     ClickOpenCart,
}: {
     ClickOpenMenu?: () => void
     ClickOpenCart?: () => void
}) => {
     return (
          <>
               <Box className="flex justify-around h-[110px] gap-[900px] relative z-[10] bg-white">
                    <Box className="flex gap-4 justify-center items-center w-[300px]">
                         <Link to="/">
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
          </>
     )
}

export default HeadSideBar
