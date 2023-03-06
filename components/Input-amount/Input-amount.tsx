import React from "react";
import style from './Input-amount.module.css';

const InputAmount = ({ amountValue, setAmountValue }: { amountValue: string, setAmountValue: any }) => {

  const pattern = /\D/g;

  const getInputNumbersValue = (value: any) => {
    return value.replace(pattern, "");
  }

  const handleAmountInput = (event: any) => {
    let input = event.target;
    let inputNumbersValue = getInputNumbersValue(input.value);

    if (inputNumbersValue > 1000) {
      input.value = 1000;
    } else if (inputNumbersValue < 1) {
      input.value = 1;
    }

    if (!inputNumbersValue) {
      input.value = '';
    }

    setAmountValue(input.value);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__input}>
        <label htmlFor="amount">Сумма в рублях</label>
        <input className={style.input} id="amount" type="number" placeholder="Максимальная сумма 1000 ₽" required
          value={amountValue}
          onInput={handleAmountInput}
        />
      </div>
    </div>
  )
}

export default InputAmount;