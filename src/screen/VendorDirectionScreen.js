import React ,{useEffect,useState,useRef}from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service'

import Colors from "../utils/Color";

const VendorDirectionScreen =() =>{

     const navigation = useNavigation()
    
    
      const [markerPosition, setMarkerPosition] = useState(null);

      const history = [{
        id:1,
        name:"Road Number 9",
        address:"Ratu road, Ranchi Jharkhand , India 822229"
      },
      {
        id:2,
        name:"Road Number 9",
        address:"Ratu road, Ranchi Jharkhand , India 822229"
      },
      {
        id:3,
        name:"Road Number 9",
        address:"Ratu road, Ranchi Jharkhand , India 822229"
      }
    
    ]


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

           
           <View style={{flexDirection:'row',position:'absolute',top:0,margin:10}}>
                <View style={{borderRadius:2,width:40,height:40,backgroundColor:Colors.white,elevation:2,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>{
                    navigation.navigate("MenuScreen")
                  }}>
                  {/* <Image style={{width:26,height:26,tintColor:Colors.light_gray}} source={require('../../assets/menu.png')}></Image> */}

                  </TouchableOpacity>

                </View>
                <View style={{borderRadius:10,marginStart:15,width:'77%',backgroundColor:Colors.white,elevation:2,justifyContent:'center'}}>
                <TextInput style={{padding:10}} placeholder="My Current Location"></TextInput>  
                
                </View>
              

            </View>



           
         
            <View style={{borderRadius:10,marginStart:15,width:'90%',backgroundColor:Colors.white,elevation:2,justifyContent:'center',marginTop:'6%'}}>
              <TouchableOpacity onPress={()=>{
                navigation.navigate("ChooseRideLocationScreen")
              }}>
                <Text style={{padding:14,color:Colors.black}}>Where are you going?</Text>  
              </TouchableOpacity>
     
                
            </View>

            <FlatList
            style={{flex:null,marginTop:10,backgroundColor:Colors.white,height:100}}
      
        data={history}
        keyExtractor={(section) => section.id}
        renderItem={({ item }) => (
            <View style={{flexDirection:'row',width:'90%',alignSelf:'center',marginBottom:10,alignItems:'center'}}>

                {/* <Image style={{width:20,height:20}} source={require('../../assets/location_hist.png')}></Image> */}

                <View style={{marginStart:10,padding:7}}>
                    <Text style={{color:Colors.black,fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{fontWeight:'400'}}>{item.address}</Text>
               </View>
               
            </View>
        )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
              
        
           
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
        height:'60%',
       
    },
});



export default VendorDirectionScreen