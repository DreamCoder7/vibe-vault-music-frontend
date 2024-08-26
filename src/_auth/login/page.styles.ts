import styled from "styled-components";

import { AuthBackgroundImg } from "../../assets";

const PageSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  height: 100vh;
  background-color: #f7fafc;
`;

const AuthBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${AuthBackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(100% 0, 71% 50%, 40% 100%, 0 100%, 0 0);
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Illustration = styled.img`
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Description = styled.p``;

const HeadlineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export {
  PageSection,
  AuthBackground,
  ContentWrapper,
  Illustration,
  Title,
  Description,
  HeadlineContent,
};
