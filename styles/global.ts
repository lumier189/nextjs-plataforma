import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background:
          'url(https://cdn.discordapp.com/attachments/940151959489499209/1107055199157223496/background1.png) ',
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
