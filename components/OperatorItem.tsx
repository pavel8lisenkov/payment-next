import styled from "styled-components";
import OperatorImage from './OperatorImage';
import OperatorName from './OperatorName';
import { Operator } from '../pages/index';

const StyledOperatorItem = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: #edf8ff;
  user-select: none;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
  transition: .2s box-shadow ease-in-out,.2s opacity ease-in-out;
  opacity: .9;

  &:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: 0 0 5px #00aeef;
  }
`

const OperatorItem = ( operator: Operator): JSX.Element => {
  return (
    <StyledOperatorItem>
        <OperatorImage {...operator} />
        <OperatorName>{operator.name}</OperatorName>
    </StyledOperatorItem>
  )
}

export default OperatorItem;