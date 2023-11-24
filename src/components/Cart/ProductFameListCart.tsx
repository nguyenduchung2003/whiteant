import { Box, Typography } from "@mui/material";

interface Product {
  pathImg: string;
  name: string;
  price: string;
}

interface Props {
  arrayDataProduct: Product[];
}

const FrameListProduct = ({ arrayDataProduct }: Props) => {
  return (
    <>
      <Box className="flex flex-col gap-5 ml-5">
        {arrayDataProduct.map((product, index) => {
          return (
            <Box key={index} className="flex gap-5 group/item relative">
              <img
                src={`${product.pathImg}`}
                alt=""
                className="w-[70px] h-[103px]"
              />
              <Box className="w-[225px] flex flex-col gap-3">
                <Typography className="text-ellipsis text-sm">{product.name}</Typography>
                <Typography className="flex ">
                 <p className="border-2 w-[20px] h-[20px] text-center content-center mr-2">1</p> {product.price}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default FrameListProduct;
