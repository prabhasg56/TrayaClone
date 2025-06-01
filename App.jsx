import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from './src/components/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
