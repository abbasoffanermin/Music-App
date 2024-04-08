import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Home from '../../assets/vectors/Home.svg'
import Music from '../../assets/vectors/Music.svg'
import Heart from '../../assets/vectors/Heart.svg'
import Map from '../../assets/vectors/Map.svg'
import { Colors } from '../../assets/colors/colors'
import * as NavigationBar from 'expo-navigation-bar';
export const Navbar = () => {
    NavigationBar.setPositionAsync('relative');
  return (
   
    
   <View style={styles.bg}>

     <View style={styles.container}>
   <TouchableOpacity>
   <Home/>
   </TouchableOpacity>
   <TouchableOpacity>
   <Music/>
   </TouchableOpacity>
   <TouchableOpacity>
   <Heart/>
   </TouchableOpacity>
   <TouchableOpacity>
   <Map/>
   </TouchableOpacity>
    
   </View>

   </View>
  )
}



const styles = StyleSheet.create({
    container:{
       
        marginTop:30,
        paddingHorizontal:57,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:58
    },
    bg:{
        
      marginLeft:20,
       alignItems:'center',
        width:335,
        height:85,
        backgroundColor:Colors.bg,
        
       borderTopLeftRadius:40,
       borderTopRightRadius:40,
    shadowColor: 'white', 
    shadowOffset: {
      width: 200,
      height: 200,

    },
    shadowOpacity: 50, 
    shadowRadius: 9, 
   elevation: 40,
    }

})