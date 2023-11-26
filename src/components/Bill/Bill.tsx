import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import { useAppSelector } from "../../hook"
import { useNavigate } from "react-router-dom"
const Bill = () => {
     const selectOrder = useAppSelector((state) => state.order.arrayMyOrder)
     console.log(selectOrder)
     const dataLocal: userType[] = JSON.parse(
          localStorage.getItem("userss") as string
     )
     const x = dataLocal.filter((user) => user.status == true)
     const userNow = Object.assign({}, x)[0]
     const navigate = useNavigate()
     return (
          <>
               <h1 className="text-3xl font-bold m-5">HÓA ĐƠN</h1>

               <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                         <TableHead>
                              <TableRow>
                                   <TableCell>Tên</TableCell>
                                   <TableCell align="right">
                                        Số điện thoại
                                   </TableCell>
                                   <TableCell align="right">Địa chỉ</TableCell>
                                   <TableCell align="right">
                                        Thành phố
                                   </TableCell>
                                   <TableCell align="right">
                                        Quận/huyện{" "}
                                   </TableCell>
                                   <TableCell align="right">
                                        Phường/xã
                                   </TableCell>
                                   <TableCell align="right">
                                        Số lượng sản phẩm
                                   </TableCell>
                                   <TableCell align="right">
                                        Phương thức thanh toán
                                   </TableCell>
                                   <TableCell align="right">
                                        Phương thức vận chuyển
                                   </TableCell>
                                   <TableCell align="right">
                                        Tổng tiền
                                   </TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {selectOrder
                                   .filter((item) => {
                                        console.log(item.emailNow)
                                        console.log(userNow.userName)
                                        return item.emailNow == userNow.userName
                                   })
                                   .map((row, index) => (
                                        <TableRow
                                             key={index}
                                             sx={{
                                                  "&:last-child td, &:last-child th":
                                                       {
                                                            border: 0,
                                                       },
                                             }}
                                        >
                                             <TableCell align="right">
                                                  {row.name}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.numberPhone}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.address}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.nameProvince}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.nameDistrict}
                                             </TableCell>

                                             <TableCell align="right">
                                                  {row.nameWard}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.arrayOder
                                                       ? row.arrayOder.length
                                                       : 0}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.valuePayment}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.valueShip}
                                             </TableCell>
                                             <TableCell align="right">
                                                  {row.totalAmount}
                                             </TableCell>
                                        </TableRow>
                                   ))}
                         </TableBody>
                    </Table>
               </TableContainer>
               <Button
                    variant="contained"
                    className="bg-black m-5"
                    onClick={() => navigate("/whiteant/order")}
               >
                    BACK
               </Button>
          </>
     )
}
export default Bill
