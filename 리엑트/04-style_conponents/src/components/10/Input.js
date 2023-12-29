import styled from "styled-components";

const Input = styled.input`
  border: none;
  display: block;
  border-bottom: 2px solid #eeeeee;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  outline: none;
  ${({ $error }) =>
    !$error &&
    `&:focus{
        border-botton : 2px solid #7760b4;
    }`}
  &::placeholder {
    color: #c4c5cd;
  }
`;

export default Input;
