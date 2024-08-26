import React from "react";
import { BiArrowBack } from "react-icons/bi";

import { Button } from "../components/shared";
import {
  Container,
  ErrorText,
  ErrorMessage,
  StyledLink,
  Image,
} from "./root.styles";

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <Image src="/page-not-found.svg" alt="page-not-found-illustration" />
      <ErrorText>Oops! Page not found</ErrorText>
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
