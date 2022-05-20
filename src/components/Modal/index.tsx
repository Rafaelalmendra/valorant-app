//icons
import { X } from "react-feather";

//styles
import { ModalCard, Header, Content, DarkBackground } from "./styles";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps) => (
  <>
    <DarkBackground />
    <ModalCard>
      <Header>
        <p>
          skins <strong>{title}</strong>
        </p>
        <X onClick={onClose} />
      </Header>
      <Content>{children}</Content>
    </ModalCard>
  </>
);

export default Modal;
