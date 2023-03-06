import React, { useEffect } from "react";
import style from './Button-close.module.css';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';

const ButtonClose = () => {
  const router = useRouter();

  return (
    <div className={style.button_close} onClick={() => router.push('/')}>
    </div>
  )
}

export default ButtonClose;