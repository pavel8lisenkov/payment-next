import React, { useState } from "react";
import style from './Button.module.css';
import Spinner from "./Spinner";
import { useRouter } from "next/router";

type IButtonProps = {
  phoneValue: string,
  setPhoneValue: any,
  amountValue: string,
  setAmountValue: any
}

const Button = ({ phoneValue, setPhoneValue, amountValue, setAmountValue }: IButtonProps ): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getRandomNum = (min: number = 1, max: number = 2): number => {
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

    const isStartsSeven: boolean = phoneValue[1] === '7' && phoneValue.length === 18;
    const isStartsEight: boolean = phoneValue[0] === '8' && phoneValue.length === 17;
    const isNotRussianPhoneNumber: boolean = phoneValue[0] === '+' && phoneValue[1] !== '7' && phoneValue.length === 12;

    if ((amountValue.length > 0) && (isStartsSeven || isStartsEight || isNotRussianPhoneNumber)) getResp(event);
  };

  return (
    <button type="submit" className={style.button} onClick={event => payAttempt(event)} disabled={ loading } >
      {loading ? <Spinner /> : 'Оплатить'}
    </button>
  )
}

export default Button;