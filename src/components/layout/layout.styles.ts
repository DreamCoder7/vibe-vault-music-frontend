import styled from "styled-components";

import { MdLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

// Root Layout
const RootLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
`;

const AsideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const MainBody = styled.main`
  flex: 1;
  min-height: 100vh;
  overflow-y: scroll;
  position: relative;
`;

const SettingsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// User Settings
const UserSettingsContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  display: flex;
  gap: 0.5rem;

  @media (min-width: 768px) {
    right: 1rem; /* Adjust as needed for medium screens */
  }
`;

const Button = styled.button`
  all: unset;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const NotificationIcon = styled(IoIosNotifications)`
  font-size: 1.5rem;
`;

const LogoutButton = styled(Button)`
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const LogoutIcon = styled(MdLogout)`
  font-size: 1.5rem;
`;

// Aside
const AsideContainer = styled.aside`
  display: none;
  background-color: #fff;
  color: red;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  top: 0;
  width: 20rem;
  padding: 1rem;
  margin: 0.625rem;
  border-radius: 1.5625rem;
  height: 98vh;
  overflow-y: scroll;

  @media (min-width: 768px) {
    display: block;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  font-weight: bold;
  color: #c026d3;
`;

const AsideMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export {
  RootLayoutContainer,
  AsideContainer,
  MainBody,
  SettingsContainer,
  LogoutButton,
  UserSettingsContainer,
  NotificationIcon,
  Button,
  LogoutIcon,
  AsideMenuContainer,
  Logo,
  AsideMenu,
};
