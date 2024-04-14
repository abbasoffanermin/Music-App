import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Left  from '../../assets/vectors/left.svg'
import { Card } from '../components/Card'
import { Colors } from '../../assets/colors/colors'
import { Data } from '../../assets/Data'
import { FlashList } from "@shopify/flash-list";
export const Favorites = () => {
  const [data, setData] = useState<any>([])

  const renderItem = ( {item} :any) => (
    console.log(typeof item),
    <Text>{item.artistName}</Text>,
    
    <Card  size='l' key={item.artistId} url={item.artistViewUrl} horizontal={true} style={{ marginTop: 24,width:'100%'}} />
    
    
  );
  const renditem=( { item }:any) => (
    
      
        <Card size='l' key={item.artistId}  url={item.artistViewUrl} horizontal={false} style={{marginTop:24,width:'100%'}}/>
      
    
  )
  const fetchSongs =async () => {
    const response: Response = await fetch('https://itunes.apple.com/search?term=eminem&entity=song');
    const result = await response.json();
    setData(result.results);
   
    
   
  }

  useEffect(() => {
    fetchSongs()
  //  console.log(data);
   
    
    
  }, [])
  return (
    <ScrollView >

<View style={{minWidth:'100%',minHeight:'100%'}}>
      <Header  left={<Left/>}/>
  <View style={{padding:20}}>
  <Card horizontal={true} size='l' 
      email='sarwarmusic@gmail.com'
      title='Sarwar Jahan'
      content='Gold Member'
      desc='Love Music and I am not an Musician .'
      url='https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712448000&semt=sph' />
  </View>





{/* <View  style={{height: '100%', width: '100%' }}> 
 <Text numberOfLines={1} style={styles.title}>Favourite Album</Text>
<FlashList renderItem={renditem} data={data} estimatedItemSize={100} style={{ flex: 1 }} horizontal={true}/>
</View> */}



  <Text numberOfLines={1} style={[styles.title,{marginTop:44}]}>Favourite Music</Text>
    </View>


    <View style={{width:'100%',height:'100%',borderWidth:5,borderColor:'white'}}>
    <FlashList
      data={data}
      estimatedItemSize={200}
      renderItem={renderItem}
      numColumns={3}
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