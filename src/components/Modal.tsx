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

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!modalRoot) {
    return null; // Otra opción es mostrar un mensaje de error o proporcionar una alternativa
  }

  const handleCloseClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
    return ReactDOM.createPortal(modalContent, modalRoot);
  } else {
    return null;
  }
};

export default Modal;
