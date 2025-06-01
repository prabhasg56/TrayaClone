import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/common/ScreenWrapper';
import { trayaHomeImg } from '../../assets/index.js';
import GreetingCard from '../../components/cards/GreetingCard.jsx';
import HairKitScreen from './HairKitScreen.jsx';
import BottomSection from '../../components/home/BottomSection.jsx';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <ImageBackground
              source={trayaHomeImg}
              style={styles.headerBackground}
              resizeMode="cover"
            >
              <View style={styles.headerOverlay}>
                <Text style={styles.headerTitle}>
                  Hair growth is possible, you're in the right hands.
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  bottom: -100,
                  left: 0,
                  right: 0,
                }}
              >
                <GreetingCard />
              </View>
            </ImageBackground>
          </View>

          <View style={{ height: 120 }} />

          <HairKitScreen />

          {/* Padding to prevent BottomSection from overlapping last item */}
          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Sticky bottom section */}
        <View style={styles.bottomSticky}>
          <BottomSection totalPrice="₹3164" />
        </View>
        
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerBackground: {
    width: '100%',
    height: windowHeight * 0.5,
    paddingTop: 15,
  },
  headerOverlay: {
    padding: 20,
  },
  headerTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  bottomSticky: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
