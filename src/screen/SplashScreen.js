import { StatusBar, StyleSheet, Text, View ,Image} from "react-native"
import Colors from "../utils/Color";
import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const SplashScreen = ()=>{

    const navigation = useNavigation()


    useEffect(() => {
        // Use a timer to navigate to the SignupScreen after 2 seconds



        

        const timer = setTimeout(() => {
    
       navigation.replace('WelcomeScreen'); // Navigate to the SignupScreen
        

       
              
       //navigation.replace('LoginScreen'); // Navigate to the SignupScreen



        }, 3000); // 2 seconds delay

        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [navigation]); 

  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.dark_green}/>

    <Image style={styles.backgroundImage} source={require('../../assets/splash.jpg')}/>


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
export default SplashScreen
