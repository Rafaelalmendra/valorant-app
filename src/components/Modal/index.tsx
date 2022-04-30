import { useState } from "react";
import { X } from "react-feather";

//styles
import { ModalCard, Header, DarkBackground } from "./styles";

//types
interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <>
      <DarkBackground />
      <ModalCard>
        <Header>
          <h1>{title}</h1>
          <X onClick={onClose} />
        </Header>
        {children}
      </ModalCard>
    </>
  );
};

export default Modal;
