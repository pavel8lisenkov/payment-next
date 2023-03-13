import styled from "styled-components";
import Image from 'next/image';

const StyledImage: any = styled(Image)`
`

const OperatorImage = ( {image, name}: any): JSX.Element => {
  return <StyledImage src={`/.${image}`} alt={name} width='70' height='70' />
}

export default OperatorImage;