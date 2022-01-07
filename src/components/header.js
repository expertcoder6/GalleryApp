import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {  useNavigation } from '@react-navigation/native' 
const Header =({title,onPress,noBack,noAdd})=>{
    const navigation = useNavigation()
    return(
        <View style={{paddingHorizontal:10,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'lightblue',height:50}}>
             {!noBack?
             <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{marginLeft:5}}>
             <Text style={{fontSize:30}}>
                 {"<"}
             </Text>
         </TouchableOpacity>
             :<Text></Text>}
             
            <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>{title}</Text>
            {!noAdd?
            <TouchableOpacity onPress={onPress} style={{marginRight:5}}>
            <Text style={{fontSize:30}}>
                +
            </Text>
        </TouchableOpacity>
            :<Text></Text>}
            
        </View>
    )
}
export default Header