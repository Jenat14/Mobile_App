import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/service/firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticatedUserContext } from "./src/contexts";
import { StatusBar } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Profile from "./src/screens/Profile";

// Authenticated User Provider component
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

// Entry point
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootComponent />
    </AuthenticatedUserProvider>
  );
}

const RootComponent = () => {
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Use the Authenticated User Context
  const { setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          await authenticatedUser.reload();
          setUser(authenticatedUser);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );
    return unsubscribeAuth; // Unsubscribe auth listener on unmount
  }, [setUser]);

  // Conditional rendering based on authentication state
  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

const MainNavigator = () => {
  const { user } = useContext(AuthenticatedUserContext);
  return user ? <AppStack /> : <AuthStack />;
};

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
};
