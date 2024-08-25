import { FC } from "react";

import Loading from "./Loading";

import { ButtonProps } from "../../types/props/shared.props";
import { StyledButton, IconWrapper, LoadingWrapper } from "./shared.styles"; // Import styles

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  Icon,
  highlight,
  type,
  isLoading,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} highlight={highlight}>
      {isLoading && (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
      {!isLoading && Icon && (
        <IconWrapper highlight={highlight}>
          <Icon />
        </IconWrapper>
      )}
      {!isLoading && title}
    </StyledButton>
  );
};

export default Button;
