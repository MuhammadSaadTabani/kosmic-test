// In App.js in a new project

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './AuthRoutes';
import { StatusBar } from 'react-native';
import { colors } from '../assets/colors';
import MainRoutes from './MainRoutes';
import { isReadyRef, navigationRef } from '../navigation';

const Stack = createNativeStackNavigator();

const Routes = () =>  {


  return (
    <>
        <StatusBar barStyle={"light-content"} translucent backgroundColor={'transparent'}/>
        <NavigationContainer 
          ref={navigationRef}
          theme={{colors: {background: colors.background}}}
          onReady={() => {
              isReadyRef.current = true;
          }}
        >
          <Stack.Navigator screenOptions={{headerShown: false}}>
              {/* <Stack.Screen 
                name="AuthRoutes" 
                component={AuthRoutes}
              /> */}
              <Stack.Screen 
                name="MainRoutes" 
                component={MainRoutes} 
                options={{
                  // animation: 'slide_from_right',
                }} 
              />
              
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

export default Routes
