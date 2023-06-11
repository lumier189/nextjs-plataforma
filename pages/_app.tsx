// import '@/styles/globals.css';
import '@/styles/teste.css';

import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/global';
import { AuthProvider } from '@/shared/hooks/auth.hook';

export default function App({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
