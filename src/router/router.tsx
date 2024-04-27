import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Favorites } from '../screens/Favorites';
import { Music } from '../screens/Music';
import Test from '../screens/Test';
import { Routers } from './Routers';
import { Colors } from '../../assets/colors/colors';
import { MainNavigationConfig } from '../configs/navigation.config';
import TabRouter from './Tab.Router';

const Stacks = createNativeStackNavigator();
const Router = () => {
    return (
        
        <NavigationContainer>
            <Stacks.Navigator screenOptions={MainNavigationConfig} >
               
                <Stacks.Screen name={Routers.Tab} component={TabRouter} />
                {/* <Stacks.Screen name={Routers.Favorites} component={Favorites} />
                <Stacks.Screen name={ Routers.Music}  component={Music}  /> */}
            </Stacks.Navigator>
        </NavigationContainer>
    )
   
}

export default Router

