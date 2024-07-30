import { SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';
import { AuthenticatedUserProvider, AuthenticatedUserContext } from './src/contexts/index';
import { Navigator } from './src/navigation/Navigator';
import React, { useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from './src/service/firebase';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootComponent />
    </AuthenticatedUserProvider>
  );
}

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        await authenticatedUser.reload();
        setUser(authenticatedUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribeAuth;
  }, [setUser]);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color=""/>
      </SafeAreaView>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
};
