import slideshow_2 from "../../Image/slideshow_2.webp"
import slideshow_3 from "../../Image/slideshow_3.webp"
import slideshow_4 from "../../Image/slideshow_4.webp"
import slideshow_5 from "../../Image/slideshow_5.webp"
import slideshow_1 from "../../Image/slideshow_1.webp"
import { Box, Typography, Button } from "@mui/material"
import { useEffect, useMemo, useRef, useState } from "react"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
interface Slideshow {
     picture: string
     header: string
     title: string
     day: string
}

const HeaderContent = () => {
     // const pictureImg = useRef(null)
     // const containerImg = useRef(null)

     const ArrayPicture: Slideshow[] = useMemo(
          () => [
               {
                    picture: slideshow_1,
                    header: "FALL-WINTER 2023 COLLECTION",
                    title: "DÁNG CHIỀU",
                    day: "Ra mắt 06.11.2023",
               },
               {
                    picture: slideshow_2,
                    header: "PRE-FALL'23 COLLECTION",
                    title: "VÒNG TRÒN",
                    day: "Ra mắt 16.08.2023",
               },
               {
                    picture: slideshow_3,
                    header: "PRE-FALL'23 COLLECTION",
                    title: "BẠCH VÂN",
                    day: "Ra mắt 16.08.2023",
               },
               {
                    picture: slideshow_4,
                    header: "PRE-FALL'23 COLLECTION",
                    title: "NGỌC ĐỘNG",
                    day: "Ra mắt 16.08.2023",
               },
               {
                    picture: slideshow_5,
                    header: "PRE-FALL'23 COLLECTION",
                    title: "TORSION",
                    day: "Ra mắt 16.08.2023",
               },
          ],
          []
     )
     // const [x, setX] = useState(0)
     // useEffect(() => {
     //      gsap.registerPlugin(ScrollTrigger)
     //      const tl = gsap.timeline()
     //      ArrayPicture.forEach((_, index) => {
     //           tl.from(`.x_${index}`, { yPercent: -100 })
     //           // Add ScrollTrigger for each image
     //           ScrollTrigger.create({
     //                trigger: `.x_${index}`,
     //                animation: tl,
     //                start: "top top", // Change start to trigger when .x_0 is at the center
     //                end: "bottom top",
     //                scrub: true,
     //                markers: true, // Add markers for visualization (you can remove this in production)
     //                pinSpacing: true,
     //           })
     //      })
     // }, [ArrayPicture])

     return (
          <>
               <Box className="w-[100%] containerImg">
                    {ArrayPicture.map((picture, index) => {
                         return (
                              <Box key={index} className="flex h-[100%]">
                                   <Box className="w-[50%] h-screen flex flex-col justify-center items-center ">
                                        <Box className="flex gap-10 flex-col">
                                             <Typography className="text-[#777778]">
                                                  {picture.header}
                                             </Typography>
                                             <Typography variant="h2">
                                                  {picture.title}
                                             </Typography>
                                             <Typography className=" italic text-[#777778]">
                                                  {picture.day}
                                             </Typography>

                                             <Button className="bg-black w-[140px] h-[55px] text-white rounded-none font-medium">
                                                  Xem thêm
                                             </Button>
                                        </Box>
                                   </Box>
                                   <Box
                                        className={`w-[50%] relative h-full container`}
                                   >
                                        <img
                                             src={picture.picture}
                                             alt=""
                                             key={index}
                                             className={`w-[100%] h-full relative x_${index}`}
                                        />
                                   </Box>
                              </Box>
                         )
                    })}
               </Box>
          </>
     )
}
export default HeaderContent
