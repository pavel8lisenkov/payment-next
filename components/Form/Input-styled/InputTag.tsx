import styled from "styled-components";

const StyledInputTag: any = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #edf8ff;
  border-radius: 8px;
  text-align: center;
  color: #000000;
  font-size: 24px;

  &:focus {
    border: 1px solid #00aeef;
    outline: none;
  }
`

const InputTag = (props: any): JSX.Element => {
  return <StyledInputTag {...props} />
}

export default InputTag;