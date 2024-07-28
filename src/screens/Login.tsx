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
const BACKGROUND_IMAGE_URL = Platform.OS==='web'?"https://picsum.photos/1000":"https://picsum.photos/600"

export default function Login(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return(
        <View style={styles.container}>
        <ImageBackground source={{uri:BACKGROUND_IMAGE_URL}} style={styles.backImage}>
          <View style={styles.overlay}>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
  
              <TouchableOpacity style={styles.button} >
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
                  Log In
                </Text>
              </TouchableOpacity>
  
              <View style={styles.navigation}>
                <Text style={styles.text}>Don't have an account? </Text>
                <TouchableOpacity >
                  <Text style={styles.linkText}>Sign Up</Text>
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
    backImage: {
      flex: 1,
    },
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    form: {
      width: "80%",
    },
    input: {
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
    },
    button: {
      backgroundColor: "#f57c00",
      padding: 15,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    navigation: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
    },
    text: {
      color: "white",
      fontWeight: "600",
      fontSize: 14,
    },
    linkText: {
      color: "#f57c00",
      fontWeight: "600",
      fontSize: 14,
    },
  });
  