import {
     Button,
     Box,
     DialogTitle,
     DialogContent,
     Dialog,
     DialogActions,
     TextField,
     Input,
} from "@mui/material"
// import { useState } from "react"
interface Props {
     open: boolean
     handleClose: () => void
     listName: string
     setListName: React.Dispatch<React.SetStateAction<string>>
     listDescription: string
     setListDescription: React.Dispatch<React.SetStateAction<string>>
     handleAgreeAdd: () => void
     updateList: boolean
     handleAgreeUpdate: () => void
     setPicture: React.Dispatch<React.SetStateAction<string>>
     picture: string
}

const DialogList = ({
     open,
     handleClose,
     listName,
     setListName,
     listDescription,
     setListDescription,
     handleAgreeAdd,
     updateList,
     handleAgreeUpdate,
     setPicture,
     picture,
}: // setPicture,
Props) => {
     // const onChangePicture = e => {
     //      if (e.target.files[0]) {
     //        console.log("picture: ", e.target.files);
     //        setPicture(e.target.files[0]);
     //        const reader = new FileReader();
     //        reader.addEventListener("load", () => {
     //          setImgData(reader.result);
     //        });
     //        reader.readAsDataURL(e.target.files[0]);
     //      }
     //    };
     // const [picture, setPicture] = useState <string>("")
     // const onChangePicture = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

     //      setPicture(URL.createObjectURL(e.target.files[0]))
     // }
     const onChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
               setPicture(URL.createObjectURL(e.target.files[0]))
          }
     }
     return (
          <>
               <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
               >
                    <DialogTitle id="alert-dialog-title">
                         {updateList ? "CẬP NHẬT SẢN PHẨM" : "THÊM SẢN PHẨM"}
                    </DialogTitle>
                    <DialogContent className="flex flex-col ">
                         <Box>
                              <TextField
                                   className="mb-[10px]"
                                   variant="standard"
                                   label="Tên sản phẩm"
                                   value={listName}
                                   onChange={(e) => setListName(e.target.value)}
                              ></TextField>
                         </Box>

                         <TextField
                              className="mb-[10px]"
                              variant="standard"
                              label="Giá sản phẩm"
                              value={listDescription}
                              onChange={(e) =>
                                   setListDescription(e.target.value)
                              }
                         ></TextField>
                         <br />
                         <Input
                              type="file"
                              onChange={onChangePicture}
                              className="w-[100%]"
                         ></Input>
                         <img
                              className="playerProfilePic_home_tile"
                              src={picture && picture}
                         ></img>
                    </DialogContent>
                    <DialogActions>
                         <Button color="error" onClick={handleClose}>
                              Hủy
                         </Button>
                         <Button
                              onClick={
                                   updateList
                                        ? handleAgreeUpdate
                                        : handleAgreeAdd
                              }
                         >
                              Đồng ý
                         </Button>
                    </DialogActions>
               </Dialog>
          </>
     )
}
export default DialogList
