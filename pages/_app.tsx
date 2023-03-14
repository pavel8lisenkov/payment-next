import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import favicon from '../public/favicon.ico';

const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}

  nav,footer,header,aside{display: block;}

  html,body{
    width: 100%;
    height: 100%;
    line-height: 1;
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  a{color: inherit;}
  ul li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
`

const Wrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  padding: 100px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  overflow: hidden;
`

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} type="image/x-icon" />
        <title>Payment terminal</title>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <NextNProgress />
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}
