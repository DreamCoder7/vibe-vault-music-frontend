import { IntroDashboardImg } from "../../assets";
import PageTitle from "../../components/shared/PageTitle";
import Statistics from "./components/Statistics";
import {
  Intro,
  IntroContent,
  IntroImg,
  IntroImgContainer,
  IntroText,
  IntroTitle,
} from "./page.styles";

const DashboardPage = () => {
  return (
    <section>
      <PageTitle>Dashboard</PageTitle>
      <Intro>
        <IntroImgContainer>
          <IntroImg src={IntroDashboardImg} alt="Music Dj" />
        </IntroImgContainer>
        <IntroContent>
          <IntroTitle>Your Music Hub</IntroTitle>
          <IntroText>
            Step into your personalized Music Hub—your gateway to managing and
            exploring your favorite tunes effortlessly. The DashboardPage
            welcomes you with a vibrant visual and a warm greeting, setting the
            stage for a seamless music management experience.
          </IntroText>
        </IntroContent>
      </Intro>

      <Statistics />
    </section>
  );
};

export default DashboardPage;
