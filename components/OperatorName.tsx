import styled from "styled-components";

const StyledName: any = styled.h2`
  font-weight: 600;
`

const OperatorName = (props: any) => {
  return (
    <StyledName {...props} />
  )
}

export default OperatorName;