import { FC } from "react";
import { useLocation } from "react-router-dom";

import { BiSolidDashboard } from "react-icons/bi";
import { GiLoveSong } from "react-icons/gi";

import SidebarLink from "../../shared/SidebarLink";
import { AsideMenu as AsideMenuStyled } from "../layout.styles";
import { AsideMenuProps } from "../../../types/props/component.props";

const AsideMenu: FC<AsideMenuProps> = ({ onCloseMenu }) => {
  const { pathname } = useLocation();

  return (
    <AsideMenuStyled>
      <SidebarLink
        title={"Dashboard"}
        to={`/dashboard`}
        Icon={BiSolidDashboard}
        isActive={pathname.endsWith(`/dashboard`)}
        onClick={onCloseMenu}
      />
      <SidebarLink
        title={"Song"}
        to={`/songs`}
        Icon={GiLoveSong}
        isActive={pathname.endsWith(`/songs`)}
        onClick={onCloseMenu}
      />
    </AsideMenuStyled>
  );
};

export default AsideMenu;
