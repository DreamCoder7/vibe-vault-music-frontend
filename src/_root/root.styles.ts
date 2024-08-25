import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../components/shared";

// Page Not Found styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorText = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const ErrorTitle = styled.h1`
  font-weight: 800;
  font-size: 9rem;
  display: flex;
  align-items: center;
`;

const ErrorSubtitle = styled.span`
  font-size: 9rem;
`;

const ErrorMessage = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
`;

// ErrorBoundary Fallback styles
const FallbackContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #4a5568; /* Tailwind's text-gray-600 */
`;

const Message = styled.p`
  color: #6b7280; /* Tailwind's text-gray-500 */
  width: 66.6667%; /* Tailwind's w-8/12 */
  text-align: center;
`;

const RefreshButton = styled(Button)`
  /* Apply additional styling to the Button if necessary */
`;

export {
  Button,
  RefreshButton,
  Container,
  ErrorMessage,
  Heading,
  ErrorText,
  ErrorTitle,
  FallbackContainer,
  StyledLink,
  ErrorSubtitle,
  Image,
  Message,
  Wrapper,
};
