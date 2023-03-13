import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledButtonLoadWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButtonLoad = styled.div`
  border: 3.5px solid #f3f3f3;
  border-top: 3.5px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotateAnimation} 1s infinite linear;
`

const ButtonLoad = (): JSX.Element => {
  return (
    <StyledButtonLoadWrapper>
      <StyledButtonLoad>
      </StyledButtonLoad>
    </StyledButtonLoadWrapper>
  )
}

export default ButtonLoad;