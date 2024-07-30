import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#ff6d09',
    secondary: '#E53935',
    background: '#f6f6f6',
    text: '#ffffff',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  textVariants: {
    link: {
      fontWeight: '600',
      fontSize: 14,
    },
    errorText: {
      marginBottom: 10,
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      alignSelf: 'center',
    },
    header: {
      fontSize: 34,
      fontWeight: 'bold',
      color: 'text',
    },
    body: {
      fontSize: 16,
      color: 'text',
    },
  },
});

export default theme;
