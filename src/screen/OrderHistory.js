import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView, TouchableWithoutFeedback, Animated, Easing, Dimensions, PermissionsAndroid, Platform} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SwipeButton from 'rn-swipe-button';



const OrderHistoryScreen = () =>{
    const navigation = useNavigation()
    const [status, setStatus] = useState('Offline');

    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, 64);
    const translateY = diffClamp.interpolate({
      inputRange: [0, 64],
      outputRange: [0, 64],
    });
    const [navVisible, setNavVisible] = useState(true);

    const handleSwipeSuccess = () => {
        setStatus((prevStatus) => (prevStatus === 'Offline' ? 'Online' : 'Offline'));
      };



      useEffect(() => {
         requestLocationPermission()
      }, []);

    
    const yourDataArray = [
        { id: 1, title: 'Biryani',image:require('../../assets/biryani.jpg') },
        { id: 2, title: 'Cakes',image:require('../../assets/pizza.png') },
        { id: 3, title: 'Thali',image:require('../../assets/thali.png') },
        { id: 4, title: 'Chiken Kadai',image:require('../../assets/pizza.png')},
        { id: 3, title: 'Chole & Bhature',image:require('../../assets/biryani.jpg') },
        { id: 5, title: 'Ice-Creams',image:require('../../assets/thali.png')},
        { id: 6, title: 'Pani Puri',image:require('../../assets/pizza.png') },
        { id: 7, title: 'Mutton Biryani',image:require('../../assets/biryani.jpg')},
        // Add more data items as needed
      ];

    
    
      const recomneded = [
        { id: 1, title: 'The Reef',image:require('../../assets/item3.jpg') },
        { id: 2, title: 'Soros Bar and Restaurent',image:require('../../assets/item3.jpg') },
        { id: 3, title: 'Biryani Darbar',image:require('../../assets/item3.jpg') },
        { id: 4, title: 'KFC',image:require('../../assets/item3.jpg')},
        { id: 5, title: 'Pizza Hut',image:require('../../assets/item3.jpg') },
        { id: 6, title: 'The oona',image:require('../../assets/item3.jpg') },
   
        // Add more data items as needed
      ];
         

    

      const category = [
        { id: 1, title: 'Fruits & Vegetables',image:require('../../assets/item1.jpg') },
        { id: 2, title: 'Bakery, Cakes & Diary',image:require('../../assets/item2.jpg') },
        { id: 3, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item3.jpg') },
        { id: 4, title: 'Aata Rice & Dals',image:require('../../assets/item2.jpg')},
        { id: 5, title: 'Fruits & Vegetables',image:require('../../assets/item3.jpg') },
        { id: 6, title: 'Bakery, Cakes & Diary',image:require('../../assets/item1.jpg') },
        { id: 7, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item2.jpg') },
        { id: 8, title: 'Aata Rice & Dals',image:require('../../assets/item3.jpg')},
        
        // Add more data items as needed
      ];

      const bannerList = [
        { id: 1, image: '../../assets/fish03.jpg' },
        { id: 2, image: '../../assets/mutton04.jpg' }
      
        // Add more data items as needed
      ];


      const requestLocationPermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                   );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //getLocation();
                     
                    
                } else {
                   
                    requestLocationPermission();
                }
            } 
        } catch (err) {
           requestLocationPermission()
        }
    };

    const renderDemandedItems = ({item})=>{
       
        return(
          <TouchableWithoutFeedback onPress={()=>{
             
             navigation.navigate("FoodSearchScreen")
          }}>
                <View>
                <View style={{ width: 100, height: 100, marginStart: 10 ,backgroundColor:Colors.altra_light_purple,paddingTop:'5%',borderRadius:500,alignItems:'center',justifyContent:'center'}}>

                <Image style={{ width: 60, height: 60,borderRadius:100 }} source={item.image}></Image>

                </View>
                                    <Text numberOfLines={1} style={{ alignSelf: 'center' ,textAlign:'center',fontFamily:'urbanistbold'} }>{item.title}</Text>

                </View>

              

          </TouchableWithoutFeedback>
    
        )
  }

  const renderCategory = ({item})=>{
       
    return(
      <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate("RestaurentDetails")

      }}>
            <View style={{width:Dimensions.get('window').width-20,height:345,marginTop:10,marginStart:10,marginEnd:10,marginBottom:1,backgroundColor:Colors.white,elevation:2,borderRadius:10}}>
             
          
            <Image style={{ width: '100%', height:230,resizeMode:'cover',alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10}} source={item.image}></Image>

            <View style={{width:'93%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center'}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistbold',fontSize:18,color:Colors.textcolor}}>Season Restaurent</Text>

            <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.dark_green,justifyContent:'center',borderRadius:5}}>
              <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.white}}  source={require('../../assets/star.png')}/>

            <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

              </View>
            </View>

             <View style={{width:'93%',alignSelf:'center'}}>
             <Text numberOfLines={1} style={{fontFamily:'urbanistregular',fontSize:14,color:Colors.navcolor}}>North Indian  • Chinese  • ₹ 200 for one</Text>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
             <Image style={{ width: 14, height: 14}} source={require('../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:10,marginStart:3}}>70 Mins  • 3 KM</Text>
          
             </View>
             <View style={{height:1,marginTop:6,width:'100%',borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dotted'}}>

</View>
<Text numberOfLines={1} style={{fontFamily:'urbanistbold',fontSize:14,color:Colors.dark_blue,marginTop:4}}>FLAT 20% OFF</Text>


             </View>
              
            </View>

          

      </TouchableWithoutFeedback>

    )
}


const renderRest = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("RestaurentDetails")

    }}>
          <View style={{width:180,height:300,marginTop:10,marginStart:10,marginEnd:10,marginBottom:1,backgroundColor:Colors.white,elevation:2,borderRadius:10}}>
           
        
          <Image style={{ width: '100%', height:180,resizeMode:'cover',alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10}} source={item.image}></Image>

          <View style={{width:180,flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center',marginStart:3,marginEnd:3}}>
          <Text numberOfLines={2} style={{marginTop:'3%',fontFamily:'urbanistbold',fontSize:15,color:Colors.textcolor,width:120,marginStart:3}}>Fresh Chakki Aaata</Text>

          <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.dark_green,justifyContent:'center',borderRadius:5,marginEnd:3}}>
            <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.white}}  source={require('../../assets/star.png')}/>

          <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

            </View>
          </View>

           <View style={{width:'93%',alignSelf:'center'}}>
           <Text numberOfLines={1} style={{fontFamily:'urbanistregular',fontSize:14,color:Colors.navcolor}}>₹ 200 for one</Text>
           <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
           <Image style={{ width: 14, height: 14}} source={require('../../assets/clock.png')}></Image>
           <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:10,marginStart:3}}>70 Mins  • 3 KM</Text>
        
           </View>
           <View style={{height:1,marginTop:6,width:'100%',borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dotted'}}>

</View>
<Text numberOfLines={1} style={{fontFamily:'urbanistbold',fontSize:14,color:Colors.dark_blue,marginTop:4}}>FLAT 20% OFF</Text>


           </View>
            
          </View>

        

    </TouchableWithoutFeedback>

  )
}


