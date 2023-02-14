import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      blue: '#0645a4',
      black: '#D8D8D826',
      darkBlue: '#000813',
      lightBlue: '#9CDEF6',
      textGray: '#00000080',
      lightestBlue: 'rgba(156, 222, 246, 0.3)',
      purple: '#A86CAD',
      linear: 'linear-gradient(180deg, #0645a4 0%, #e4f5fd 100%)',
      blueGradient: 'linear-gradient(0deg, #2480CD 0%, #9CDEF6 100%)',
      blueGradientTwo:
        'linear-gradient(143.06deg, #461df1 21.46%, #9a84f7 109.32%)',
      blueGradientThree: 'linear-gradient(180deg, #0645a4 0%, #2480CD 100%)',
      blackLinear:
        'linear-gradient(179.55deg, #000813 46.47%, rgba(0, 8, 19, 0) 93.08%)',
      mainSlideBg: 'linear-gradient(180deg, #D8D8D880 0%, #00081323 98%)',
    },
  },
});
