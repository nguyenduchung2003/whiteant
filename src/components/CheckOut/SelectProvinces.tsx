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
interface provinceType {
     name: string
     code: number
     division_type: string
     codename: string
     phone_code: number
}
interface districtType {
     name: string
     code: number
     division_type: string
     codename: string
     province_code: number
}
interface wardType {
     name: string
     code: number
     division_type: string
     codename: string
     district_code: number
}
const SelectProvinces = ({
     setNameProvince,
     setNameDistrict,
     setNameWard,
}: Props) => {
     const [dataProvince, setDataProvince] = useState<provinceType[]>([])
     const [valueProvince, setValueProvince] = useState("0")
     const [dataDistrict, setDataDistrict] = useState<districtType[]>([])
     const [valueDistrict, setValueDistrict] = useState("0")
     const [dataWard, setDataWard] = useState<wardType[]>([])
     const [valueWard, setValueWard] = useState("0")
     const handleChangeProvince = async (event: SelectChangeEvent) => {
          setValueProvince(event.target.value as string)
          const filterProvince = dataProvince.filter(
               (value) =>
                    value.code == (event.target.value as unknown as number)
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
               (value) =>
                    value.code == (event.target.value as unknown as number)
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
               (value) =>
                    value.code == (event.target.value as unknown as number)
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

               const x: districtType[] = data.filter(
                    (item: districtType) =>
                         item.province_code ==
                         (valueProvince as unknown as number)
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

               const x: wardType[] = data.filter(
                    (item: wardType) =>
                         item.district_code ==
                         (valueDistrict as unknown as number)
               )
               setDataWard(x)
          }
          fetchWard()
     }, [valueDistrict])

     return (
          <Box className="flex gap-4">
               <FormControl fullWidth>
                    <InputLabel>Tỉnh/thành</InputLabel>
                    <Select
                         value={valueProvince}
                         label="setDataProvince"
                         onChange={handleChangeProvince}
                    >
                         <MenuItem value={0} key={0}>
                              Chọn tỉnh / thành phố
                         </MenuItem>
                         {dataProvince?.map((item) => {
                              return (
                                   <MenuItem value={item.code} key={item.name}>
                                        {item.name}
                                   </MenuItem>
                              )
                         })}
                    </Select>
               </FormControl>
               <FormControl fullWidth>
                    <InputLabel>Quận/huyện</InputLabel>

                    <Select
                         value={valueDistrict}
                         label="setDataDistrict"
                         onChange={handleChangeDistrict}
                    >
                         <MenuItem value={0} key={0}>
                              Chọn quận / huyện
                         </MenuItem>
                         {dataDistrict?.map((item) => {
                              return (
                                   <MenuItem value={item.code} key={item.name}>
                                        {item.name}
                                   </MenuItem>
                              )
                         })}
                    </Select>
               </FormControl>
               <FormControl fullWidth>
                    <InputLabel>Phường/xã</InputLabel>

                    <Select
                         value={valueWard}
                         label="setDataWard"
                         onChange={handleChangeWard}
                    >
                         <MenuItem value={0} key={0}>
                              Chọn phường / xã
                         </MenuItem>
                         {dataWard?.map((item) => {
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
