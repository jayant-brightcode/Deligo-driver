import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const EarningScreen = () =>{
    const navigation = useNavigation()

   


     
 
    const recomneded = [
      { id: 1, title: 'The Reef',image:require('../../assets/item3.jpg') },
      { id: 2, title: 'Soros Bar and Restaurent',image:require('../../assets/item3.jpg') },
      { id: 3, title: 'Biryani Darbar',image:require('../../assets/item3.jpg') },
      { id: 4, title: 'KFC',image:require('../../assets/item3.jpg')},
      { id: 5, title: 'Pizza Hut',image:require('../../assets/item3.jpg') },
      { id: 6, title: 'The oona',image:require('../../assets/item3.jpg') },
 
      // Add more data items as needed
    ];
    
      
const renderProducts = ({item})=>{
       
   return(
     <TouchableWithoutFeedback onPress={()=>{
       navigation.navigate("OrderDetailScreen")
 
     }}>
           <View style={{width:'90%',height:200,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>
 
 
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
               <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistbold',fontSize:13,marginStart:3,marginTop:3}}>Earned Amount - ₹23 </Text>
               <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistbold',fontSize:13,marginStart:3,marginTop:3}}>Tips Recieved - ₹23</Text>

               <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistbold',fontSize:13,marginStart:3,marginTop:3}}>Incentive Recieved - ₹23</Text>

           
     
                
            
 
          
 
 
 
 
 
          
 
             
             
             
            
             
 
             
 
           </View>
 
         
 
     </TouchableWithoutFeedback>
 
   )
 }

 









    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.dark_blue}/>

        <View style={{height:'7%' ,backgroundColor:Colors.dark_blue}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%',tintColor:Colors.white}}  source={require('../../assets/arrow.png')}/>

       
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.white,width:'90%',textAlign:'center'}}>My Eearnings</Text>
            </View>
          

          </View>


      


        </View>



        

        <View style={{width:'100%',backgroundColor:Colors.dark_blue,height:'30%'}}>
    <View style={{marginStart:20,marginEnd:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{width: 150}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.white}}>Total Earning</Text>
            <Text numberOfLines={1} style={{marginTop:'1%',fontFamily:'urbanistextrabold',fontSize:25,color:Colors.white}}>₹ 10000</Text>
        </View>
        <View style={{width: 150}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.white}}>Available Amount</Text>
            <Text numberOfLines={1} style={{marginTop:'1%',fontFamily:'urbanistextrabold',fontSize:25,color:Colors.white}}>₹ 5000</Text>
        </View>
    </View>

    <View style={{marginStart:20,marginEnd:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{width: 150, marginTop:'3%'}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.white}}>Completed Deliveries</Text>
            <Text numberOfLines={1} style={{marginTop:'1%',fontFamily:'urbanistextrabold',fontSize:25,color:Colors.white}}>500</Text>
        </View>
        <View style={{width: 150}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.white}}>Cancelled Deliveries</Text>
            <Text numberOfLines={1} style={{marginTop:'1%',fontFamily:'urbanistextrabold',fontSize:25,color:Colors.white}}>400</Text>
        </View>
    </View>

    <View style={{marginStart:20,marginEnd:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{width: 150, marginTop:'3%'}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.white}}>Total Tips</Text>
            <Text numberOfLines={1} style={{marginTop:'1%',fontFamily:'urbanistextrabold',fontSize:25,color:Colors.white}}>₹ 500</Text>
        </View>
        <View style={{width: 150}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:16,color:Colors.white}}>Total Incentives</Text>
            <Text numberOfLines={1} style={{marginTop:'1%',fontFamily:'urbanistextrabold',fontSize:25,color:Colors.white}}>₹ 400</Text>
        </View>
    </View>
</View>


       

<View style={{ marginTop: '5%',flex:1 }}>
             <FlatList
      data={recomneded}
      renderItem={renderProducts}
      keyExtractor={(item) => item.id}
         
     
    />
          </View>

     
       
      

       

     
        

       


      


       










      

       
 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default EarningScreen