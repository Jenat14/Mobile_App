import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedUserContext } from '../contexts';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={SignUp} />
  </Stack.Navigator>
);

export const Navigator = () => {
  const { user } = useContext(AuthenticatedUserContext);
  return user ? <AppStack /> : <AuthStack />;
};
