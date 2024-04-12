import EmailIcon from "@mui/icons-material/Email"
import { Box } from "@mui/material"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
const Iconcontact = () => {
    const { scrollY } = useScroll()
    const [isDisplayIcon, setIsDisplayIcon] = useState<boolean>(true)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest <= 100) {
            setIsDisplayIcon(true)
        } else {
            setIsDisplayIcon(false)
        }
    })
    return (
        <>
            <Box
                className={`fixed z-[100] bottom-[-100px] right-[10px] flex flex-col gap-3 mb-20 ${
                    isDisplayIcon ? "hidden" : "block"
                }`}
            >
                <Box className="rounded-full bg-black  w-[50px] h-[50px] relative top-[-100px] flex justify-center items-center">
                    <LocalPhoneIcon
                        className="w-[30px] h-[30px]"
                        style={{ color: "white" }}
                    />
                </Box>
                <Box className="rounded-full bg-cyan-500  w-[50px] h-[50px] relative top-[-100px] flex justify-center items-center">
                    <EmailIcon
                        className="w-[30px] h-[30px]"
                        style={{ color: "white" }}
                    />
                </Box>
                <Box className="rounded-full bg-yellow-500  w-[50px] h-[50px] relative top-[-100px] flex justify-center items-center">
                    <LocationOnIcon
                        className="w-[30px] h-[30px]"
                        style={{ color: "white" }}
                    />
                </Box>
            </Box>
        </>
    )
}
export default Iconcontact
