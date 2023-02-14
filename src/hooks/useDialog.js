import { useContext } from "react";
import { DialogContext } from "../contexts";

export const useDialog = () => {
  const { setOpen, setMessage } = useContext(DialogContext);

  const showDialog = (msg = "tatgalz") => {
    setMessage(msg);
    setOpen(true);
  };
  return showDialog;
};
