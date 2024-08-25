import { FC } from "react";

import { SidebarLinkProps } from "../../types/props/shared.props";
import { StyledLink, SidebarIconWrapper } from "./shared.styles";

const SidebarLink: FC<SidebarLinkProps> = ({
  title,
  to,
  isActive,
  Icon,
  onClick,
}) => {
  return (
    <StyledLink to={to} isActive={isActive} onClick={onClick}>
      <SidebarIconWrapper>
        {Icon && <Icon />}
        {title}
      </SidebarIconWrapper>
    </StyledLink>
  );
};

export default SidebarLink;
