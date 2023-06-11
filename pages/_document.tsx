
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    kkk: {
      900: '#121214',
      100: '#121214',
    },
  },
});

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
