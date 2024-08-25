import React from "react";

import {
  Container,
  Wrapper,
  Image,
  Heading,
  Message,
  RefreshButton,
} from "./root.styles";

const FallbackRender: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Image src={"/error-boundary.svg"} alt="Error" />
        <Heading>Uh Oh.</Heading>
        <Message>
          Looks Like Something’s wrong. We’ll try to fix it as soon as possible.
        </Message>
        <RefreshButton
          title="Refresh"
          type="button"
          highlight
          onClick={handleRefresh}
        />
      </Wrapper>
    </Container>
  );
};

export default FallbackRender;
