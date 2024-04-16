import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Favorites } from '../screens/Favorites';
import { Music } from '../screens/Music';
import Test from '../screens/Test';
const Stacks = createNativeStackNavigator();
const Router: React.FC = () => {
    return (
        
        <NavigationContainer>
            <Stacks.Navigator >
                {/* <Stack.Screen name='Test' component={Test}/> */}
                <Stacks.Screen name='HomeScreen' component={HomeScreen} />
                {/* <Stack.Screen name='FavoritesScreen' component={Favorites} /> */}
                <Stacks.Screen name='MusicScreen'   component={Music}  />
            </Stacks.Navigator>
        </NavigationContainer>
    )
   
}

export default Router

const styles = StyleSheet.create({})