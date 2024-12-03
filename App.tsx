import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Homepage/Home';
import About from './Components/About';

type RootStackParamList={
  Home: undefined,
  About: {user: {name: string,age: number}}
}

export default function App() {
  const Stack=createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='About' component={About}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
