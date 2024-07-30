import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebase";

const BACKGROUND_IMAGE_URL = Platform.OS==='web'?"https://picsum.photos/1000":"https://picsum.photos/600"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const handleAuthError = (error) => {
    console.log("Login error: ", error);
    const errorCode = error.code;
    
    switch (errorCode) {
      case "auth/invalid-email":
        setError("The email address you entered is invalid.");
        break;
      case "auth/invalid-credential":
        setError("Invalid credentials");
        break;
      default:
        setError("An unexpected error occurred.");
        break;
    }
  };

  const onHandleLogin = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Login success");
          navigation.navigate('Home');
        })
        .catch(handleAuthError);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:BACKGROUND_IMAGE_URL}} style={styles.backGround}>
        <View style={styles.Contents}>
          <View style={styles.form}>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}          
            <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
                Log In
              </Text>
            </TouchableOpacity>

            <View style={styles.navigation}>
              <Text style={styles.text}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.link}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGround: {
    flex: 1,
  },
  Contents: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  form: {
    width: Platform.OS === 'web'? '40%': "80%",
  },
  inputBox: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff6d09",
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  link: {
    color: "#ff6d09",
    fontWeight: "600",
    fontSize: 14,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
