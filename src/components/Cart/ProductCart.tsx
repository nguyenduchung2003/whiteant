import block_home_category1 from "../../Image/block_home_category1.webp"
import block_home_category2 from "../../Image/block_home_category2.webp"
import ProductFameListCart from "./ProductFameListCart"
import newProduct1 from "../../Image/newProduct1.webp"
import newProduct2 from "../../Image/newProduct2.webp"
import newProduct3 from "../../Image/newProduct3.webp"
import newProduct4 from "../../Image/newProduct4.webp"
import block_home_category3 from "../../Image/block_home_category3.webp"
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../hook"
import { addItem } from "../../Slice/Order"

const ProductCart = () => {
     const selectOrder = useAppSelector((state) => state.order)
     const dispatch = useAppDispatch()
     return (
          <>
               <ProductFameListCart arrayDataProduct={selectOrder} />
          </>
     )
}
export default ProductCart
