import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator ,TransitionSpecs } from '@react-navigation/native-stack';

import NavigationService from './NavigationService';
import SplashScreen from '../screen/SplashScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';
import UploadDocumentScreen from '../screen/UploadDocumentScreen';
import UploadVehicleDocumennt from '../screen/UploadVehicleDocument';
import HomeScreen from '../screen/HomeScreen';
import OrderDetailScreen from '../screen/OrderDetail';
import VendorDirectionScreen from '../screen/VendorDirectionScreen';



const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef); }}>

            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          animation: 'slide_from_right', //<-- this is what will do the trick
          presentation: 'card',
          headerShown:false
        }}>
               <Stack.Screen name="SplashScreen" component={SplashScreen}/>
               <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
               <Stack.Screen name="LoginScreen" component={LoginScreen}/>
               <Stack.Screen name="UploadDocumentScreen" component={UploadDocumentScreen}/>

               <Stack.Screen name="UploadVehicleDocumentScreen" component={UploadVehicleDocumennt}/>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
               <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen}/>
               <Stack.Screen name="VendorDirectionScreen" component={VendorDirectionScreen}/>


            </Stack.Navigator>
        
        </NavigationContainer>
    );
};

export default AppNavigator;
