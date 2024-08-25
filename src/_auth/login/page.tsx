import { LoginIllustrationImg } from "../../assets";
import { LoginForm } from "../../components/forms";

import {
  AuthBackground,
  ContentWrapper,
  Illustration,
  PageSection,
} from "./page.styles";

const LoginPage = () => {
  return (
    <PageSection>
      <AuthBackground>&nbsp;</AuthBackground>
      <ContentWrapper>
        <LoginForm />
        <div>
          <Illustration src={LoginIllustrationImg} alt="Login Illustration" />
        </div>
      </ContentWrapper>
    </PageSection>
  );
};

export default LoginPage;
