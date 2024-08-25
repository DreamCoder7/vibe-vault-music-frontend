import AsideMenu from "./AsideMenu";
import { AsideContainer, Logo } from "../layout.styles";

const Aside = () => {
  return (
    <AsideContainer>
      <Logo>VVM</Logo>
      <AsideMenu />
    </AsideContainer>
  );
};

export default Aside;
