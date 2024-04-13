import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components/Header'
import Left  from '../../assets/vectors/left.svg'
import { Card } from '../components/Card'
import { Colors } from '../../assets/colors/colors'
import { Data } from '../../assets/Data'
import { FlashList } from "@shopify/flash-list";
export const Favorites = () => {
  const renderItem = ({ item }:any) => (
    <Card item={true} size='l' key={item.id} url={item.url} horizontal={true} style={{ marginTop: 24}} />
  );
  const renditem=( { item }:any) => (
    
      
        <Card size='l' key={item.id}  url={item.url} horizontal={false} style={{marginTop:24}}/>
      
    
  )
  return (
    <ScrollView>

<View>
      <Header  left={<Left/>}/>
  <View style={{padding:20}}>
  <Card horizontal={true} size='l' 
      email='sarwarmusic@gmail.com'
      title='Sarwar Jahan'
      content='Gold Member'
      desc='Love Music and I am not an Musician .'
      url='https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712448000&semt=sph' />
  </View>


  <Text numberOfLines={1} style={styles.title}>Favourite Album</Text>

{/* <ScrollView horizontal contentContainerStyle={{gap:9,paddingHorizontal:20}}>
{
  Data.map((item)=>(
    <Card size='l' key={item.id}  url={item.url} horizontal={true} style={{marginTop:24}}/>
  ))
}
</ScrollView> */}
<FlashList renderItem={renditem} data={Data} estimatedItemSize={50} horizontal={true}/>

  <Text numberOfLines={1} style={[styles.title,{marginTop:44}]}>Favourite Music</Text>
    </View>


    <View style={{width:'100%',height:'100%'}}>
    <FlashList
      data={Data}
      estimatedItemSize={100}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id.toString()} 
      horizontal={false}
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:20}}
    />
    </View>


    </ScrollView>





  )
}



const styles = StyleSheet.create({
  title:{
    paddingHorizontal:20,
  marginTop:107,
    width:'60%',
    fontSize:18,
    fontWeight:"bold",
    color:Colors.secondary
  }
})