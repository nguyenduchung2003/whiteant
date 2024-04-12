import SideBar from "../components/SideBar"
import Product from "../components/Product"
import Information from "../components/Information"
import Iconcontact from "../components/IconContact"

import FooterContent from "../components/Footer/FooterContent"
import HeaderFooter from "../components/HeaderFooter"
import HeadSideBar from "../components/SideBar/HeadSideBar"
import { motion, useScroll } from "framer-motion"

function HomePage() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 z-[100] h-1 bg-red-500 transform origin-top-left  "
            />
            <HeadSideBar />
            <SideBar />
            <Product />
            <Information />
            <HeaderFooter />
            <FooterContent />
            <Iconcontact />
        </>
    )
}

export default HomePage
