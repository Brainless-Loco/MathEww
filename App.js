import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';




const Stack = createNativeStackNavigator();


export default function App() {

  const [age, setAge] = useState(0)


  const ageBaran = ()=>{
    setAge(age+1)

  }


  return (
    <NavigationContainer>
      <Stack.Navigator>


        {/* <Stack.Screen name='AmarLogInPage' component={LogIn} /> */}
        {/* <Stack.Screen name='AmarSignUpPage' component={SignUp} /> */}



      </Stack.Navigator>
    </NavigationContainer>
  );
}


const ISHTYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textColor:{
    color: 'red',
    height: 500
  },
  stretch: {
    width: 100,
    height: 100,
  },
});
