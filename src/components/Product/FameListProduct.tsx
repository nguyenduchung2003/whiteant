import { Box, Typography, Button } from "@mui/material"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
//   import { useState } from "react";

interface Props {
    title?: string
    arrayDataProduct: arrayNewProduct[]
}

const FrameListProduct = ({ title, arrayDataProduct }: Props) => {
    //     const [cart, setCart] = useState<arrayNewProduct[]>([]);

    //     const handleAddToCart = (product: arrayNewProduct) => {
    //       // Add the selected product to the cart
    //       setCart((prevCart) => [...prevCart, product]);
    //     };
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <>
            <Box className="flex justify-center items-center flex-col gap-10 py-[30px]">
                <Typography variant="h4" className="text-center">
                    {title}
                </Typography>
                <Box className="flex gap-5 justify-center">
                    <motion.div
                        className={` flex gap-5 justify-center transition-all ${
                            isInView ? "opacity-100" : "opacity-0 translate-y-5"
                        } duration-900 ease-in-out delay-[0.5s]`}
                        ref={ref}
                    >
                        {arrayDataProduct.map((product, index) => {
                            return (
                                <Box
                                    key={index}
                                    className="flex flex-col gap-5 group/item relative cursor-pointer"
                                >
                                    <img
                                        src={`${product.pathImg}`}
                                        alt=""
                                        className="w-[348px] h-[522px] cursor-pointer"
                                    />
                                    <Box
                                        className={`absolute invisible top-[261px] bg-black w-[348px] h-[32px] leading-8 text-white text-center group-hover/item:visible cursor-pointer `}
                                        //    onClick={() => handleAddToCart(product)}
                                    >
                                        MUA NGAY &rarr;
                                    </Box>
                                    <Box className="w-[340px] flex flex-col gap-3">
                                        <Typography className="truncate">
                                            {product.name}
                                        </Typography>
                                        <Typography className="text-center">
                                            {product.price}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </motion.div>
                </Box>

                <Button
                    className="py-5 text-black border-solid border-2 rounded-none w-[130px] h-[40px] font-bold"
                    onClick={() => {
                        // Handle logic for "Xem thêm"
                        console.log("View more clicked")
                    }}
                >
                    Xem thêm
                </Button>
            </Box>
        </>
    )
}

export default FrameListProduct
