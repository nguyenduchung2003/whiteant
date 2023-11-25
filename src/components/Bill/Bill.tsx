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
     const navigate = useNavigate()

     return (
          <>
               <Button variant="contained" onClick={() => navigate("/order")}>
                    Quay lai
               </Button>
               <TableContainer component={Paper}>
                    <Table
                         sx={{ minWidth: 650 }}
                         size="small"
                         aria-label="a dense table"
                    >
                         <TableHead>
                              <TableRow>
                                   <TableCell>Ten</TableCell>
                                   <TableCell align="right">
                                        So dien thoai
                                   </TableCell>
                                   <TableCell align="right">Dia chi</TableCell>
                                   <TableCell align="right">
                                        Thanh pho
                                   </TableCell>
                                   <TableCell align="right">
                                        Quan huyen{" "}
                                   </TableCell>
                                   <TableCell align="right">Xa</TableCell>
                                   <TableCell align="right">
                                        So luong san pham
                                   </TableCell>
                                   <TableCell align="right">
                                        Phuong thuc thanh toan
                                   </TableCell>
                                   <TableCell align="right">
                                        Phuong thuc van chuyen
                                   </TableCell>
                                   <TableCell align="right">
                                        Tong tien
                                   </TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {selectOrder.map((row, index) => (
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
                                             {row?.arrayOder.length}
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
          </>
     )
}
export default Bill
