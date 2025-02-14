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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../service/firebase";
import { doc, setDoc } from "firebase/firestore";

const BACKGROUND_IMAGE_URL = Platform.OS==='web'?"https://picsum.photos/1000":"https://picsum.photos/600"

export default function Signup({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState("");

  const onHandleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: imageURL,
      });
      setError(""); 
      const userRef = doc(db, "users", user.uid);

      await setDoc(userRef, {
        displayName: name,
        email: email,
        uid: user.uid,
        photoURL: imageURL,
      });
    } catch (error) {
      console.log(error.code)
      switch (error.code) {
        case "auth/invalid-email":
          setError("The email address you entered is invalid.");
          break;
        case "auth/invalid-credential":
          setError("Invalid credentials");
          break;
        case "auth/network-request-failed":
          setError("Request failed");
        default:
          setError("Account creation failed.");
          break;
      };
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:BACKGROUND_IMAGE_URL}} style={styles.backGround}>
        <View style={styles.Contents}>
          <View style={styles.form}>
          <Text style={styles.title}>Create An account</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter name"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
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
            <TextInput
              style={styles.inputBox}
              placeholder="Enter image URL"
              value={imageURL}
              onChangeText={(text) => setImageURL(text)}
            />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
              <Text style={styles.action}>
                Sign Up
              </Text>
            </TouchableOpacity>

            <View style={styles.navigation}>
              <Text style={styles.text}>Already have an account? </Text>
              <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Log In</Text>
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign:"center",
    color:"#ff6d09"
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
      backgroundColor:"rgba(100, 92, 96, 0.4)",
      padding:15,
      borderRadius:8
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
  action:{
    fontWeight: "bold", 
    color: "#ffffff", 
    fontSize: 18
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
