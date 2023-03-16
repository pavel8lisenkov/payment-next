import styled from "styled-components";

const StyledFormBody: any = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 12px;
  background-color: white;
  width: 500px;
  position: relative;
  user-select: none;

  @media (min-width: 380px) and (max-width: 1440px) {
    gap: calc(10px + (40 - 10) * (100vw - 380px) / (1440 - 380));
    padding: calc(10px + (30 - 10) * (100vw - 380px) / (1440 - 380));
  }

  div {
    font-size: 18px;
  }

  input {
    box-sizing: border-box;
  }

  input::-webkit-input-placeholder {
    font-size: 0.9rem;
    transform: translateY(-.15rem);
  }

  input:-moz-placeholder {
    font-size: 0.9rem;
    transform: translateY(-.15rem);
  }

  input:-ms-input-placeholder {
    font-size: 0.9rem;
    transform: translateY(-.15rem);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'],
  input[type="number"]:hover,
  input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button {
    display: none;
  }
`

const FormBody = (props: any) => {
  return <StyledFormBody {...props} />
}

export default FormBody;