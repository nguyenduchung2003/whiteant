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
import { useState } from "react"
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
     const onChangePicture = (e) => {
          setPicture(URL.createObjectURL(e.target.files[0]))
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
                         {updateList ? "Update Item" : "Add Item"}
                    </DialogTitle>
                    <DialogContent className="flex flex-col ">
                         <Box>
                              <TextField
                                   variant="standard"
                                   label="  Name Item"
                                   value={listName}
                                   onChange={(e) => setListName(e.target.value)}
                              ></TextField>
                         </Box>

                         <TextField
                              variant="standard"
                              label="Price"
                              value={listDescription}
                              onChange={(e) =>
                                   setListDescription(e.target.value)
                              }
                         ></TextField>
                         <Input type="file" onChange={onChangePicture}></Input>
                         <img
                              className="playerProfilePic_home_tile"
                              src={picture && picture}
                         ></img>
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={handleClose}>Disagree</Button>
                         <Button
                              onClick={
                                   updateList
                                        ? handleAgreeUpdate
                                        : handleAgreeAdd
                              }
                         >
                              Agree
                         </Button>
                    </DialogActions>
               </Dialog>
          </>
     )
}
export default DialogList