import React from "react";
import style from './Button-close.module.css';
import { useRouter } from 'next/router';

const ButtonClose = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={style.button_close} onClick={() => router.push('/')}>
    </div>
  )
}

export default ButtonClose;