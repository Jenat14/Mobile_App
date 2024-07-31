import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import { ThemeProvider} from "@shopify/restyle";
import { auth } from "../service/firebase";
import { AuthenticatedUserContext } from "../contexts";
import theme from "./theme";
import View from "../components/view";
import Text from "../components/text";
export default function Profile() {
  const { user } = useContext(AuthenticatedUserContext);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={theme.boxVariants.body}>
        <Text variant="title" marginBottom="xl">
          Your Profile
        </Text>
        <View style={theme.boxVariants.content}>
          <Image variant="profile"
            source={{ uri: user.photoURL }} 
            style={theme.imageVariants.profile}
          />
          <View>
            <Text variant="label" >Name</Text>
            <Text variant="value"  marginBottom="s">{user.displayName}</Text>
            <Text variant="label" >Email</Text>
            <Text variant="value" >{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity 
          onPress={handleLogout}
        >
          <View backgroundColor="secondary" padding="s"
          style={theme.boxVariants.button}>
            <Text variant="buttonText">Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ThemeProvider>
  );
}
