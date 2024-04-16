import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import {Colors} from './assets/colors/colors'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {HomeScreen} from './src/screens/HomeScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Music } from './src/screens/Music';
import { Favorites } from './src/screens/Favorites';
import Router from './src/router/router';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
     <SafeAreaProvider>
      <SafeAreaView onLayout={onLayoutRootView}> 
       
        <Router/>
        </SafeAreaView>
     </SafeAreaProvider>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: 17,
  
  },

});
