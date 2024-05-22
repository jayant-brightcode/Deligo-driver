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
import OrderPickupScreen from '../screen/OrderPickup';
import CustomerDirectionScreen from '../screen/CustomerDirectionScreen';
import VerifyDeliveryOtpScreen from '../screen/VerifyDeliveryOtp';
import DeliverProductScreen from '../screen/DeliverProduct';
import AccountScreen from '../screen/AccountScreen';
import OrderHistoryScreen from '../screen/OrderHistory';
import NotificationScreen from '../screen/NotificationScreen';
import EarningScreen from '../screen/EarningScreen';
import ReviewAndRatingScreen from '../screen/ReviewAndRating';
import EditAccountScreen from '../screen/EditAccountScreen';



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
               <Stack.Screen name="OrderPickupScreen" component={OrderPickupScreen}/>
               <Stack.Screen name="CustomerDirectionScreen" component={CustomerDirectionScreen}/>
               <Stack.Screen name="VerifyDeliveryOtpScreen" component={VerifyDeliveryOtpScreen}/>
               <Stack.Screen name="DeliverProductScreen" component={DeliverProductScreen}/>
               <Stack.Screen name="AccountScreen" component={AccountScreen}/>
               <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen}/>
               <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
               <Stack.Screen name="EarningScreen" component={EarningScreen}/>
               <Stack.Screen name="ReviewAndRatingScreen" component={ReviewAndRatingScreen}/>

               <Stack.Screen name="EditAccountScreen" component={EditAccountScreen}/>


            </Stack.Navigator>
        
        </NavigationContainer>
    );
};

export default AppNavigator;
