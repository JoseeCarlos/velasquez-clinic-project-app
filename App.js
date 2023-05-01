import { StyleSheet, View } from 'react-native';
import Main from './src/components/login/Main.jsx'
import { NativeRouter } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/components/singUp/Main.jsx';

const Stack = createStackNavigator();

export default function App() {
 return(  <NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Main} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Welcome" component={Main} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Main} options={{ headerShown: false }} />
  </Stack.Navigator>
</NavigationContainer>)
}

