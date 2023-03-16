import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { Operator } from '../index';
import { useRouter } from 'next/router';
import OperatorImage from '@/components/OperatorImage';
import OperatorName from '@/components/OperatorName';
import Flex from '@/components/Flex';
import Form from '@/components/Form/Form-styled/FormBody';
import FormWrapper from '@/components/Form/Form-styled/FormWrapper';
import ButtonClose from '@/components/Form/Form-styled/ButtonClose';
import InputAmount from '@/components/Form/InputAmount';
import InputPhone from '@/components/Form/InputPhone';
import ButtonPay from '@/components/Form/ButtonPay';
import ButtonLoad from "../../components/Form/ButtonLoad";

export const getStaticPaths = async (): Promise<object> => {
  try {
    const res = await fetch('http://localhost:5000/items');
    const operator = await res.json();

    const paths = operator.map((operator: Operator) => {
      return {
        params: { id: operator.id?.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  } catch {
    return {
      params: { id: null }
    }
  }
}

export const getStaticProps: GetStaticProps<{ operator: Operator[] }> = async ({ params }: any) => {
  try {
    const res = await fetch(`http://localhost:5000/items/${params.id}`);
    const operator = await res.json();

    return {
      props: { operator }
    }
  } catch {
    return {
      props: { operator: null }
    }
  }
}

const Pay = ({ operator }: any) => {
  const router = useRouter();
  const [phoneValue, setPhoneValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <FormWrapper>
      <Form action="#" >
        <ButtonClose onClick={() => router.push('/')} />
        <Flex >
          <OperatorImage {...operator} />
          <OperatorName>{operator.name}</OperatorName>
        </Flex>
        <InputPhone phoneValue={phoneValue} setPhoneValue={setPhoneValue} />
        <InputAmount amountValue={amountValue} setAmountValue={setAmountValue} />
        <ButtonPay phoneValue={phoneValue} setPhoneValue={setPhoneValue} amountValue={amountValue} setAmountValue={setAmountValue} setLoading={setLoading} loading={loading} >
          {loading ? <ButtonLoad /> : 'Оплатить'}
        </ButtonPay>
      </Form>
    </FormWrapper>
  )
}

export default Pay;