import SideBar from "../components/SideBar"
import Product from "../components/Product"
import Information from "../components/Information"
import Iconcontact from "../components/IconContact"

import FooterContent from "../components/Footer/FooterContent"
import HeaderFooter from "../components/HeaderFooter"
import HeadSideBar from "../components/SideBar/HeadSideBar"

function HomePage() {
     return (
          <>
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
