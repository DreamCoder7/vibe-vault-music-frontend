import { useNavigate } from "react-router-dom";
import {
  SettingsContainer,
  NotificationIcon,
  LogoutButton,
  LogoutIcon,
  Button,
} from "./layout.styles";

const UserSettings = () => {
  const push = useNavigate();

  const handleLogout = () => {
    push("/auth/login");
  };

  return (
    <SettingsContainer>
      <Button>
        <NotificationIcon />
      </Button>
      <LogoutButton onClick={handleLogout}>
        <LogoutIcon />
        Logout
      </LogoutButton>
    </SettingsContainer>
  );
};

export default UserSettings;
