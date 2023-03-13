import styled, { css } from 'styled-components';

type Flexbox = {
  display?: string,
  flexDirection?: string,
  alignItems?: string,
  gap?: string,
  justifyContent?: string
}

const StyledFlex = styled.div<Flexbox>`
  ${({display, flexDirection, alignItems, gap, justifyContent}) => css`
    display: flex;
    flex-direction: ${flexDirection || 'row'};
    align-items: ${alignItems || 'center'};
    gap: ${gap || '20px'};
    justify-content: ${ justifyContent || 'center'};
  `}
`

const Flex = (props: any): JSX.Element => {
  return <StyledFlex {...props} />
}

export default Flex;