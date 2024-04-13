import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../components/Header'
import  Left  from '../../assets/vectors/left.svg'
import  Heart  from '../../assets/vectors/Heart.svg'
import { Card } from '../components/Card'
import { ProgressBar } from '../components/ProgressBar'
import Shuffle  from '../../assets/vectors/Shuffe.svg'
import Play  from '../../assets/vectors/Play.svg'
import Pause  from '../../assets/vectors/Pause.svg'
import Repeat  from '../../assets/vectors/Repeat.svg'
import SkipBack  from '../../assets/vectors/Skip-back.svg'
import SkipForward  from '../../assets/vectors/Skip-forward.svg'
import { Colors } from '../../assets/colors/colors'
export const Music = () => {
  const [play, setPlay] = useState<boolean>(false);
  
  const oncontroller = () => {
    setPlay(!play)
  }
 
  return (
    <View style={styles.container}>
     <Header title='Ophelia by Steven' left={<Left/>} right={<Heart />} />
     <Card style={styles.card} horizontal={false} size='max' 
     title='Ophelia'
    content='Ophelia by Steven Steven Price' url='https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712448000&semt=sph'
/>
    <ProgressBar time={150} currentTime={90} />
 
<View style={styles.controls}>
<Shuffle color={'#fff'}/>
    <SkipBack color={'#fff'}/>
   <Pressable onPress={oncontroller}>
   {play ? <Pause style={styles.play} color={'#fff'}/> : <Play style={styles.play} color={'#fff'}/>}
   </Pressable>
    <SkipForward color={'#fff'}/>
    <Repeat color={'#fff'}/>
</View>




    </View>
  )
}



const styles = StyleSheet.create({
container:{
  gap: 32,
},
card:{
    marginTop:32,
  textAlign:'center',
  gap:28,
  alignItems:'center'
},
controls:{
  marginTop:32,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginLeft:40,
  width:'80%',
  gap:20,
 

},
play:{
  padding:30,
  width:70,
  height:70,
  backgroundColor:Colors.primary,
  borderRadius:40,
  alignItems:'center',
  justifyContent:'center'
}
})