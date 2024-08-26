import { LoginIllustrationImg } from "../../assets";
import { LoginForm } from "../../components/forms";

import {
  AuthBackground,
  ContentWrapper,
  Description,
  HeadlineContent,
  Illustration,
  PageSection,
  Title,
} from "./page.styles";

const LoginPage = () => {
  return (
    <PageSection>
      <AuthBackground>&nbsp;</AuthBackground>
      <ContentWrapper>
        <HeadlineContent>
          <Title>Tune Into Your Personal Music Universe</Title>
          <Description>
            Enter your credentials to dive into a world of melodies, rhythms,
            and beats. It's time to experience music like never before.
          </Description>
          <div>
            <Illustration src={LoginIllustrationImg} alt="Login Illustration" />
          </div>
        </HeadlineContent>
        <LoginForm />
      </ContentWrapper>
    </PageSection>
  );
};

export default LoginPage;
