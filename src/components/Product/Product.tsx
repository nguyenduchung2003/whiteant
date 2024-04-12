import block_home_category1 from "../../Image/block_home_category1.webp"
import block_home_category2 from "../../Image/block_home_category2.webp"
import { Box } from "@mui/material"
import FrameListProduct from "./FameListProduct"
import newProduct1 from "../../Image/newProduct1.webp"
import newProduct2 from "../../Image/newProduct2.webp"
import newProduct3 from "../../Image/newProduct3.webp"
import newProduct4 from "../../Image/newProduct4.webp"
import block_home_category3 from "../../Image/block_home_category3.webp"
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

const Product = () => {
    return (
        <>
            <Box className="flex w-[100%] cursor-pointer overflow-hidden">
                <Box className="w-[50%] overflow-hidden">
                    <img
                        src={`${block_home_category1}`}
                        className="w-full h-full object-cover hover:opacity-70 hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                </Box>
                <Box className="w-[50%] overflow-hidden">
                    <img
                        src={`${block_home_category2}`}
                        className="w-full h-full object-cover hover:opacity-70  hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                </Box>
            </Box>

            <FrameListProduct
                title="SẢN PHẨM MỚI"
                arrayDataProduct={arrayNewProduct}
            />
            <Box className="mt-[10px]">
                <img
                    src={`${block_home_category3}`}
                    alt=""
                    className="w-[100%] h-[300px] object-cover"
                />
            </Box>
            <FrameListProduct
                title="SẢN PHẨM NỔI BẬT"
                arrayDataProduct={arrayNewProduct}
            />
            <FrameListProduct
                title="SẢN PHẨM KHUYẾN MÃI"
                arrayDataProduct={arrayNewProduct}
            />
        </>
    )
}
export default Product
