import React from "react";
import {TouchableOpacity} from "react-native";
import { ThemeProvider} from "@shopify/restyle";
import theme from "./theme";

import View from "../components/view";
import Text from "../components/text";

export default function Home({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <View style={theme.boxVariants.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <View margin="l" backgroundColor="primary" variant="button" style={[theme.boxVariants.button,{width:250}]}>
            <Text variant='buttonText'>Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={theme.boxVariants.body}>
          <Text variant='title'>This is The Home Page</Text>
        </View>
      </View>
    </ThemeProvider>
  );
}

