import { CircleButton } from "@/assets/styles/buttons.style";
import {
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledModalOverlay,
} from "@/assets/styles/modal.style";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <CircleButton onClick={handleCloseClick}>
            <GrClose />
          </CircleButton>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
