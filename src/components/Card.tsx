import { Image, StyleProp, StyleSheet, Text, Touchable, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors/colors'

interface ICard{
    title?:string,
    url:string,
    content?:string,
    desc?:string,
    email?:string,
    horizontal:boolean,
    size:'s'|'m'|'l'|'max',
    item?:boolean,
    style?:StyleProp<ViewStyle>
}
export const Card:React.FC<ICard> = ({title,url,content,desc,horizontal=false,size,style,email=null,item=false}) => {

  return (
    
   <TouchableOpacity >
  
 
  <View  style={[horizontal?styles.horizontal:styles.root,size=='s' ?{marginBottom:16,gap:15,alignItems:'center'}:null,style]}>
  <Image  style={[horizontal?styles.horizontal:null,styles[size],{borderRadius:8}]} source={{uri:url}}/>
  
  <View>
  <Text style={[styles.title,size=='s' ?{fontSize:17,marginBottom:5}:{fontSize:14},{textAlign:'center'}, size=='max' ?{marginBottom:7}:null,email?{textAlign:undefined}:null ]}>{title}</Text>
  <Text style={styles.email}>{email}</Text>
   <Text style={email?styles.email:styles.content}>{content}</Text>
   <Text style={email?styles.email:styles.desc}>{desc}</Text>
  </View>
  </View>



  



   
   </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    root:{
        
        marginRight:20,
        marginTop:18,
        flexDirection:'column',
        gap:6
    },
   m:{
        width:101,
        height:81
    },
    max:{
        width:304,
        height:319
    },
    l:{
        width:106,
        height:111
    },
    s:{
        width:88,
        height:88
    },
    title:{
        color:Colors.secondary,
        alignItems:'center',
        
        fontSize:14
    },
    horizontal:{
        flexDirection:'row',
        gap:15
    },
    content:{
        fontSize:13,
        color:Colors.white,
    },
    desc:{

        fontSize:13,
        color:Colors.grey
    },
    email:{
   marginTop:5,
        fontSize:13,
        color:Colors.lightGrey
    }
})