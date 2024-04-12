import slideshow_2 from "../../Image/slideshow_2.webp"
import slideshow_3 from "../../Image/slideshow_3.webp"
import slideshow_4 from "../../Image/slideshow_4.webp"
import slideshow_5 from "../../Image/slideshow_5.webp"
import slideshow_1 from "../../Image/slideshow_1.webp"
import { Box, Typography, Button } from "@mui/material"

import { useMemo } from "react"

interface Slideshow {
    picture: string
    header: string
    title: string
    day: string
}

const HeaderContent = () => {
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

    return (
        <>
            <Box className="w-[100%] relative">
                {ArrayPicture.map((picture, index) => {
                    return (
                        <Box
                            key={index}
                            className="flex h-[100vh] sticky top-0 "
                            style={{ zIndex: index + 1 }}
                            // ref={contentRef}
                            // style={{ y }}
                        >
                            <Box className="w-[50%] h-screen flex flex-col justify-center items-center bg-white">
                                <Box className="flex gap-10 flex-col ">
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
                            <Box className={`w-[50%] relative h-screen `}>
                                <img
                                    src={picture.picture}
                                    alt=""
                                    key={index}
                                    className={`w-[100%]  h-full relative  `}
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
