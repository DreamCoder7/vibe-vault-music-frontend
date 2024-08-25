import { FC } from "react";
import { ModalProps } from "../../types/props/shared.props";
import {
  Overlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalTitle,
} from "./shared.styles";

const Modal: FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={onClose} />
          <div>
            <ModalTitle>{title}</ModalTitle>
            {children}
          </div>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
