import block_home_category5 from "../../Image/block_home_category5.webp"

import { Box, Typography } from "@mui/material"
const HeaderFooterContent = () => {
     return (
          <>
               <Box className="mt-[10px]" position="relative"></Box>
               <div className="border-b-4 border-[#16469e] h-[350px]">
                    <Box className="mt-[10px] " position="relative">
                         <img
                              src={`${block_home_category5}`}
                              alt=""
                              className="w-[100%] h-[300px] object-cover"
                         />
                         <div className="absolute bottom-0 w-[100%] h-[100px] bg-black opacity-50"></div>
                         <Typography
                              variant="h6"
                              component="div"
                              className="absolute bottom-10 left-[105px] transform -translate-x-1/2 -translate-y-1/2 text-[#00a7f4] font-bold"
                         >
                              Bộ sưu tập
                         </Typography>
                         <Typography
                              variant="h6"
                              component="div"
                              className="absolute bottom-3 left-[315px] transform -translate-x-1/2 -translate-y-1/2 text-white"
                         >
                              LOOKBOOK: “VÒNG TRÒN” PRE-FALL’ 23 COLLECTION
                         </Typography>
                    </Box>
               </div>
          </>
     )
}
export default HeaderFooterContent
