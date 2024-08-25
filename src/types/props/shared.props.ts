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

export type { ButtonProps };
