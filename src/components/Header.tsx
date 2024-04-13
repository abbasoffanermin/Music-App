import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from './Avatar'
import { Colors } from '../../assets/colors/colors'
import RingVector from '../../assets/vectors/Ring.svg'
interface IHeader{
    left:any,
    title?:string,
    right?:React.ReactNode

}
export const Header:React.FC<IHeader> = ( {left,title,right}) => {
  return (
    <View style={[styles.container,title?{gap:5,justifyContent:'space-around'}:null]}>
        {left}
        {title?<Text style={styles.title}>{title}</Text>:null}
         <TouchableOpacity activeOpacity={0.6} hitSlop={12}>
        {right}
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        gap:130,
        justifyContent:"space-between"
      },
      title:{
        fontSize:18,
        fontFamily:"Nunito-Semibold",
        color:Colors.secondary
      }
})