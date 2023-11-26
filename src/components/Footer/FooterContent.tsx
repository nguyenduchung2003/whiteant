import block_home_category4 from "../../Image/block_home_category4.webp"
import block_home_category5 from "../../Image/block_home_category5.webp"
import block_home_category6 from "../../Image/block_home_category6.webp"
import banner from "../../Image/banner_ft.webp"
import Input from "@mui/material"
import { Box, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterContent = () => {
     return (
          <>
               <Box className="mt-[100px]" position="relative">
                    <img
                         src={`${block_home_category6}`}
                         alt=""
                         className="w-[100%] h-[300px] object-cover"
                    />
                    <Typography
                         variant="h6"
                         component="div"
                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl bg-black p-[20px]"
                    >
                         HỆ THỐNG STORE TRÊN TOÀN QUỐC
                    </Typography>
               </Box>
               <Box className="mt-[50px]  " position="relative">
                    <div className=" grid grid-cols-4 justify-between content-center  w-[1300px] h-[200px] border-y-4 m-auto border-[#16469e]">
                         <div >
                              <strong>GỌI MUA HÀNG (08:00 - 22:00)</strong> <br />
                              <strong className="text-[30px]">091231231 </strong><br />
                              <strong className="text-[30px]">(NHÁNH 101) </strong><br />
                              <span>Tất cả các ngày trong tuần</span>
                         </div>
                         <div>
                         <strong>GỌI MUA HÀNG (08:00 - 22:00)</strong> <br />
                              <strong className="text-[30px]">0901010101 </strong><br />
                              <strong className="text-[30px]">(NHÁNH 102) </strong><br />
                              <span>Tất cả các ngày trong tuần</span>
                         </div>
                         <div>
                             <strong> ĐĂNG KÍ NHẬN THÔNG TIN</strong>
                              <br />
                              <div className="flex w-[100%]  content-center">
                                   <form action="" className="h-[40px]">
                                        <input
                                             type="text"
                                             name="email"
                                             className="h-[40px] p-[10px] border-[1px] border-grey w-4/6 "
                                             placeholder="Nhập email của bạn"
                                        />
                                        <input
                                             type="button"
                                             name="btn"
                                             value="ĐĂNG KÍ"
                                             className="h-[40px] w-2/6 border-1 bg-black text-white cursor-pointer font-regular"
                                        />
                                   </form>
                              </div>
                         </div>
                         <div>
                             <strong> LIKE CHÚNG TÔI QUA MẠNG XÃ HỘI </strong><br />
                              <div className="flex space-x-6 justify-center">
                                   <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="xl"
                                   />
                                   <FontAwesomeIcon
                                        icon={faTwitter}
                                        size="xl"
                                   />
                                   <FontAwesomeIcon
                                        icon={faYoutube}
                                        size="xl"
                                   />
                                   <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="xl"
                                   />
                              </div>
                         </div>
                    </div>
               </Box>
               <Box className="mt-[50px] " position="relative">
                    <div className="bg-[#f4f4f4] w-[100%] h-[657px]">
                         <div className="m-auto  grid grid-cols-4 w-[1300px] h-[551px]  content-around">
                              <div className="w-[300px]">
                                   {" "}
                                   <i>
                                        Thời trang <b>PETILLANT</b> xây dựng một
                                        trong những thương hiệu “THỜI TRANG BỀN
                                        VỮNG” đầu tiên tại Việt Nam mong muốn
                                        mang đến cho bạn sự trải nghiệm chất
                                        liệu vải tự nhiên cùng sự tự tin, trẻ
                                        trung mỗi ngày !
                                   </i>{" "}
                                   <br />
                                   <FontAwesomeIcon icon={faLocationDot} /> Trụ
                                   sở chính: Số 173, tổ 6 phố Nguyễn Văn Trỗi,
                                   Phường Mộ Lao, Quận Hà Đông, Hà Nội <br />
                                   <FontAwesomeIcon icon={faEnvelope} /> Email:
                                   info@whiteant.vn <br />
                                   <FontAwesomeIcon icon={faPhone} /> Hotline
                                   mua hàng: 0969566292 <br />
                                   <FontAwesomeIcon icon={faUser} /> Đại lý:
                                   0369071457
                              </div>
                              <div>
                                   <b>Chính sách</b> <br /> <br />
                                   Chính sách khách hàng <br />
                                   Đổi Hàng Và Bảo Hành <br /> <br />
                                   CHÍNH SÁCH BẢO MẬT
                              </div>
                              <div>
                                   <b>Công ty</b> <br /> <br />
                                   Giới thiệu <br />
                                   Tìm kiếm <br />
                                   Liên hệ <br />
                                   Hệ thống cửa hàng <br />
                                   Tuyển dụng
                              </div>
                              <div>
                                   <b>Liên hệ</b> <br /> <br />
                                   <img
                                        src={`${banner}`}
                                        alt=""
                                        className="h-[400px] object-cover"
                                   />
                                   Xem địa chỉ Showroom &#62;
                              </div>
                         </div>
                         <div className="flex bg-[#a1a1a1] h-[106px] justify-center">
                              <Typography className="grid text-center text-white content-center">
                                   DESIGN BY GROUP 11
                                   <b>PETILLANT</b>
                                   LIMITED EDITION
                              </Typography>
                         </div>
                    </div>
               </Box>
          </>
     )
}
export default FooterContent
