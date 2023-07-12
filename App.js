import { useState } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import IntroScreen from './View/IntroScreen';
import MainScreen from './View/MainScreen'


export default function App() {
  const [isloaded, setIsloaded] = useState(false);
  setTimeout(() => {
    setIsloaded(true);
  }, 2000)
  return (
    <View>
      <StatusBar style="auto" />
      {isloaded ? <MainScreen /> : <IntroScreen />}
      {/* <MainScreen /> */}
    </View>
  );
}

