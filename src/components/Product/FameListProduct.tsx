import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

interface Props {
  title?: string;
  arrayDataProduct: arrayNewProduct[];
}

const FrameListProduct = ({ title, arrayDataProduct }: Props) => {
  const [cart, setCart] = useState<arrayNewProduct[]>([]);

  const handleAddToCart = (product: arrayNewProduct) => {
    // Add the selected product to the cart
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <Box className="flex justify-center items-center flex-col gap-10 py-[30px]">
        <Typography variant="h4" className="text-center">
          {title}
        </Typography>
        <Box className="flex gap-5 justify-center">
          {arrayDataProduct.map((product, index) => {
            return (
              <Box
                key={index}
                className="flex flex-col gap-5 group/item relative"
              >
                <img
                  src={`${product.pathImg}`}
                  alt=""
                  className="w-[348px] h-[522px]"
                />
                <Typography
                  className=" absolute invisible top-[261px] bg-black w-[348px] h-[32px] leading-8 text-white text-center group-hover/item:visible"
                  onClick={() => handleAddToCart(product)}
                >
                  MUA NGAY &rarr;
                </Typography>
                <Box className="w-[340px] flex flex-col gap-3">
                  <Typography className="truncate">{product.name}</Typography>
                  <Typography className="text-center">{product.price}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Button
          className="py-5 text-black border-solid border-2 rounded-none w-[130px] h-[40px] font-bold"
          onClick={() => {
            // Handle logic for "Xem thêm"
            console.log("View more clicked");
          }}
        >
          Xem thêm
        </Button>
      </Box>
    </>
  );
};

export default FrameListProduct;
