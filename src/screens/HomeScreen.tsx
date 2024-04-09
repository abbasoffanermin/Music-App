import { ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from '../components/Avatar'
import RingVector from '../../assets/vectors/Ring.svg'
import { Colors } from '../../assets/colors/colors'
import { Input } from '../components/Input'

import  Search  from '../../assets/vectors/Search.svg'
import { Card } from '../components/Card'
import { Data } from '../../assets/Data'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'

export const HomeScreen = () => {
  

  return (
  <View>
  <ScrollView indicatorStyle="white" showsVerticalScrollIndicator={false}  keyboardShouldPersistTaps="handled" style={{ paddingHorizontal:20}} >
       <View style={styles.container}>
       <Header right={<RingVector style={{width:30,height:30,marginTop:10}} color={Colors.grey}/>
} left={<Avatar  url="https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik" name="Sarwar Jahan" content="Gold Member" />
}/>
   
    </View>

    
<View style={styles.search}>
<Text numberOfLines={2} style={styles.title}>Listen The Latest Musics</Text>
   <Input icon={<Search/>} placeholder="Search" />
</View>



<Text numberOfLines={2} style={[styles.title,{marginTop:44,fontSize:22}]}>Resent Musics</Text>

<ScrollView horizontal showsHorizontalScrollIndicator={false} >
{
  Data.map((item)=>(
    <Card key={item.id} title={item.title} url={item.url} horizontal={false} size='m' />
  ))
}
</ScrollView>
<Text style={styles.titleRecommend}>Recommend for you</Text>

{
  Data.map((item)=>(
    <Card key={item.id} title={item.title} url={item.url} horizontal={true} size='s' content={item.content} desc={item.desc} />
  ))
}
<View>
  <Navbar/>
</View>
   
 
    </ScrollView>




  </View>
   




  )
}



const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    
   
    justifyContent:"space-between"
  },
  titleRecommend:{
    marginTop:28,
    fontSize:18,
    fontWeight:"bold",
    color:Colors.secondary,
    marginBottom:18
  },
  title:{
    width:'60%',
    fontSize:26,
    fontWeight:"bold",
    color:Colors.secondary
  },
  search:{
    marginTop:24,
    flexDirection:"row",
    alignItems:"center",
  },

})