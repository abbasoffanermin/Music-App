import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components/Header'
import  Left  from '../../assets/vectors/left.svg'
import  Heart  from '../../assets/vectors/Heart.svg'
import { Card } from '../components/Card'
export const Music = () => {
  return (
    <View>
     <Header title='Ophelia by Steven' left={<Left/>} right={<Heart />} />
     <Card style={styles.card} horizontal={false} size='max' 
     title='Ophelia'
    content='Ophelia by Steven Steven Price'url='https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712448000&semt=sph'
/>
    
    </View>
  )
}



const styles = StyleSheet.create({
card:{
    marginTop:32,
  textAlign:'center',
  gap:28,
  alignItems:'center'
}
})