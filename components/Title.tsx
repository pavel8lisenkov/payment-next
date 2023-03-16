import styled from "styled-components";

const StyledTitle: any = styled.h1`
  padding-bottom: 1.2rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  user-select: none;
  color: ${props => props.color}
`

const Title = (props: any) => {
  return <StyledTitle {...props} />
}

export default Title;