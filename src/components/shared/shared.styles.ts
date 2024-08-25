import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { IoClose } from "react-icons/io5";

import { ButtonProps, SidebarLinkProps } from "../../types/props/styled.props";

// Button
const StyledButton = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

  ${({ highlight }) =>
    highlight
      ? css`
          background-color: #c026d3;
          color: #ffffff;
        `
      : css`
          background-color: #ffffff;
          color: #444;
        `}
`;

const IconWrapper = styled.div<ButtonProps>`
  width: 1.5rem;
  height: 1.5rem;
  ${({ highlight }) =>
    highlight
      ? css`
          color: #fff;
        `
      : css`
          color: #444;
        `}
`;

const LoadingWrapper = styled.div`
  /* Additional styles for loading indicator if needed */
`;

// Sidebar Link

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
          background-color: #c026d3;
          color: #fff;
        `
      : css`
          background-color: transparent;
          color: #4a5568;
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

// Page Title
const StyledPageTitle = styled.h1`
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.25rem;
  color: #444;
  padding: 40px;
`;

// Modal Overlay
const Overlay = styled.div`
  z-index: 40;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
`;

// Modal Container
const ModalContainer = styled.div`
  z-index: 50;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
`;

// Modal Content
const ModalContent = styled.div`
  position: relative;
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Close Button
const CloseButton = styled(IoClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 2rem;
  color: #444;
`;

// Title
const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export {
  IconWrapper,
  SidebarIconWrapper,
  StyledLink,
  StyledButton,
  LoadingWrapper,
  StyledPageTitle,
  ModalTitle,
  CloseButton,
  Overlay,
  ModalContainer,
  ModalContent,
};
