import { Box } from "@mui/material"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"

import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
const Menu = ({
     setOpenMenu,
}: {
     setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}) => {
     const [open, setOpen] = useState<boolean>(false)
     const [openBigSale, setOpenBigSale] = useState<boolean>(false)
     const [openAo, setOpenAo] = useState<boolean>(false)
     const [openQuan, setOpenQuan] = useState<boolean>(false)
     const navigate = useNavigate()
     const handleClick = () => {
          setOpen(!open)
     }
     const handleClicBigSale = () => {
          setOpenBigSale(!openBigSale)
     }
     const handleClickAo = () => {
          setOpenAo(!openAo)
     }
     const handleClickQuan = () => {
          setOpenQuan(!openQuan)
     }
     const ClickCloseMenu = () => {
          setOpenMenu(false)
     }
     const storedData: userType[] = JSON.parse(
          localStorage.getItem("userss") as string
     )
     return (
          <>
               <ToastContainer />
               <Box className=" w-full h-full  fixed ">
                    <List
                         sx={{
                              width: "100%",
                              maxWidth: 485,
                              bgcolor: "background.paper",
                         }}
                         className="h-full absolute right-0 bg-white overflow-y-auto"
                         component="nav"
                         aria-labelledby="nested-list-subheader"
                         subheader={
                              <>
                                   <Box className="flex relative">
                                        <ListSubheader
                                             component="div"
                                             id="nested-list-subheader"
                                        >
                                             Menu
                                        </ListSubheader>
                                        <Box
                                             className="absolute right-0 cursor-pointer"
                                             onClick={ClickCloseMenu}
                                        >
                                             X
                                        </Box>
                                   </Box>
                              </>
                         }
                    >
                         <ListItemButton>
                              <ListItemText primary="PRE-FALL' 23 DÁNG CHIỀU" />
                         </ListItemButton>
                         <ListItemButton>
                              <ListItemText primary="PRE-FALL' 23 VÒNG TRÒN" />
                         </ListItemButton>
                         <ListItemButton>
                              <ListItemText primary="SS' 23 BẠCH VÂN" />
                         </ListItemButton>
                         <ListItemButton>
                              <ListItemText primary="WINTER '22 NGỌC ĐỘNG" />
                         </ListItemButton>
                         <ListItemButton onClick={handleClick}>
                              <ListItemText primary="MINI COLLECTION" />
                              {open ? (
                                   <KeyboardArrowUpIcon />
                              ) : (
                                   <KeyboardArrowDownIcon />
                              )}
                         </ListItemButton>
                         <Collapse in={open} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                   <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="INDEPENDENT W 2023" />
                                   </ListItemButton>
                                   <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="INDEPENDENT W 2023" />
                                   </ListItemButton>
                              </List>
                         </Collapse>
                         <ListItemButton onClick={handleClicBigSale}>
                              <ListItemText primary="BIG SALE" />
                              {openBigSale ? (
                                   <KeyboardArrowUpIcon />
                              ) : (
                                   <KeyboardArrowDownIcon />
                              )}
                         </ListItemButton>
                         <Collapse
                              in={openBigSale}
                              timeout="auto"
                              unmountOnExit
                         >
                              <List component="div" disablePadding>
                                   <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Big Sale" />
                                   </ListItemButton>
                              </List>
                         </Collapse>
                         <ListItemButton onClick={handleClickAo}>
                              <ListItemText primary="ÁO" />
                              {openAo ? (
                                   <KeyboardArrowUpIcon />
                              ) : (
                                   <KeyboardArrowDownIcon />
                              )}
                         </ListItemButton>
                         <Collapse in={openAo} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                   <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Áo xịn" />
                                   </ListItemButton>
                              </List>
                         </Collapse>
                         <ListItemButton onClick={handleClickQuan}>
                              <ListItemText primary="QUẦN" />
                              {openQuan ? (
                                   <KeyboardArrowUpIcon />
                              ) : (
                                   <KeyboardArrowDownIcon />
                              )}
                         </ListItemButton>
                         <Collapse in={openQuan} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                   <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Quần xịn" />
                                   </ListItemButton>
                              </List>
                         </Collapse>
                         <ListItemButton>
                              <ListItemText
                                   primary="TẤT CẢ SẢN PHẨM"
                                   onClick={() => {
                                        navigate("/whiteant/order")
                                   }}
                              />
                         </ListItemButton>
                         <ListItemButton>
                              <ListItemText
                                   primary="BILL"
                                   onClick={() => {
                                        const dataLocal: userType[] =
                                             JSON.parse(
                                                  localStorage.getItem(
                                                       "userss"
                                                  ) as string
                                             )
                                        const x = dataLocal?.filter(
                                             (user) => user.status == true
                                        )
                                        const userNow = Object.assign({}, x)[0]

                                        if (userNow) {
                                             navigate("/whiteant/bill")
                                             toast.success(
                                                  "Thêm vào giỏ hàng thành công",
                                                  {
                                                       position: "top-right",
                                                       autoClose: 1000,
                                                       hideProgressBar: false,
                                                       closeOnClick: true,
                                                       pauseOnHover: true,
                                                       draggable: true,
                                                       progress: undefined,
                                                       theme: "light",
                                                  }
                                             )
                                        } else {
                                             toast.warning(
                                                  "Bạn cần phải đăng nhập trước",
                                                  {
                                                       position: "top-right",
                                                       autoClose: 1000,
                                                       hideProgressBar: false,
                                                       closeOnClick: true,
                                                       pauseOnHover: true,
                                                       draggable: true,
                                                       progress: undefined,
                                                       theme: "light",
                                                  }
                                             )
                                        }
                                   }}
                              />
                         </ListItemButton>
                         <ListItemButton>
                              {storedData?.some(
                                   (item) => item.status == true
                              ) ? (
                                   <ListItemText
                                        primary="Đăng xuất"
                                        onClick={() => {
                                             navigate("/whiteant/login")
                                        }}
                                   />
                              ) : (
                                   <ListItemText
                                        primary="Đăng nhập"
                                        onClick={() => {
                                             navigate("/whiteant/login")
                                        }}
                                   />
                              )}
                         </ListItemButton>
                    </List>
               </Box>
          </>
     )
}
export default Menu
