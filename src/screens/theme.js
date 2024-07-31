import { createTheme, spacing } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#ff6d09',
    secondary: '#E53935',
    background: '#fff',
    text: '#000000',
    buttonText: '#ffffff',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  textVariants: {
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    value: {
      fontSize: 18,
    },
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
      color: 'buttonText',
    },
    header: {
      fontSize: 34,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      color: 'text',
    },
  },
  buttonVariants: {
    primary: {
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
    },
  },
  contentVariants: {
    default: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
    },
  },
  imageVariants: {
    profile: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
  },
});

export default theme;
