import { createTheme } from "@shopify/restyle";
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
      color:'primary'
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
  boxVariants: {
    container:{
        flex:1,
        alignItems:'center'
        },
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        },        
    content:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        borderRadius: 8,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
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

/*const styles = StyleSheet.create({
container:{
flex:1,
alignItems:'center'
},
body:{
flex:1,
alignItems:'center',
justifyContent:'center'
},
title:{
fontWeight:'bold',
fontSize:30,
alignSelf:"center",
color:"#f57c00"
},
button: {
backgroundColor: "#f57c00",
padding: 10,
borderRadius: 8,
justifyContent: "center",
alignItems: "center",
width:'40%',
marginTop: 10,
},
buttonText: {
color: "#fff",
fontWeight: "bold",
fontSize: 18,
},
});*/
