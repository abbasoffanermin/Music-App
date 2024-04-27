import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { Routers } from './Routers';
import { Favorites } from '../screens/Favorites';
import { Music } from '../screens/Music';
import { MainNavigationConfig, tabstyles } from '../configs/navigation.config';
import { Colors } from '../../assets/colors/colors';
import Home from '../../assets/vectors/Home.svg';
import MusicSvg from '../../assets/vectors/Music.svg';
import Heart from '../../assets/vectors/Heart.svg';
const Tab = createBottomTabNavigator();
const TabRouter = () => {
  return (
    <Tab.Navigator screenOptions={{ ...tabstyles }} sceneContainerStyle={{ backgroundColor: Colors.bg }}
    >
      <Tab.Screen name={Routers.HomeScreen} component={HomeScreen}
        options={
          {
            tabBarIcon: ({ color, size }) => (
              <Home color={color} fontSize={size} />
            )
          }
        }
      />
      <Tab.Screen name={Routers.Favorites} component={Favorites} options={
        {
          tabBarIcon: ({ color }) => (
            <Heart color={color} />
          )
        }
      } />
      <Tab.Screen name={Routers.Music} component={Music} options={
        {
          tabBarIcon: ({ color }) => (
            <MusicSvg color={color} />
          )
        }
      } />

    </Tab.Navigator>
  )
}

export default TabRouter

const styles = StyleSheet.create({

})