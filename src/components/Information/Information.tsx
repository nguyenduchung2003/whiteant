import { Box, Typography, Button } from "@mui/material"
import home_about_image from "../../Image/home_about_image.webp"
const Information = () => {
     return (
          <>
               <Box className="flex w-full justify-between">
                    <Box
                         style={{
                              backgroundImage: `url(${home_about_image})`,
                         }}
                         className=" h-screen flex justify-center items-center flex-col w-[50%]"
                    >
                         <Box className="flex flex-col gap-10 ">
                              <Typography
                                   variant="h2"
                                   className="text-white font-bold"
                              >
                                   Về chúng tôi
                              </Typography>

                              <Button className="bg-white text-black rounded-none w-[50%] h-[50px]">
                                   Xem ngay
                              </Button>
                         </Box>
                    </Box>
                    <Box className="w-[50%] bg-[#f5f5f5] h-screen">
                         <Box className="text-sm flex  flex-col scale-90 gap-4">
                              <Typography>
                                   <strong>
                                        Công ty CP Kiến Trắng (whiteant-jsc):
                                        Thời trang White Ant{" "}
                                   </strong>
                                   &nbsp;định vị mình là Local Brand thương hiệu
                                   thời trang thiết kế cận cao cấp. Được thành
                                   lập tháng 12/2006, sau 15 năm hình thành và
                                   phát triển theo đuổi mục tiêu và định hướng
                                   mình sẽ trở thành thương hiệu{" "}
                                   <strong>Thời trang bền vững</strong>&nbsp;đầu
                                   tiên tại Việt Nam và đưa đến thị trường những
                                   sản phẩm thời trang hoàn thiện cả chất
                                   lượng&nbsp;và dịch vụ mang tầm quốc tế.&nbsp;
                              </Typography>
                              <Typography>
                                   <strong>WHITE ANT</strong>&nbsp;xây dựng
                                   thương hiệu bằng chất lượng sản phẩm, đó sẽ
                                   là công cụ marketing và chữ tín tốt nhất cho
                                   nhãn hàng, ngoài ra gắn liền với văn hóa
                                   Việt, văn hóa đời sống&nbsp;mỗi bộ trang phục
                                   sẽ là một tác phẩm chứa đựng câu chuyện riêng
                                   và là chính tuyên ngôn lối sống phụ nữ hiện
                                   đại.
                              </Typography>
                              <Typography>
                                   Sự gắn kết&nbsp;chặt chẽ, thống nhất và chủ
                                   động&nbsp;cao của đội ngũ lãnh đạo công ty và
                                   các nhà thiết kế cùng với đội ngũ thợ may cẩn
                                   thận, trau chuốt từng chi tiết, chúng tôi
                                   luôn mang đến quý khách hàng những sản phẩm
                                   chất lượng cao cấp nhất. Với phương châm
                                   “mang lại sự tự tin cho Khách hàng” - " More
                                   Younger, More Confident"&nbsp; luôn tôn vinh
                                   vẻ đẹp và sự quyến rũ của người phụ nữ,&nbsp;
                                   <strong>WHITE ANT</strong>&nbsp;luôn nỗ lực
                                   làm việc hết mình vì sự vẻ đẹp và sự hài lòng
                                   cho khách hàng.
                              </Typography>

                              <Typography>
                                   Các sản phẩm thời trang nhà Kiến dành cho các
                                   doanh nhân, các nữ nhân viên văn phòng, công
                                   chức và những người phụ nữ hiện đại thành đạt
                                   là thế mạnh lớn nhất của&nbsp;
                                   <strong>WHITE ANT.</strong>
                                   &nbsp;Với kiểu dáng và chất liệu mềm mại, có
                                   nguồn gốc tự nhiên,&nbsp;
                                   <strong>WHITE ANT&nbsp;</strong>sẽ làm cho
                                   bạn&nbsp;cảm thấy trang phục công sở không
                                   còn là sự cứng nhắc, gò bó mà thực sự trở
                                   thành một nguồn vui, niềm hứng khởi cho mỗi
                                   ngày đến văn phòng. Mang đến cho c&nbsp;phái
                                   đẹp nét thanh lịch, sang trọng, duyên dáng,
                                   quyến rũ và sự tự tin tuyệt đối.
                              </Typography>
                              <Typography>
                                   Tự tin với sản phẩm của chính mình,&nbsp;
                                   <strong>WHITE ANT</strong>&nbsp;không ngừng
                                   lắng nghe, sáng tạo để đáp ứng tối đa nhu cầu
                                   của quý khách hàng. Xin chân thành cảm ơn mọi
                                   sự đóng góp và ủng hộ của quý khách hàng đã
                                   dành cho <strong>WHITE ANT</strong>
                                   &nbsp;trong suốt thời gian qua và cả trong
                                   tương lai.
                              </Typography>
                              <Typography>
                                   <strong>CÁC LĨNH VỰC HOẠT ĐỘNG: </strong>
                              </Typography>
                              <ul className="text-justify">
                                   <li>
                                        <Typography>
                                             Thiết kế, sản xuất các sản phẩm
                                             thời trang cao cấp.
                                        </Typography>
                                   </li>
                                   <li>
                                        <Typography>
                                             Thiết kế sản xuất các sản phẩm đồng
                                             phục công sở&nbsp;
                                        </Typography>
                                   </li>
                                   <li>
                                        <Typography>
                                             Bán &amp; phân phối các sản phẩm
                                             quần áo, phụ kiện thời trang cao
                                             cấp.
                                        </Typography>
                                   </li>
                                   <li>
                                        <Typography>
                                             Đào tạo nhân lực &amp; xây dựng hệ
                                             thống phần mềm thiết kế chuyên
                                             ngành may.
                                        </Typography>
                                   </li>
                              </ul>
                              <Typography>
                                   <strong>
                                        Công ty CP Kiến Trắng (White Ant-JSC)
                                   </strong>
                              </Typography>
                         </Box>
                    </Box>
               </Box>
               <Typography className="font-bold text-[30px] py-[30px] text-center">
                    BÀI VIẾT MỚI NHẤT
               </Typography>
               <hr />
          </>
     )
}
export default Information
