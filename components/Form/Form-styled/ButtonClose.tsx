import styled from "styled-components";

const StyledButtonClose: any = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  transition: ease 0.5s;

  &:hover {
    cursor: pointer;
  }

  &::after,::before {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 20px;
    height: 3px;
    background: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

const ButtonClose = (props: any): JSX.Element => {
  return <StyledButtonClose {...props} />
}

export default ButtonClose;