import InputBlockWrapper from "./Input-styled/InputBlockWrapper";
import InputWrapper from "./Input-styled/InputWrapper";
import InputTag from "./Input-styled/InputTag";

type IInputAmountProps = {
  amountValue: string,
  setAmountValue: any
}

const InputAmount = ({ amountValue, setAmountValue }: IInputAmountProps ): JSX.Element => {

  const pattern: RegExp = /\D/g;
  const getInputNumbersValue = (value: any): number => {
    return value.replace(pattern, "");
  }

  const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input: HTMLInputElement = event.target;
    let inputNumbersValue: number = getInputNumbersValue(input.value);

    if (inputNumbersValue > 1000) {
      input.value = '1000';
    } else if (inputNumbersValue < 1) {
      input.value = '1';
    }

    if (!inputNumbersValue) {
      input.value = '';
    }

    setAmountValue(input.value);
  }

  return (
    <InputBlockWrapper>
      <InputWrapper>
        <label htmlFor="amount">Сумма в рублях</label>
        <InputTag id="amount" type="number" placeholder="Максимальная сумма 1000 ₽" required
          value={amountValue}
          onInput={handleAmountInput}
        />
      </InputWrapper>
    </InputBlockWrapper>
  )
}

export default InputAmount;