import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import { trayaHomeImage } from '../../assets/index.js'
import GreetingCard from '../../components/cards/GreetingCard.jsx';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={trayaHomeImage}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Hair growth is possible, you're in the right hands.</Text>
        </View>
        <View style={{ position: "absolute", bottom: -15, left: 0, right: 0 }}>
          <GreetingCard />
        </View>
      </ImageBackground>

    </ScreenWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    width: '100%',
    height: windowHeight * 0.5,
    paddingTop: 15
  },
  headerOverlay: {
    padding: 20,
  },
  headerTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: "center"
  },


})