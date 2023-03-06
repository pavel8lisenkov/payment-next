import React from "react";
import s from './Input-phone.module.css';

const InputPhone = ({phoneValue, setPhoneValue}: { phoneValue: any, setPhoneValue: any }) => {

  const pattern = /\D/g;

  const getInputNumbersValue = (value: string) => {
    return value.replace(pattern, "");
  }

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {

    let input = event.target;
    let inputNumbersValue = getInputNumbersValue(input.value);
    let formattedInputValue = '';
    const selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return input.value = '';
    }

    if (input.value.length !== selectionStart) {
      return;
    }

    if (['7', '8', '9'].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] === '9') {
        inputNumbersValue = '7' + inputNumbersValue;
      }

      let firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
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
    console.log(event)
    setPhoneValue(input.value);
  }

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
      input.value = '';
    }
    setPhoneValue(input.value);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__input}>
        <label htmlFor="phone">Номер телефона</label>
        <input id="phone" type="tel" placeholder="+7 (999)-999-99-99" required
          pattern="^((8|\+[1-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$"
          value={phoneValue}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
        />
      </div>
    </div>
  )
}

export default InputPhone;