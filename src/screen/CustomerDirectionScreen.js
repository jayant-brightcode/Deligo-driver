import React ,{useEffect,useState,useRef}from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service'
import SwipeButton from 'rn-swipe-button';

import Colors from "../utils/Color";

const CustomerDirectionScreen =() =>{

     const navigation = useNavigation()
    
    
     


      const [currentRegion, setCurrentRegion] = useState(null);
      const mapRef = useRef(null);
     // Define your custom map style JSON object
     const customMapStyle = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            { visibility: 'off' }, // Hide all map features
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            { visibility: 'on',
              
        }, // Show only roads
          ],
        },
        {
            featureType: 'landscape',
            elementType: 'geometry.fill',
            stylers: [
              { visibility: 'on' ,color: '#F5F5F4' }, // Change the color of the land
            ],
          },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            { visibility: 'on' }, // Show road labels
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            { visibility: 'on' }, // Show point of interest labels (place names)
            { color: Colors.red } // Change the color of place labels (text fill)
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            { visibility: 'off' } // Hide icons for place labels
          ]
        },
        
      ];
      
      
      useEffect(() => {
        // Get the current device location
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude)
            setCurrentRegion({
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          },
          (error) => {
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      }, []);
    
      useEffect(() => {
        if (currentRegion && mapRef.current) {
          // Zoom to the current location when currentRegion is set
          mapRef.current.animateToRegion(currentRegion, 1000);
        }
      }, [currentRegion]);
    
      const onMapPress = (e) => {
        // Update marker position when the map is pressed
    
        setMarkerPosition(e.nativeEvent.coordinate);
      };

     return(

         <View style={styles.container}>
             <StatusBar backgroundColor={Colors.snow} />
            




           <MapView
        style={styles.map}
        initialRegion={currentRegion}
        mapType="standard"
        onPress={onMapPress}
        providerProps={{
            apiKey: 'AIzaSyA4d6_D7yrcGAgSSHNpR7DbG-o-l955TPw',
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        customMapStyle={customMapStyle}
        paddingAdjustmentBehavior="automatic"

      >
        {/* Display user's current location with a marker */}
        {/* {markerPosition && <Marker coordinate={markerPosition}   image={require('../../assets/markers.png')} title="Current Location"/> } */}
           </MapView>

           



           
         
      <View style={{position:'absolute',bottom:10,width:'90%',alignSelf:'center',alignItems:'center'}}>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 13,marginBottom:20}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'urbanistbold',
            color: Colors.textcolor,
            letterSpacing: 3,
          }}>
          RAKESH KUMAR
        </Text>

        <Text style={{padding:8,backgroundColor:Colors.dark_blue,color:Colors.white,fontFamily:'urbanistmedium',borderRadius:8,marginStart:10}}>Call Rakesh</Text>

        </View>
       
    
        <Text
          numColumns={2}
          style={{
            color: Colors.navcolor,
            fontFamily: 'urbanistmedium',
            fontSize: 14,
            marginStart: 3,
            marginTop: 7,
          }}>
          Ratu road , road number 9 , blue apratment , black gate
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center',marginTop:5}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 3,
              backgroundColor: Colors.dark_green,
              justifyContent: 'center',
              borderRadius: 5,
              marginEnd: 3,
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                marginStart: '4%',
                marginTop: '2%',
                marginEnd: '4',
                marginEnd: '4%',
                tintColor: Colors.white,
              }}
              source={require('../../assets/star.png')}
            />

            <Text
              numColumns={2}
              style={{
                color: Colors.white,
                fontFamily: 'urbanistbold',
                fontSize: 13,
                marginStart: 3,
              }}>
              4.5
            </Text>
          </View>

          <View>
          <Text
          style={{
            fontSize: 14,
            fontFamily: 'urbanistmedium',
            color: Colors.textcolor,
           
          }}>
          18.2K ratings
        </Text>
          </View>
        </View>

       
       
        
      </View>

      <SwipeButton
            containerStyles={{borderRadius: 5,width:'100%'}}
            height={30}
            onSwipeFail={() => {

            }}
            onSwipeStart={() =>{

            } }
            onSwipeSuccess={() =>
             {
               navigation.navigate("VerifyDeliveryOtpScreen")
             }
            }
            railBackgroundColor={Colors.dark_gray}
            railStyles={{borderRadius: 5}}
            title="Reached at customer location"
          />

</View>
         
         
       
              
        
           
         </View>
        
     ) 

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.snow
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    centeredImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredImage: {
        width: 320,
        height: 130,
    },
    map: {
        height:'70%',
       
    },
});



export default CustomerDirectionScreen