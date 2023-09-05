import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import GettingStarted from '../screens/auth/GettingStarted';
// import Login from '../screens/auth/Login';
// import Signup from '../screens/auth/Signup';
// import ForgetPassword from '../screens/auth/ForgetPassword';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
        <>
        <StatusBar translucent barStyle={"light-content"} backgroundColor={"transparent"} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name='GetStarted' component={GettingStarted}/> */}
            {/* <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='ForgetPassword' component={ForgetPassword}/> */}
        </Stack.Navigator>
        </>
    );
  }

  export default AuthRoutes