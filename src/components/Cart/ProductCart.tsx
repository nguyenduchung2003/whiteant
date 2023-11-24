import block_home_category1 from "../../Image/block_home_category1.webp"
import block_home_category2 from "../../Image/block_home_category2.webp"
import ProductFameListCart from "./ProductFameListCart"
import newProduct1 from "../../Image/newProduct1.webp"
import newProduct2 from "../../Image/newProduct2.webp"
import newProduct3 from "../../Image/newProduct3.webp"
import newProduct4 from "../../Image/newProduct4.webp"
import block_home_category3 from "../../Image/block_home_category3.webp"
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const arrayNewProduct: arrayNewProduct[] = [
    {
        pathImg: newProduct1,
        name: "Đầm Trễ Vai Phối Nữ White Ant DEMPSEY OF THE SHOULDER DRESS 120900002.100",
        price: "2,485,000₫",
    },
    {
        pathImg: newProduct2,
        name: "Đầm Suông Trễ Vai Nữ White Ant LYNNE OFF THE SHOULDER DRESS 120900001",
        price: "2,985,000₫",
    },
    {
        pathImg: newProduct3,
        name: "Chân Váy A Dáng Dài Nữ White Ant ADELA MAXI SKIRT 110900006",
        price: "1,485,000₫",
    },
    {
        pathImg: newProduct4,
        name: "Đầm Trễ Vai Phối Nữ White Ant DEMPSEY OF THE SHOULDER DRESS 120900002.002",
        price: "2,485,000₫",
    },
]

const ProductCart = () => {
    return (
        <>

            <ProductFameListCart
                
                arrayDataProduct={arrayNewProduct}
            />
        </>
    )
}
export default ProductCart
