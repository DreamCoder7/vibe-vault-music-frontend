import styled from "styled-components";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  margin: 50px;
  margin-top: 30px;

  position: relative;
`;

const IntroImgContainer = styled.div`
  height: 300px;
`;

const IntroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const IntroContent = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const IntroTitle = styled.h1`
  color: #fff;
`;

const IntroText = styled.p`
  color: #fff;
  width: 70%;
`;

const StatisticsContainer = styled.div`
  padding-left: 50px;
`;

export {
  Intro,
  IntroImg,
  IntroContent,
  IntroImgContainer,
  IntroText,
  IntroTitle,
  StatisticsContainer,
};
