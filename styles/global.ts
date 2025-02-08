import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: '/assets/background.png',
        backgroundImage: '/assets/background.png',
        backgroundSize: 'cover',
      },
    },
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          backgroundColor: '#0DA8FF',
        },
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '1280px',
    // lg: '960px',
    // xl: '1200px',
  },
});
