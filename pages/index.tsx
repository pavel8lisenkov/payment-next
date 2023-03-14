import { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Title from '../components/Title';
import OperatorItem from '../components/OperatorItem';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:5000/items');
    const operators = await res.json();

    return {
      props: { operators }
    }
  } catch {
    return {
      props: { operators: null }
    }
  }
}

const OperatorList = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export type Operator = {
  id?: string,
  name?: string,
  image?: string
}

const App = ({ operators }: any): JSX.Element => {
  return <>
    <Title>Выберите оператора</Title>
    <OperatorList>
      {operators.map((operator: Operator) => {
        return <Link key={operator.id} href={`/operator/${operator.id}`}>
          <OperatorItem {...operator} />
        </Link>
      })}
    </OperatorList>
  </>
}

export default App;