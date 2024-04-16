import { ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View,Alert,Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar } from '../components/Avatar'
import RingVector from '../../assets/vectors/Ring.svg'
import { Colors } from '../../assets/colors/colors'
import { Input } from '../components/Input'

import  Search  from '../../assets/vectors/Search.svg'
import { Card } from '../components/Card'
import { Data } from '../../assets/Data'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'

export const HomeScreen: React.FC = () => {
  
  const createButtonAlert = () =>
    Alert.alert('Notification', 'Notification working', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
     
    ]);
    const [modalVisible, setModalVisible] = useState(false);
   const [data, setData] = useState<any>([])
   const fetchSongs =async () => {
     const response: Response = await fetch('https://itunes.apple.com/search?term=eminem&entity=song');
     const result = await response.json();
     setData(result.results);
    
   }
    useEffect(() => {
      fetchSongs()
     
      
      
    }, [])
  return (
  <View>
  <ScrollView indicatorStyle="white" showsVerticalScrollIndicator={false}  keyboardShouldPersistTaps="handled" style={{ paddingHorizontal:20}} >
       <View style={styles.container}>
       <Header  right={<RingVector onPress={createButtonAlert} style={{width:30,height:30,marginTop:10}} color={Colors.grey} />
} left={<Avatar  url="https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik" name="Sarwar Jahan" content="Gold Member" />
}/>
   
    </View>

   

<View style={styles.search}>
<Text onPress={()=>setModalVisible((state)=> !state)} numberOfLines={2} style={styles.title}>Listen The Latest Musics</Text>
   <Input icon={<Search/>} placeholder="Search" />
</View>

<Modal visible={modalVisible} >
  <View style={styles.modalView}>
    <View style={styles.modal}>
      <Text>Modal worked</Text>
<Text onPress={()=>setModalVisible((state)=> !state)} style={{marginTop:70}} >Back</Text>
    </View>
  </View>
</Modal>

<Text numberOfLines={2} style={[styles.title,{marginTop:44,fontSize:22}]}>Resent Musics</Text>

<ScrollView horizontal showsHorizontalScrollIndicator={false} >


{
  data.map((item:any)=>(
    <Card  key={item.trackId} title={item.artistName} url={item.artworkUrl100} horizontal={false} size='m' />
  ))
}


</ScrollView>
<Text style={styles.titleRecommend}>Recommend for you</Text>



{
  data.map((item:any)=>(
    <Card key={item.trackId} title={item.artistName} url={item.artworkUrl100} horizontal={true} size='s' content={item.collectionCensoredName} desc={item.trackCensoredName} />
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
  modal:{
    width:300,
    height:300,
    borderRadius:20,
    borderWidth:2,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#9EE6E0',
    borderColor:'#9EE6E0'
  },
  modalView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }

})