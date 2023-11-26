import { Box } from "@mui/material"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
// import ListItemButton from "@mui/material/ListItemButton";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Search = ({
     setOpenSearch,
}: {
     setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>
}) => {
     //   const [open, setOpen] = useState<boolean>(false);
     //   const navigate = useNavigate();

     //   const handleClick = () => {
     //     setOpen(!open);
     //   };

     const ClickCloseSearch = () => {
          setOpenSearch(false)
     }
     return (
          <>
               <Box className="w-full h-full  fixed">
                    <List
                         sx={{
                              width: "100%",
                              maxWidth: 485,
                              bgcolor: "background.paper",
                         }}
                         className="h-full absolute right-0 bg-white overflow-y-auto"
                         component="nav"
                         aria-labelledby="nested-list-subheader"
                         subheader={
                              <>
                                   <Box className="flex relative">
                                        <ListSubheader
                                             component="div"
                                             id="nested-list-subheader"
                                        >
                                             Search
                                        </ListSubheader>
                                        <Box
                                             className="absolute right-0"
                                             onClick={ClickCloseSearch}
                                        >
                                             X
                                        </Box>
                                   </Box>
                              </>
                         }
                    >
                         {/* Content of the Search */}

                         {/* Button to Checkout */}
                         <Box
                              className="
            flex
            justify-between
            items-center
            w-full
            mt-5
            "
                         ></Box>
                    </List>
               </Box>
          </>
     )
}

export default Search
