import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Button = styled.button`
  margin: 0;
  width: 100%;
  cursor: pointer;
  background-color: #6500c3;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `8px`)};

  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;

export default Button;
