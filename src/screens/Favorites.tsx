import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Left from '../../assets/vectors/left.svg'
import { Card } from '../components/Card'
import { Colors } from '../../assets/colors/colors'
import { Data } from '../../assets/Data'
import { FlashList } from "@shopify/flash-list";
export const Favorites = () => {
  const [data, setData] = useState<any>([])

  // const renderItem = ({ item }: any) => (
    
  //  <Card size='l' key={item.id} url={item.picture} horizontal={true} style={{ marginTop: 24 }} />
  
  // )
  const renderItem = ({ item }: any) => {

    return (
      <View style={{ flex: 1, margin: 10 }}>
      <Card
        size="l"
        key={item.id}
        url={item.picture}
        horizontal={false}
        style={{ marginTop: 24 }}
      />
    </View> 
       )
  }
  const renditem = ({ item }: any) =>{ 
    

    return(
    <Card size='l' key={item.id} url={item.picture} horizontal={false} style={{ marginTop: 24 }} />

  )}
  const fetchSongs = async () => {
    const response: Response = await fetch('https://api.deezer.com/radio');
    const result = await response.json();
    setData(result.data);
  }

  useEffect(() => {
    fetchSongs()
  }, [])
  return (
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled"   >

      <View style={{ width: '100%', height: '100%' }}>
        <Header left={<Left />} />
        <View style={{ padding: 20 }}>
          <Card horizontal={true} size='l'
            email='sarwarmusic@gmail.com'
            title='Sarwar Jahan'
            content='Gold Member'
            desc='Love Music and I am not an Musician .'
            url='https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712448000&semt=sph' />
        </View>
        <Text numberOfLines={1} style={styles.title}>Favourite Album</Text>
        <View style={{ height: 300, flexGrow: 1, flexDirection: 'row' }}>

          <FlashList
           renderItem={renditem} 
           data={data} 
           estimatedItemSize={200} 
           contentContainerStyle={{ paddingHorizontal: 20 }} 
           horizontal={true} />
        </View>
        <Text numberOfLines={1} style={[styles.title, { marginTop: 44 }]}>Favourite Music</Text>
      </View>
      
      {/* <View style={{ height: 100, flexGrow: 1 }}> */}
      
          <FlatList
          data={data}
          // estimatedItemSize={200}
          renderItem={renderItem}
          // numColumns={3}
          horizontal={false}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      
      {/* </View> */}


      
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
    marginTop: 107,
    width: '60%',
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary
  }
})