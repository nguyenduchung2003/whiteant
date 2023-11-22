import logo from "../../Image/logo.webp"
import { Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
const HeadSideBar = ({ ClickOpenMenu }: { ClickOpenMenu?: () => void }) => {
     return (
          <>
               <Box className="flex  justify-around h-[110px] gap-[900px] relative z-[10] bg-white">
                    <Box className="flex gap-4 justify-center items-center w-[300px]">
                         <img src={logo} alt="" />
                    </Box>
                    <Box className="flex gap-10 justify-center items-center w-[250px]">
                         <SearchIcon fontSize="large" />
                         <ShoppingBagOutlinedIcon fontSize="large" />
                         <Box>
                              <MenuOutlinedIcon
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
