import Head from 'next/head';
import Image from 'next/image';
import favicon from '@/public/favicon.ico';
import style from '@/styles/Home.module.css';
import Title from '@/components/Title/Title';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Operator } from '@/types';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    return {
      props: { operators: data }
    }
  } catch {
    return {
      props: { operators: null }
    }
  }

}

const Home = ( { operators }: any ): JSX.Element => {

  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} type="image/x-icon" />
        <title>Терминал оплаты</title>
      </Head>
      <main className={style.container}>
        <Title />
        <div className={style.list}>
          {operators.map((operator: Operator) => {
            return (
              <Link href={`/operator/${operator.id}`} key={operator.id} className={style.item}>
                <div>
                  <Image
                    src={`/.${operator.image}`}
                    alt={`${operator.name}`}
                    width='70'
                    height='70'
                  />
                </div>
                <h2>{operator.name}</h2>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Home;