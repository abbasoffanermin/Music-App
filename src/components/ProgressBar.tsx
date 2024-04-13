import { DimensionValue, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors/colors'
import { convertTime } from '../../assets/util/time'
interface IProgressBar {
    time: number;
    currentTime: number;
    style?: StyleProp<ViewStyle>;
  }
export const ProgressBar:React.FC<IProgressBar> = ( {time,currentTime,style}) => {
  const progress = ((currentTime / time) * 100).toFixed(2) + '%';
  const saveCurrentTime = currentTime > time ? time : currentTime;
  console.log(progress);
  
  return (
    <View>
     
<View style={styles.container}>
    <View style={[styles.bar,{width:progress as DimensionValue}]}>
    </View>
</View>

<View style={styles.texts}>
        <Text style={[styles.time]}>{convertTime(currentTime)}</Text>
        <Text style={styles.time}>{ convertTime(time)}</Text>
      </View>


    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    
    width:'100%',
    height:4,
    backgroundColor:Colors.secondary,
    borderRadius:4,
    overflow:'hidden'
  },
  bar:{
   
    width:'2%',
    height:4,
    backgroundColor:Colors.primary,
    position:'absolute',
    zIndex:3
  },
  texts:{
    marginTop:8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time:{
    fontFamily: 'Nunito-Semibold',
    fontSize: 14,
    color: Colors.white,
  }
})