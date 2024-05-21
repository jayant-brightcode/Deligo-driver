import { StatusBar, StyleSheet, Text, View ,Image, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color";
import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ()=>{

    const navigation = useNavigation()


  

  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.brown}/>

    <Image style={styles.backgroundImage} source={require('../../assets/welcom.jpg')}/>

    <Text style={{fontFamily:'urbanistextrabold',fontSize:26,color:Colors.textcolor,marginStart:10,marginTop:20}}>Work with us and {'\n'}grow your career!</Text>

     <View style={{width:'94%',alignSelf:'center',position:'absolute',bottom:10,backgroundColor:Colors.dark_green,padding:10,borderRadius:10}}>
        <TouchableWithoutFeedback onPress={()=>{
                navigation.navigate("LoginScreen")
        }} style={{width:'100%'}}>
            <Text style={{color:Colors.white,fontFamily:'urbanistmedium',textAlign:'center'}} >GET STARTED</Text>
        </TouchableWithoutFeedback>

     </View>


    </View>
    


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: 200,
        height: 200,
    },
});
export default WelcomeScreen
