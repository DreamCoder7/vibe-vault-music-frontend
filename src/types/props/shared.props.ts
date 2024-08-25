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

export type { ButtonProps, SidebarLinkProps, ModalProps };
