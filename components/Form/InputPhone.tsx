import InputBlockWrapper from "./Input-styled/InputBlockWrapper";
import InputWrapper from "./Input-styled/InputWrapper";
import InputTag from "./Input-styled/InputTag";

type IInputPhoneProps = {
  phoneValue: string,
  setPhoneValue: any
}

const InputPhone = ({phoneValue, setPhoneValue}: IInputPhoneProps ): JSX.Element => {

  const pattern: RegExp = /\D/g;

  const getInputNumbersValue = (value: string): string => {
    return value.replace(pattern, "");
  }

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {

    let input: HTMLInputElement = event.target;
    let inputNumbersValue: string = getInputNumbersValue(input.value);
    let formattedInputValue: string = '';
    const selectionStart: number | null = input.selectionStart;

    if (!inputNumbersValue) {
      return input.value = '';
    }

    // if (input.value[2] !== '1') {
    //   return;
    // }

    if (input.value.length !== selectionStart) {
      return;
    }

    if (['7', '8', '9'].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] === '9') {
        inputNumbersValue = '7' + inputNumbersValue;
      }

      let firstSymbols: string = (inputNumbersValue[0] === '8') ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';

      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }

    } else if (inputNumbersValue[0] !== '0') {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 11);
    }
    input.value = formattedInputValue;
    setPhoneValue(input.value);
  }

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
      input.value = '';
    }
    setPhoneValue(input.value);
  }

  return (
    <InputBlockWrapper>
      <InputWrapper>
        <label htmlFor="phone">Номер телефона</label>
        <InputTag id="phone" type="tel" placeholder="+7 (999)-999-99-99" required
          pattern="^((8|\+[1-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$"
          value={phoneValue}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
        />
      </InputWrapper>
    </InputBlockWrapper>
  )
}

export default InputPhone;