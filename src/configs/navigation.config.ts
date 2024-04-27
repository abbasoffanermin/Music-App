import { StyleProp, StyleSheet, ViewStyle } from "react-native"
import { Colors } from "../../assets/colors/colors"
import {  NativeStackNavigationOptions } from "@react-navigation/native-stack/lib/typescript/src/types"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
      },
      
})
export const MainNavigationConfig:NativeStackNavigationOptions= {
    headerShown:false,
    orientation:'default',
    contentStyle:styles.container,
    animation:'simple_push'
}
export const tabstyles:BottomTabNavigationOptions ={
    headerShown:false,
    tabBarStyle:{backgroundColor:Colors.bg, height:60, alignContent:'center',justifyContent:'center',padding:10,borderRadius:20,shadowColor:Colors.white,shadowOffset: { width: 3, height: 10,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,},
    tabBarShowLabel:false,
  
   tabBarItemStyle:{height:50},
    tabBarActiveTintColor:Colors.primary,
    tabBarInactiveTintColor:Colors.white,
}
