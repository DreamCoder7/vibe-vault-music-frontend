import { IconType } from "react-icons";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  Icon?: IconType;
  highlight?: boolean;
  type: "submit" | "reset" | "button";
  isLoading?: boolean;
  className?: string;
  id?: string;
};

type SidebarLinkProps = {
  title: string;
  to: string;
  Icon?: IconType;
  isActive: boolean;
  onClick?: () => void;
};

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

type UIModal = {
  type: string;
  isOpen: boolean;
};

type UIState = {
  modal: UIModal;
};

type ActionCellProps = {
  Icon: IconType;
  title: string;
  onClick: () => void;
  className?: string;
  id?: string;
};

export type {
  ButtonProps,
  SidebarLinkProps,
  ModalProps,
  UIState,
  ActionCellProps,
};
