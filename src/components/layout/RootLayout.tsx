import { Outlet } from "react-router-dom";

import Aside from "./aside/Aside";
import {
  RootLayoutContainer,
  MainBody,
  SettingsContainer,
  AsideMenuContainer,
} from "./layout.styles";
import UserSettings from "./UserSettings";

const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <AsideMenuContainer>
        <Aside />
      </AsideMenuContainer>

      <MainBody className="main-body">
        <SettingsContainer>
          <UserSettings />
        </SettingsContainer>
        <Outlet />
      </MainBody>
    </RootLayoutContainer>
  );
};

export default RootLayout;
