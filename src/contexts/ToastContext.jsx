import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
    setMessage("");
    setType("success");
  };

  return (
    
  );
};
