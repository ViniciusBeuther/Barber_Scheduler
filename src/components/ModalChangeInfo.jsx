import { useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

const ModalChangeInfo = ({ data, isOpen }) => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    isOpen ? (
      <p>MODAL ABERTO</p>
    ) : (
      <p>FECHADO</p>
    )
  )
};

export default ModalChangeInfo;
