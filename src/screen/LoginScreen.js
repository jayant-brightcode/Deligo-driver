import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";

import BottomSheet, { BottomSheetView,BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const LoginScreen = () =>{
    const navigation = useNavigation()
  
   




    return <GestureHandlerRootView style={style.container}>

        <StatusBar backgroundColor={Colors.black}/>


        <View style={{alignItems:'center'}}>

          <Image style={{width:'40%',height:60,marginTop:'10%'}} source={require('../../assets/logotwo.png')}/>
          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,letterSpacing:1}}>DELIEVERY PARTNER</Text>


          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:21,letterSpacing:1,marginTop:'10%'}}>Sign in to your account</Text>

          <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',textAlign:'center',fontSize:14,marginTop:'1%',width:'100%'}}>Login or create an account</Text>

           <TextInput maxLength={10} keyboardType="decimal-pad" style={{marginTop:'10%',width:'90%',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:Colors.dark_gray,paddingStart:10}} placeholder="Enter mobile number"></TextInput>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',marginStart:'10%',fontSize:14,marginTop:'1%',width:'100%',color:Colors.navcolor}}>Enter valid 10 digit mobile number</Text>



        

        </View>

    



        <View style={{position:'absolute',bottom:10,width:'90%',alignSelf:'center',alignItems:'center'}}>


            <TouchableOpacity style={{width:'100%'}} onPress={()=>{
              navigation.navigate("UploadDocumentScreen")
            }}>
   <Text style={{backgroundColor:Colors.dark_blue,width:'100%',padding:10,borderRadius:10,textAlign:'center',color:Colors.white}}>CONTINUE</Text>
            </TouchableOpacity>
        
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',textAlign:'center',fontSize:14,width:'100%',marginTop:'2%'}}>By continiuing your are agree to our 
            
              <Text style={{color:Colors.dark_blue,fontFamily:'urbanistregular',}}> Terms of Services</Text>
            </Text>

          </View>




  
    </GestureHandlerRootView>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default LoginScreen