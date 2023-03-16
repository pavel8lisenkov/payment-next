import styled from "styled-components";

const StyledInputBlockWrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .2s opacity ease-in-out;
  width: 100%;
`

const InputBlockWrapper = (props: any) => {
  return <StyledInputBlockWrapper {...props} />
}

export default InputBlockWrapper;