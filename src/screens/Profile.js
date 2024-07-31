import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import { ThemeProvider, createBox, createText } from "@shopify/restyle";
import { auth } from "../service/firebase";
import { AuthenticatedUserContext } from "../contexts";
import theme from "./theme";
export default function Profile() {
  const { user } = useContext(AuthenticatedUserContext);
  const Box = createBox();
  const Text = createText();
  
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
      <Box style={theme.boxVariants.body}>
        <Text variant="title" marginBottom="xl">
          Your Profile
        </Text>
        <Box style={theme.boxVariants.content}>
          <Image 
            source={{ uri: user.photoURL }} 
            style={theme.imageVariants.profile}
          />
          <Box>
            <Text variant="label" >Name</Text>
            <Text variant="value"  marginBottom="s">{user.displayName}</Text>
            <Text variant="label" >Email</Text>
            <Text variant="value" >{user.email}</Text>
          </Box>
        </Box>
        <TouchableOpacity 
          onPress={handleLogout}
          style={[
          theme.buttonVariants.primary,
          {backgroundColor:theme.colors.secondary,padding:theme.spacing.s}
        ]}
        >
          <Text variant="buttonText">Logout</Text>
        </TouchableOpacity>
      </Box>
    </ThemeProvider>
  );
}
