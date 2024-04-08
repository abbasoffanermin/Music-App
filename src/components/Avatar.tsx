import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors/colors'

interface IAvatar{
    url?:string,
    name:string,
    content?:string
}
 export const Avatar:React.FC<IAvatar> = ({url,name,content}) => {
  return (
    <View style={styles.container}>
  {url?  <Image style={styles.image} source={{uri:url}} />:null}
  <View>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
    </View>
  )
}


const styles = StyleSheet.create({
  image:{
    
    width:40,
    height:40,
    borderRadius:25
  },
  container:{
    flexDirection:'row',
    alignItems:'center',
    gap:12,
    marginTop:10
  },
  text:{
    
    fontSize:18,
    color:Colors.secondary
  },
  content:{
    color:Colors.white,

  }
})