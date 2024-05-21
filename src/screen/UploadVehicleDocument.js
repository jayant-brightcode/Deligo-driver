import React, {useEffect, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Colors from '../utils/Color';

const UploadVehicleDocumennt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.snow} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{width: 33, height: 33, resizeMode: 'center'}}
              source={require('../../assets/arrow.png')}></Image>
          </TouchableOpacity>

          <Text
            style={{
              marginStart: 4,
              fontWeight: '500',
              fontSize: 18,
              fontFamily:'urbanistbold',
              marginStart: 10,
              color: Colors.black,
            }}>
            Upload Vehicle Document
          </Text>
        </View>
      </View>


  



      <View style={{marginStart:20,marginEnd:20,backgroundColor:Colors.white,marginTop:'5%',borderRadius:10,elevation:2,padding:8}}>



        <View>
        <Text
        style={{
          marginStart: 4,
          fontWeight: '700',
          fontSize: 15,
          marginStart: 4,
          marginTop:'2%',
          marginBottom:'2%',
          color: '#1E5060',
        }}>
        FRONT SIDE OF VEHICLE
      </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

            <Image
                  style={{width: '40%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
                  source={require('../../assets/chooseimage.png')}></Image>


                
                  <Image
                  style={{width: '40%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
                  source={require('../../assets/bike.png')}></Image>



              

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text
        style={{
          marginStart: 4,
          fontWeight: '500',
          fontSize: 11,
           marginStart:'10%',
          color: Colors.dark_blue,
        }}>
        Choose Image
      </Text>


                    <Text
        style={{
          marginStart: 4,
          fontWeight: '300',
          fontSize: 11,
          marginEnd:'5%',
        
          color: '#1E5060',
        }}>
        Attach image like this
      </Text>

                    </View>

           
        </View>
       

      </View>


      <View style={{marginStart:20,marginEnd:20,backgroundColor:Colors.white,marginTop:'5%',borderRadius:10,elevation:2,padding:8}}>



<View>
<Text
style={{
  marginStart: 4,
  fontWeight: '700',
  fontSize: 15,
  marginStart: 4,
  marginTop:'2%',
  marginBottom:'2%',
  color: '#1E5060',
}}>
LEFT SIDE OF VEHICLE
</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

    <Image
          style={{width: '40%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../assets/chooseimage.png')}></Image>


        
          <Image
          style={{width: '40%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../assets/bike.png')}></Image>



      

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text
style={{
  marginStart: 4,
  fontWeight: '500',
  fontSize: 11,
   marginStart:'10%',
  color: Colors.dark_blue,
}}>
Choose Image
</Text>


            <Text
style={{
  marginStart: 4,
  fontWeight: '300',
  fontSize: 11,
  marginEnd:'5%',

  color: '#1E5060',
}}>
Attach image like this
</Text>

            </View>

   
</View>


      </View>

      <View style={{marginStart:20,marginEnd:20,backgroundColor:Colors.white,marginTop:'5%',borderRadius:10,elevation:2,padding:8}}>



<View>
<Text
style={{
  marginStart: 4,
  fontWeight: '700',
  fontSize: 15,
  marginStart: 4,
  marginTop:'2%',
  marginBottom:'2%',
  color: '#1E5060',
}}>
BACK SIDE OF VEHICLE
</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

    <Image
          style={{width: '40%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../assets/chooseimage.png')}></Image>


        
          <Image
          style={{width: '40%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../assets/bike.png')}></Image>



      

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text
style={{
  marginStart: 4,
  fontWeight: '500',
  fontSize: 11,
   marginStart:'10%',
  color: Colors.dark_blue,
}}>
Choose Image
</Text>


            <Text
style={{
  marginStart: 4,
  fontWeight: '300',
  fontSize: 11,
  marginEnd:'5%',

  color: '#1E5060',
}}>
Attach image like this
</Text>

            </View>

   
</View>


      </View>


         
      <View style={{position:'absolute',bottom:10,width:'90%',alignSelf:'center',alignItems:'center'}}>


<TouchableOpacity style={{width:'100%'}} onPress={()=>{
  navigation.navigate("HomeScreen")
}}>
<Text style={{backgroundColor:Colors.dark_blue,width:'100%',padding:10,borderRadius:10,textAlign:'center',color:Colors.white}}>CONTINUE</Text>
</TouchableOpacity>



</View>

      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
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
});

export default UploadVehicleDocumennt;
