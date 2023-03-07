import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const DialogContext = React.createContext(null);

export function DialogProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("zovshorohu");

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <DialogContext.Provider value={{ setOpen, setMessage }}>
        {children}
        {/* <Button variant="contained" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </DialogContext.Provider>
    </div>
  );
}
