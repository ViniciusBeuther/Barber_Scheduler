import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const ModalChangeInfo = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <Button onClick={handleClick}>MODAL</Button>
      {showModal && (
        <div>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleClose}>
                &times;
              </span>

              {/* Modal content */}
              <div className="modal__content">
                <Input
                  variant="static"
                  className="rounded-lg bg-white"
                  label=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalChangeInfo;
