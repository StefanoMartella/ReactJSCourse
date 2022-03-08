import styled from "styled-components";

const StyledInput = styled.input`
  padding: 12px;
  margin: 32px;
  width: 300px;
  border-radius: 12px;
  border-color: transparent;
  align-self: center;
  outline: none;
  box-shadow: 0px 5px 20px 0px #dedede;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
