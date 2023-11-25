import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import axios from "axios"
interface Props {
     setNameProvince?: React.Dispatch<React.SetStateAction<string>>
     setNameDistrict?: React.Dispatch<React.SetStateAction<string>>
     setNameWard?: React.Dispatch<React.SetStateAction<string>>
}
const SelectProvinces = ({
     setNameProvince,
     setNameDistrict,
     setNameWard,
}: Props) => {
     const [dataProvince, setDataProvince] = useState([])
     const [valueProvince, setValueProvince] = useState("0")
     const [dataDistrict, setDataDistrict] = useState([])
     const [valueDistrict, setValueDistrict] = useState("0")
     const [dataWard, setDataWard] = useState([])
     const [valueWard, setValueWard] = useState("0")
     const handleChangeProvince = async (event: SelectChangeEvent) => {
          setValueProvince(event.target.value as string)
          const filterProvince = dataProvince.filter(
               (value) => value.code == event.target.value
          )
          const objProvince = Object.assign({}, filterProvince)[0]
               ?.name as string

          if (objProvince !== undefined && setNameProvince !== undefined) {
               setNameProvince(objProvince)
          }
     }
     const handleChangeDistrict = (event: SelectChangeEvent) => {
          setValueDistrict(event.target.value as string)
          const filterDistrict = dataDistrict.filter(
               (value) => value.code == event.target.value
          )
          const objDistrict = Object.assign({}, filterDistrict)[0]
               ?.name as string

          if (objDistrict !== undefined && setNameDistrict !== undefined) {
               setNameDistrict(objDistrict)
          }
     }
     const handleChangeWard = (event: SelectChangeEvent) => {
          setValueWard(event.target.value as string)
          const filterWard = dataWard.filter(
               (value) => value.code == event.target.value
          )
          const objWard = Object.assign({}, filterWard)[0]?.name as string

          if (objWard !== undefined && setNameWard !== undefined) {
               setNameWard(objWard)
          }
     }
     useEffect(() => {
          async function fetchProvinces() {
               const respone = await axios.get(
                    "https://provinces.open-api.vn/api/p/"
               )
               const data = respone.data

               setDataProvince(data)
          }
          fetchProvinces()
     }, [])
     useEffect(() => {
          async function fetchDistricts() {
               const respone = await axios.get(
                    "https://provinces.open-api.vn/api/d/"
               )
               const data = respone.data

               const x = data.filter(
                    (item) => item.province_code == valueProvince
               )
               setDataDistrict(x)
          }
          fetchDistricts()
     }, [valueProvince])
     useEffect(() => {
          async function fetchWard() {
               const respone = await axios.get(
                    "https://provinces.open-api.vn/api/w/"
               )
               const data = respone.data

               const x = data.filter(
                    (item) => item.district_code == valueDistrict
               )
               setDataWard(x)
          }
          fetchWard()
     }, [valueDistrict])

     return (
          <Box className="flex gap-4">
               <FormControl fullWidth>
                    <InputLabel>setDataProvince</InputLabel>
                    <Select
                         value={valueProvince}
                         label="setDataProvince"
                         onChange={handleChangeProvince}
                    >
                         <MenuItem value={0} key={0}>
                              Chon tinh thanh pho
                         </MenuItem>
                         {dataProvince?.map((item, index) => {
                              return (
                                   <MenuItem value={item.code} key={item.name}>
                                        {item.name}
                                   </MenuItem>
                              )
                         })}
                    </Select>
               </FormControl>
               <FormControl fullWidth>
                    <InputLabel>setDataDistrict</InputLabel>

                    <Select
                         value={valueDistrict}
                         label="setDataDistrict"
                         onChange={handleChangeDistrict}
                    >
                         <MenuItem value={0} key={0}>
                              Chon tinh quan huyen
                         </MenuItem>
                         {dataDistrict?.map((item, index) => {
                              return (
                                   <MenuItem value={item.code} key={item.name}>
                                        {item.name}
                                   </MenuItem>
                              )
                         })}
                    </Select>
               </FormControl>
               <FormControl fullWidth>
                    <InputLabel>setDataWard</InputLabel>

                    <Select
                         value={valueWard}
                         label="setDataWard"
                         onChange={handleChangeWard}
                    >
                         <MenuItem value={0} key={0}>
                              Chon tinh xa
                         </MenuItem>
                         {dataWard?.map((item, index) => {
                              return (
                                   <MenuItem value={item.code} key={item.name}>
                                        {item.name}
                                   </MenuItem>
                              )
                         })}
                    </Select>
               </FormControl>
          </Box>
     )
}
export default SelectProvinces
