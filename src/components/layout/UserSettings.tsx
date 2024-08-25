import {
  SettingsContainer,
  NotificationIcon,
  LogoutButton,
  LogoutIcon,
  Button,
} from "./layout.styles";

const UserSettings = () => {
  return (
    <SettingsContainer>
      <Button>
        <NotificationIcon />
      </Button>
      <LogoutButton onClick={() => {}}>
        <LogoutIcon />
        Logout
      </LogoutButton>
    </SettingsContainer>
  );
};

export default UserSettings;
