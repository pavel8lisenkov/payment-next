import styled from "styled-components";

const StyledFormWrapper: any = styled.div`
  position: fixed;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  transition: 0.3s;
`

const FormWrapper = (props: any): JSX.Element => {
  return <StyledFormWrapper {...props} />
}

export default FormWrapper;