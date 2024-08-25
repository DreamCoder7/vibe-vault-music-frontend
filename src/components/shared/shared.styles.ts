import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// Button
interface ButtonProps {
  highlight?: boolean;
  isLoading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ highlight }) =>
    highlight
      ? css`
          background-color: #f1faff; /* Light primary background */
          color: #ffffff; /* Text color */
        `
      : css`
          background-color: #ffffff; /* Light background */
          color: #1d4ed8; /* Primary text color */
        `}
`;

const IconWrapper = styled.div<ButtonProps>`
  width: 1.5rem;
  height: 1.5rem;
  ${({ highlight }) =>
    highlight
      ? css`
          color: #1d4ed8; /* Primary text color */
        `
      : css`
          color: #ffffff; /* Text color */
        `}
`;

const LoadingWrapper = styled.div`
  /* Additional styles for loading indicator if needed */
`;

// Sidebar Link

interface SidebarLinkProps {
  isActive?: boolean;
}

const StyledLink = styled(Link)<SidebarLinkProps>`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #e0f2fe; /* Light primary background */
          color: #4a5568; /* Text color */
        `
      : css`
          background-color: transparent;
          color: #4a5568; /* Text color */
        `}

  /* Dark mode styles if needed */
    &.dark-mode {
    color: #ffffff;
  }
`;

const SidebarIconWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Page Ttitle
const StyledPageTitle = styled.h1`
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.25rem; /* text-xl */
  color: #444;
  padding: 40px;
`;

export {
  IconWrapper,
  SidebarIconWrapper,
  StyledLink,
  StyledButton,
  LoadingWrapper,
  StyledPageTitle,
};
