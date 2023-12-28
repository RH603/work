import styled from "styled-components";

const SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

const Input = styled.input`
  border: 2px solid ${({ $error }) => ($error ? `#f44336` : `#eeeeee`)};
  padding: 16px;
  margin-right: 8px;
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  border-radius: ${({ $round }) => ($round ? "9999px" : "4px")};
  outline: none;
    ${({$error})=> !$error &&`&:focus{
        border-color : #7760b4;
    }`}
`;

export default Input;
