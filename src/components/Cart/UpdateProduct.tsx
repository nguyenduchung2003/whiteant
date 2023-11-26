import HeadSideBar from "../SideBar/HeadSideBar"
import {
     Box,
     Typography,
     Button,
     InputAdornment,
     TextField,
} from "@mui/material"
import allProduct from "../../Image/allProduct.webp"
import dataProduct from "./dataProduct"

import {
     //  useEffect,
     useState,
} from "react"
import DialogList from "./DialogList"
import Menu from "../Menu"
import {
     // useAppSelector,
     useAppDispatch,
} from "../../hook"
import { addItem } from "../../Slice/Order"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cart from "./Cart"
import SearchIcon from "@mui/icons-material/Search"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add';
import FooterContent from "../Footer/FooterContent"
const UpdateProduct = () => {
     const [textSearch, setTextSearch] = useState<string>("")
     // const selectOrder = useAppSelector(
     //      (state) => state.order.arrayOrderProduct
     // )
     const dispatch = useAppDispatch()
     const [updateList, setUpdateList] = useState<boolean>(false)
     const [open, setOpen] = useState(false)
     const [listName, setListName] = useState("")

     // const [imgData, setImgData] = useState("")
     const [listDescription, setListDescription] = useState("")
     const [picture, setPicture] = useState<string>("")

     const [data, setData] = useState(dataProduct)

     const clickAddProduct = () => {
          setUpdateList(false)
          setOpen(true)
     }
     const handleClose = () => {
          setUpdateList(false)
          setOpen(false)
     }
     const handleAgreeAdd = () => {
          const newData = {
               id: dataProduct.length + 1,
               pathImg: picture,
               name: listName,
               price: listDescription,
          }
          // console.log(imgData)
          const x = [...data]
          x.push(newData)
          setData(x)
          setUpdateList(false)
          setOpen(false)
     }
     const deleteItem = (id: number) => {
          console.log(data)
          console.log(id)

          const x = [...data]
          const updatedData = x.filter((item) => item.id !== id)
          setData(updatedData)
     }
     const [idUpdate, setIdUpdate] = useState(0)

     const updateItem = (
          id: number,
          name: string,
          price: string,
          pathImg: string
     ) => {
          setListName(name)
          setListDescription(price)
          setPicture(pathImg)
          setIdUpdate(id)
          setUpdateList(true)
          setOpen(true)
     }
     const handleAgreeUpdate = () => {
          const x = data.map((item) => {
               if (item.id == idUpdate) {
                    return {
                         ...item,
                         pathImg: picture,
                         name: listName,
                         price: listDescription,
                    }
               } else return item
          })
          setData(x)
          setUpdateList(false)
          setOpen(false)
     }
     const [openMenu, setOpenMenu] = useState<boolean>(false)
     const ClickOpenMenu = () => {
          setOpenMenu(true)
     }

     const handlerAddItemOrder = async (
          id: number,
          path: string,
          name: string,
          price: string
     ) => {
          const dataLocal: userType[] = JSON.parse(
               localStorage.getItem("userss") as string
          )
          const x = dataLocal.filter((user) => user.status == true)
          const userNow = Object.assign({}, x)[0]
          const newItem: arrayOrderProduct = {
               id: id,
               pathImg: path,
               name: name,
               price: price,
               quantity: 1,
               emailNow: userNow.userName,
          }
          await dispatch(addItem(newItem))
          toast.success("Thêm vào giỏ hàng thành công", {
               position: "top-right",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
          })
     }

     const [openCart, setOpenCart] = useState<boolean>(false) // New state for cart visibility

     const ClickOpenCart = () => {
          setOpenCart(true)
          setOpenMenu(false)
     }
     const dataLocal = JSON.parse(localStorage.getItem("userss") as string)

     return (
          <>
               <Box className="relative">
                    <ToastContainer />
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
                    <img
                         src={`${allProduct}`}
                         alt=""
                         className="h-[650px] w-full object-cover"
                    />
                    {dataLocal?.some(
                         (data: userType) =>
                              data.userName == "admin@gmail.com" &&
                              data.status == true
                    ) ? (
                         <Button
                              variant="outlined"
                              onClick={clickAddProduct}
                              className="my-[20px]  absolute left-10 "
                         >
                              <AddIcon className="" />
                              Thêm sản phẩm
                         </Button>
                    ) : (
                         ""
                    )}

                    <TextField
                         id="input-with-icon-textfield"
                         value={textSearch}
                         onChange={(e) => setTextSearch(e.target.value)}
                         InputProps={{
                              startAdornment: (
                                   <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                   </InputAdornment>
                              ),
                         }}
                         variant="outlined"
                         fullWidth
                         className="my-[20px] h-[40px] w-[500px] absolute right-[35px] "
                    />
                    <DialogList
                         updateList={updateList}
                         open={open}
                         handleClose={handleClose}
                         listName={listName}
                         listDescription={listDescription}
                         setListName={setListName}
                         setListDescription={setListDescription}
                         handleAgreeAdd={handleAgreeAdd}
                         handleAgreeUpdate={handleAgreeUpdate}
                         setPicture={setPicture}
                         picture={picture}
                    ></DialogList>

                    <Box className="flex gap-5 justify-center flex-wrap mt-[100px]">
                         {data
                              .filter((item) => {
                                   if (textSearch == "") {
                                        return item
                                   } else if (
                                        item.name
                                             .toLowerCase()
                                             .includes(textSearch.toLowerCase())
                                   ) {
                                        return item
                                   }
                              })
                              .map((product, index) => {
                                   const formattedPrice = Number(
                                        product.price
                                   ).toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                   })
                                   return (
                                        <Box
                                             key={index}
                                             className="flex flex-col gap-5 group/item relative"
                                        >
                                             <img
                                                  src={`${product.pathImg}`}
                                                  alt=""
                                                  className="w-[348px] h-[522px] "
                                             />
                                             <Typography
                                                  onClick={() =>
                                                       handlerAddItemOrder(
                                                            product.id as number,
                                                            product.pathImg,
                                                            product.name,
                                                            product.price
                                                       )
                                                  }
                                                  className="absolute invisible  top-[261px] bg-black w-[348px] h-[32px] leading-8 text-white text-center  group-hover/item:visible"
                                             >
                                                  MUA NGAY &rarr;
                                             </Typography>
                                             <Box className="w-[340px] flex flex-col gap-3">
                                                  <Typography className="truncate">
                                                       Tên sản phẩm:{" "}
                                                       {product.name}
                                                  </Typography>
                                                  <Box>
                                                       <Typography className="">
                                                            Giá sản phẩm:{" "}
                                                            {formattedPrice}
                                                       </Typography>
                                                       {dataLocal?.some(
                                                            (data: userType) =>
                                                                 data.userName ==
                                                                      "admin@gmail.com" &&
                                                                 data.status ==
                                                                      true
                                                       ) ? (
                                                            <Box className="flex justify-between mt-5">
                                                                 <Button
                                                                      variant="outlined"
                                                                      onClick={() =>
                                                                           updateItem(
                                                                                product.id as number,
                                                                                product.name,
                                                                                product.price,
                                                                                product.pathImg
                                                                           )
                                                                      }
                                                                 >
                                                                     <EditIcon
                                                                     className="mr-2"
                                                                     />
                                                                      Cập nhật
                                                                 </Button>
                                                                 <Button
                                                                      variant="outlined"
                                                                      color="error"
                                                                      onClick={() =>
                                                                           deleteItem(
                                                                                product.id as number
                                                                           )
                                                                      }
                                                                 >
                                                                     <DeleteIcon
                                                                      className="mr-2"
                                                                     />
                                                                      Xóa
                                                                 </Button>
                                                            </Box>
                                                       ) : (
                                                            ""
                                                       )}
                                                  </Box>
                                             </Box>
                                        </Box>
                                   )
                              })}
                    </Box>
                    <FooterContent></FooterContent>
               </Box>
          </>
     )
}
export default UpdateProduct
