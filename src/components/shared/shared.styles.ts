import styled, { css } from "styled-components";

interface ButtonProps {
  highlight?: boolean;
  isLoading?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
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

export const IconWrapper = styled.div<ButtonProps>`
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

export const LoadingWrapper = styled.div`
  /* Additional styles for loading indicator if needed */
`;
