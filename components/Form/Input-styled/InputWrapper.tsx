import styled from "styled-components";

const StyledInputWrapper: any = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  transition: .2s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const InputWrapper = (props: any): JSX.Element => {
  return <StyledInputWrapper {...props} />
}

export default InputWrapper;