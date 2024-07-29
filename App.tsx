import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routes';
import Signup from './src/screens/Signup';
export default function App() {
  return (
    <NavigationContainer>
      <Signup />
    </NavigationContainer>
  );
}