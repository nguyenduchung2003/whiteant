import EmailIcon from "@mui/icons-material/Email"
import { Box } from "@mui/material"
const Iconcontact = () => {
     return (
          <>
               <Box className="fixed z-99 bottom-[-100px] right-[10px] flex flex-col gap-3 ">
                    <Box className="rounded-full bg-cyan-500  w-[50px] h-[50px] relative top-[-100px] flex justify-center items-center">
                         <EmailIcon className="w-[30px] h-[30px]" />
                    </Box>
                    <Box className="rounded-full bg-cyan-500  w-[50px] h-[50px] relative top-[-100px] flex justify-center items-center">
                         <EmailIcon className="w-[30px] h-[30px]" />
                    </Box>
                    <Box className="rounded-full bg-cyan-500  w-[50px] h-[50px] relative top-[-100px] flex justify-center items-center">
                         <EmailIcon className="w-[30px] h-[30px]" />
                    </Box>
               </Box>
          </>
     )
}
export default Iconcontact
