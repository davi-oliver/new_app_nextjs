

import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import { Container, Header } from '../styles/pages/app';
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container>
        <Header>
          {/* <img src={logoImg.src} alt="logo" /> */}
        </Header>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
