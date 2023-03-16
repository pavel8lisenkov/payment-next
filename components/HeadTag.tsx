import Head from 'next/head';

const HeadTag = ({ props }: any) => {
  return (
    <Head {...props} />
  )
}

export default HeadTag;