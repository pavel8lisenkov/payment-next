import styled from "styled-components";
import Image from 'next/image';

// const OperatorImage = ({ image, name }: any) => {
//   return <img src={`https://raw.githubusercontent.com/pavel8lisenkov/payment-images/main/images/${image}`} alt={name} width='70' height='70' />
// }

const StyledImage: any = styled.img`
  width: 70px;
  height: 70px;

  @media (max-height: 580px) {
    width: 40px;
    height: 40px;
  }
`
const OperatorImage = ({ image, name }: any) => {
  return <StyledImage src={`https://raw.githubusercontent.com/pavel8lisenkov/payment-images/main/images/${image}`} alt={name} />
}

// const StyledImage: any = styled(Image)`
// `
// const OperatorImage = ({ image, name }: any) => {
//   return <StyledImage src={`/.${image}`} alt={name} width='70' height='70' />
// }

export default OperatorImage;