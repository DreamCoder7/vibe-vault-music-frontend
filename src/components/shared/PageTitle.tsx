import { FC } from "react";

import { StyledPageTitle } from "./shared.styles";
import { PageTitleProps } from "../../types/props/component.props";

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
