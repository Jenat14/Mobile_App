import React from "react";
import {TouchableOpacity} from "react-native";
import { ThemeProvider,createBox,createText} from "@shopify/restyle";
import theme from "./theme";

const Box=createBox();
const Text=createText();

export default function Home({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <Box style={theme.boxVariants.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Box margin="l" backgroundColor="primary" variant="button" style={[theme.boxVariants.button,{width:250}]}>
            <Text variant='buttonText'>Profile</Text>
          </Box>
        </TouchableOpacity>
        <Box style={theme.boxVariants.body}>
          <Text variant='title'>This is The Home Page</Text>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