const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("OrderDetailScreen")

    }}>
          <View style={{width:'90%',height:140,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 70, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={item.image}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}>
  

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistmedium',fontSize:13}}>Chicken Biryani</Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13}}>QTY - 2</Text>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>ORDER ID - DLG689696</Text>
            
            
             </View>
             
             </View>

             
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
              <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistregular',fontSize:13,marginStart:3}}>5 nov 2027  7:23 pm</Text>

              </View>
          
          
          
    
               
           

         





         

            
            
            
           
            

            

          </View>

        

    </TouchableWithoutFeedback>

  )
}




    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>
       
            
          
      

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


  <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>



  <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

  <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
  <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Order History</Text>
  </View>


</View>





</View>

  
      
        



        <FlatList
  data={[
    { type: 'header', id: 'header' },
    {type:'recommended',id:'recommended'}

  ]}
  renderItem={({ item }) => {
    switch (item.type) {
      case 'header':
        return (
          <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>ORDER HISTORY</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>
        );
      case 'recommended':
        return (

       
<View style={{ marginTop: '5%' }}>
             <FlatList
      data={recomneded}
      renderItem={renderProducts}
      keyExtractor={(item) => item.id}
         
     
    />
          </View>


         
        );
    
    
      default:
        return null;
    }
  }}
  keyExtractor={(item) => item.id}
  onScroll={e => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  }}
  showsVerticalScrollIndicator={false}

/>

         {/* navigation */}
        
     

    

        

    </View>



}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    statusText: {
        fontSize: 24,
        marginBottom: 20,
      },
      swipeButton: {
        width: '80%',
        height: 60,
      },


})

export default OrderHistoryScreen