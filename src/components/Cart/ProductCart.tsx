// import block_home_category1 from "../../Image/block_home_category1.webp"
// import block_home_category2 from "../../Image/block_home_category2.webp"
import ProductFameListCart from "./ProductFameListCart"
// import newProduct1 from "../../Image/newProduct1.webp"
// import newProduct2 from "../../Image/newProduct2.webp"
// import newProduct3 from "../../Image/newProduct3.webp"
// import newProduct4 from "../../Image/newProduct4.webp"
// import block_home_category3 from "../../Image/block_home_category3.webp"
// import { Box, Typography } from "@mui/material"
// import { useEffect, useState } from "react"
import { useAppSelector } from "../../hook"
// import { addItem } from "../../Slice/Order"
// import {useState} from "react"

const ProductCart = () => {
     const selectOrder = useAppSelector(
          (state) => state.order.arrayOrderProduct
     )

     const dataLocal: userType[] = JSON.parse(
          localStorage.getItem("userss") as string
     )
     // const [checkedValues, setCheckedValues] = useState<string[]>([])
     const x = dataLocal.filter((user) => user.status == true)
     const userNow = Object.assign({}, x)[0]
     return (
          <>
               <ProductFameListCart
                    arrayDataProduct={selectOrder.filter(
                         (item) => item.emailNow == userNow.userName
                    )}
               />
          </>
     )
}
export default ProductCart
