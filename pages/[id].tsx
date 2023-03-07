import React, { useState } from 'react';
import Head from 'next/head';
import favicon from '@/public/favicon.ico';
import style from '@/styles/Pay.module.css';
import Image from 'next/image';
import InputPhone from '@/components/Input-phone/Input-phone';
import InputAmount from '@/components/Input-amount/Input-amount';
import Button from '@/components/Button/Button';
import ButtonClose from '@/components/Button-close/Button-close';
import { GetStaticProps } from 'next';

export const getStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    const paths = data.map((operator: any) => {
      return {
        params: {id: operator.id}
      }
    })

    return {
      paths,
      fallback: false
    }
  } catch {
    return {
      params: {id: null}
    }
  }
}

export const getStaticProps:GetStaticProps = async (context: any) => {
  try {
    const id = context.params.id;

    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();

    return {
      props: { operator: data }
    }
  } catch {
    return {
      props: { operator: null }
    }
  }
}

const Pay = ({ operator }: any ) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  return (
    <>
    <Head>
      <link rel="icon" href={favicon.src} type="image/x-icon" />
      <title>Страница оплаты</title>
    </Head>
    <div className={style.form__wrapper}>
      <form action="" className={style.form__body}>
        <ButtonClose />
        <div className={style.form__header}>
          <Image
            src={`/.${operator.image}`}
            alt={`${operator.name}`}
            width='70'
            height='70'
          />
          <h2>{operator.name}</h2>
        </div>
        <InputPhone phoneValue={phoneValue} setPhoneValue={setPhoneValue} />
        <InputAmount amountValue={amountValue} setAmountValue={setAmountValue} />
        <Button phoneValue={phoneValue} setPhoneValue={setPhoneValue} amountValue={amountValue} setAmountValue={setAmountValue} />
      </form>
    </div>
    </>
  )
}

export default Pay;