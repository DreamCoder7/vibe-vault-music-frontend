import React from "react";
import { BiArrowBack } from "react-icons/bi";

import { Button } from "../components/shared";
import {
  Container,
  ErrorText,
  ErrorTitle,
  ErrorSubtitle,
  ErrorMessage,
  StyledLink,
} from "./root.styles";

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <ErrorText>Oops! Page not found</ErrorText>
      <ErrorTitle>
        <ErrorSubtitle>4</ErrorSubtitle>
        <ErrorSubtitle>0</ErrorSubtitle>
        <ErrorSubtitle>4</ErrorSubtitle>
      </ErrorTitle>
      <ErrorMessage>
        We are sorry, but the page you requested was not found
      </ErrorMessage>
      <StyledLink to="/">
        <Button
          type="button"
          title="Go Back"
          Icon={BiArrowBack}
          onClick={() => {}}
          highlight
        />
      </StyledLink>
    </Container>
  );
};

export default PageNotFound;
