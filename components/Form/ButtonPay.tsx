import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 13px;
  border-radius: 8px;
  background: #00afefd5;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  transition: .2s ease-in-out;

  &:hover:not(:disabled) {
    background: #00aeef;
    -webkit-box-shadow: 0 0 5px #00aeef;
    -moz-box-shadow: 0 0 5px #00aeef;
    box-shadow: 0 0 5px #00aeef;
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.4);
  }
`

type IButtonProps = {
  phoneValue: string,
  setPhoneValue: any,
  amountValue: string,
  setAmountValue: any,
  setLoading: any,
  children: any,
  loading: boolean
}

const ButtonPay = ({ phoneValue, setPhoneValue, amountValue, setAmountValue, setLoading, children, loading }: IButtonProps) => {
  const router = useRouter();

  const getRandomNum = (min = 1, max = 2) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomPay = (num: number): void => {
    if (num === 1) {
      alert(`Оплата по номеру ${phoneValue} на сумму ${amountValue}₽ не прошла, попробуйте еще раз.`);
    } else if (num === 2) {
      alert(`Оплата по номеру ${phoneValue} на сумму ${amountValue}₽ прошла, поздравляем!`);
      setPhoneValue('');
      setAmountValue('');
      router.push('/');
    }
  }

  const payAttempt = (event: any): void => {

    const getResp = (event: any): void => {
      const p = new Promise<void>(function (resolve, reject) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          resolve();
        }, 2000)
      })

      event.preventDefault();
      p.then(() => {
        setTimeout(() => {
          randomPay(getRandomNum(1, 2));
        }, 20)
      })
    }

    const isStartsSeven = phoneValue[1] === '7' && phoneValue.length === 18;
    const isStartsEight = phoneValue[0] === '8' && phoneValue.length === 17;
    const isNotRussianPhoneNumber = phoneValue[0] === '+' && phoneValue[1] !== '7' && phoneValue.length === 12;

    if ((amountValue.length > 0) && (isStartsSeven || isStartsEight || isNotRussianPhoneNumber)) getResp(event);
  };

  return <StyledButton onClick={event => payAttempt(event)} disabled={loading}>{children}</StyledButton>
}

export default ButtonPay;