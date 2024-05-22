import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const EditAccountScreen = () =>{
    const navigation = useNavigation()

   


     

    
      

 









    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Edit Your Details</Text>
            </View>
       
           

          </View>


      


        </View>


       

        <View style={{marginTop:20}}>

        <View style={{borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <Image style={{width:20,height:20,marginStart:10}}  source={require('../../assets/editing.png')}/>

        <TextInput placeholder="Enter Your Name" style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}></TextInput>

        </View>
        <View style={{borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <Image style={{width:20,height:20,marginStart:10}}  source={require('../../assets/editing.png')}/>

        <TextInput placeholder="Enter Your Email" style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}></TextInput>

        </View>
        <View style={{borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <Image style={{width:20,height:20,marginStart:10}}  source={require('../../assets/editing.png')}/>

        <TextInput placeholder="Enter Your Phone" style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}></TextInput>

        </View>


        

       





        </View>

     
       
      

       

     
        

       


      


       









        <TouchableWithoutFeedback onPress={()=>{
                
             }}>
              <Text numColumns={2} style={{position:'absolute',alignSelf:'center',bottom:'5%',color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,width:'90%',textAlign:'center',marginStart:3,backgroundColor:Colors.red,padding:10,marginEnd:'3%',borderRadius:10}}>Update Details</Text>

             </TouchableWithoutFeedback>


      

       
 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default EditAccountScreen