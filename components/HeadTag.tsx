import Head from 'next/head';

const HeadTag = ({props}: any): JSX.Element => {
  return (
    <Head {...props} />
  )
}

export default HeadTag;