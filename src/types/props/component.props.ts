import { ReactNode } from "react";

type AsideMenuProps = {
  onCloseMenu?: () => void;
};

type PageTitleProps = {
  children: ReactNode;
};

export type { AsideMenuProps, PageTitleProps };
