import { useContext } from "react";
import { ModalContext } from "../contexts";

export const useModal = () => {
  const { setMessage, setOpen } = useContext(ModalContext);

  const showModal = (msg = "asult") => {
    setMessage(msg);
    setOpen(true);
  };
  return showModal;
};
