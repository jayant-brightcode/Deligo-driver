import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../utils/Color';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';

import BottomSheet, { BottomSheetView,BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';

const DeliverProductScreen = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);

  const recomneded = [
    { id: 1, title: 'Fruits & Vegetables',image:require('../../assets/item3.jpg') },
    { id: 2, title: 'Bakery, Cakes & Diary',image:require('../../assets/item3.jpg') },
    { id: 3, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item3.jpg') },
    { id: 4, title: 'Aata Rice & Dals',image:require('../../assets/item3.jpg')},
    { id: 5, title: 'Fruits & Vegetables',image:require('../../assets/item3.jpg') },
    { id: 6, title: 'Bakery, Cakes & Diary',image:require('../../assets/item3.jpg') },
    { id: 7, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item3.jpg') },
    { id: 8, title: 'Aata Rice & Dals',image:require('../../assets/item3.jpg')},
    // Add more data items as needed
  ];
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if(index==0){
      StatusBar.setBackgroundColor(Colors.light_green); 
    }
  }, []);
  const openBottomSheet = () => {
    StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.8)'); 
    bottomSheetRef.current.expand();
  };



  const closeBottomSheet = () => {
    bottomSheetRef.current.collapse();
  };

  const renderPackSizeItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedPackSize(item.id === selectedPackSize ? null : item.id)}
      style={{
        borderColor: selectedPackSize === item.id ? Colors.dark_green : Colors.grayview,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
      
        backgroundColor: selectedPackSize === item.id ? Colors.light_green : 'white',
      }}
    >
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View>
        <Text style={{  color: selectedPackSize === item.id ? Colors.black : 'black',fontFamily:'urbanistbold' }}>{item.size}</Text>
  
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:7}}>
               <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
               
  
  
               </View>
        </View>
  
        {/* <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10,marginStart:'3%'}}>
              <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
              <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.red,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
              <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>
  
  
              </View> */}
      
           
       </View>
  
  
    </TouchableOpacity>
  );

  const renderPackSizeItem2 = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedPackSize(item.id === selectedPackSize ? null : item.id)}
      style={{
        borderColor: selectedPackSize === item.id ? Colors.dark_green : Colors.grayview,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
      
        backgroundColor: selectedPackSize === item.id ? Colors.light_green : 'white',
      }}
    >
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View>

         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Image style={{ width: 16, height: 16}} source={require('../../assets/nonveg.png')}></Image>
         <Text style={{  color: selectedPackSize === item.id ? Colors.black : 'black',fontFamily:'urbanistbold' ,marginStart:10}}>{item.size}</Text>

          </View> 
  
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:7}}>
               <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
               
  
  
               </View>
        </View>
  
      
           
       </View>
  
  
    </TouchableOpacity>
  );

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        opacity={0.8}
        style={{ backgroundColor: 'transparent' }}
        onPress={() => console.log('pressed')}
        {...props}
      />
    ),
    [],
  )
  const [selectedPackSize, setSelectedPackSize] = useState(null);

  const packSizes = [
    {id: 1, size: 'Small'},
    {id: 2, size: 'Medium'},
    {id: 3, size: 'Large'},
  ];

  const packSizes2 = [
    {id: 1, size: 'Gulab Jamun'},
    {id: 2, size: 'Double Ka Meetha'},
    {id: 3, size: 'Ice cream'},
  ];

  const RatingList = [
    { id: 1, title: 'Snacks',image:require('../../assets/snacks.png') },
    { id: 2, title: 'Makeup',image:require('../../assets/makeup.png') },
    { id: 3, title: 'Ice-Creams',image:require('../../assets/ice.png') },
    { id: 4, title: 'Fruits',image:require('../../assets/fruit.png')},
    // Add more data items as needed
  ];

  useEffect(() => {
    // Fetch or set pack sizes data

    // Select the first pack size by default
    setSelectedPackSize(packSizes[0]?.id);
  }, []);



  const renderProducts = ({item})=>{
       
    return(
      <TouchableWithoutFeedback onPress={()=>{
      //    navigation.navigate("FProductDetailScreen")
  
      }}>
            <View style={{width:'95%',height:40,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>
  
  
            <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,width:'100%',justifyContent:'space-between'}}>
  
                <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
                <Image style={{width:20,height:20,marginTop:2,marginStart:2}}  source={require('../../assets/nonveg.png')}/>
  
  <Text numberOfLines={2} style={{color:Colors.black,fontFamily:'urbanistbold',marginStart:8}}>Chicken Biryani</Text>

  <Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistbold'}}>  -  ₹ 33</Text>   
  
                </View>
           
           </View>
  
  
             <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
      
             
          
              </View>         
            </View>
      </TouchableWithoutFeedback>
  
    )
  }
  

  return (
    <GestureHandlerRootView style={style.container}>
      <StatusBar backgroundColor={Colors.white} />

      <View style={{height: '7%', backgroundColor: Colors.white}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: 30, height: 20, marginStart: '4%'}}
            source={require('../../assets/arrow.png')}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '88%',
              height: '100%',
              padding: '3',
            }}>
            <View
              style={{
                marginTop: '3%',
                height: 40,
               
                width: '95%',
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                backgroundColor: Colors.white,
              }}>
              

              <Text
                style={{marginStart: '3%', fontFamily: 'urbanistmedium',fontSize:20,color:Colors.black}}>Pickup Details</Text>
               
            
            </View>
          </View>

        
               
        </View>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 13}}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'urbanistbold',
            color: Colors.textcolor,
            letterSpacing: 3,
          }}>
          SEASON RESTAURANTS
        </Text>
        <Text
          numColumns={2}
          style={{
            color: Colors.navcolor,
            fontFamily: 'urbanistmedium',
            fontSize: 12,
            marginStart: 3,
            marginTop: 7,
          }}>
          BURGER • FAST FOOD • BIRYANI
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


      <View style={{width:'94%',alignSelf:'center',marginTop:5,height:1,borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dashed'}}>

</View>
               <Text
                style={{marginTop: '3%', fontFamily: 'urbanistextraregular',fontSize:15,color:Colors.textcolor,alignSelf:'center'}}>DELEVIERING TO - Rakesh Kumar</Text>
                 
                 <Text
                style={{marginTop: 3, fontFamily: 'urbanistextraregular',fontSize:13,color:Colors.textcolor,alignSelf:'center'}}>Ratu road ranchi - road number 8</Text>
                 
      <View>
        
  
        <View
        style={{justifyContent: 'space-between',marginStart:20, marginTop: 25,flexDirection:'row',alignItems:'center',backgroundColor:Colors.altra_gray}}>
        <Text
          style={{
            fontSize: 17,

            fontFamily: 'urbanistbold',
            color: Colors.textcolor,
            letterSpacing: 3,
          }}>
          Item Details - <Text style={{letterSpacing:0,color:Colors.dark_green}}>4 items</Text>
        </Text>
  
        </View>  
  
      </View>
      <View style={{ alignItems: 'center',marginTop:14,height:240 }}>
      <View style={{marginStart:'2%',marginTop:'5%'}}>
            <FlatList
            data={RatingList}
            renderItem={renderProducts}
            keyExtractor={(item) => item.id.toString()}
          
            showsHorizontalScrollIndicator={false}
          />
        </View>
                 </View>



                 <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:Colors.altra_gray,width:'94%',alignSelf:'center',padding:20}}>
          <Image style={{width:20,height:20}}  source={require('../../assets/clock.png')}/>

          <Text style={{color:Colors.textcolor,marginStart:10,fontFamily:'urbanistbold'}}>Delivery in 45 mins</Text>
         

         </View>
         <View style={{width:'94%',alignSelf:'center',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dashed'}}>

          </View>
          <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:Colors.altra_gray,width:'94%',alignSelf:'center',padding:20}}>
                    <Image style={{width:20,height:20}}  source={require('../../assets/clock.png')}/>

          <Text style={{color:Colors.textcolor,marginStart:10,fontFamily:'urbanistmedium'}}>Total Bill <Text style={{marginStart:10,fontFamily:'urbanistbold'}}>    ₹ 3500</Text> <Text style={{color:Colors.dark_green}}></Text>     </Text>
         
      
         </View>
         <View style={{width:'94%',alignSelf:'center',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dashed'}}>

</View>
         <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:Colors.altra_gray,width:'94%',alignSelf:'center',padding:20}}>
                    <Image style={{width:20,height:20}}  source={require('../../assets/clock.png')}/>

          <Text style={{color:Colors.textcolor,marginStart:10,fontFamily:'urbanistmedium'}}>Online Payment <Text style={{marginStart:10,fontFamily:'urbanistbold'}}>    ₹ 3500</Text> <Text style={{color:Colors.dark_green}}>Paid</Text>     </Text>
         
      
         </View>
        <Text
                style={{marginTop: '3%', fontFamily: 'urbanistextrabold',fontSize:15,color:Colors.textcolor,alignSelf:'center'}}>ORDER NUMBER - DLG7867668989</Text>
                   <View style={{width:'94%',alignSelf:'center',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dashed'}}>

</View>



             
              
      <View style={{position:'absolute',bottom:10,width:'90%',alignSelf:'center',alignItems:'center'}}>

      <Text
                style={{marginTop: '3%', fontFamily: 'urbanistregular',fontSize:12,color:Colors.red,alignSelf:'center'}}>*Make sure to manually verify all the items before mark as delivered</Text>
            
<SwipeButton
      containerStyles={{borderRadius: 5,width:'100%'}}
      height={30}
      onSwipeFail={() => {

      }}
      onSwipeStart={() =>{

      } }
      onSwipeSuccess={() =>
       {
         navigation.navigate("OrderHistoryScreen")
       }
      }
      railBackgroundColor={Colors.dark_gray}
      railStyles={{borderRadius: 5}}
      title="Mark as Delivered"
    />

</View>

     
             
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default DeliverProductScreen;
