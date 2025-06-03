import {
  BackHandler,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import ScreenWrapper from '../../components/common/ScreenWrapper';
import HairKitScreen from './HairKitScreen.jsx';
import BottomSection from '../../components/home/BottomSection.jsx';
import ChatWithUsCard from '../../components/cards/ChatWithUsCard.jsx';
import GrowthJourneyCard from '../../components/cards/GrowthJourneyCard.jsx';
import TrayaPlan from '../../components/home/TrayaPlan.jsx';
import AfterPlaceOrder from '../../components/home/AfterPlaceOrder.jsx';
import HelpSection from '../../components/home/HelpSection.jsx';
import ReviewSection from '../../components/home/ReviewSection.jsx';
import TopSection from '../../components/home/TopSection.jsx';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

  const [exitApp, setExitApp] = useState(0);


  const backAction = useCallback(() => {
      setExitApp(prevExitApp => {
          if (prevExitApp === 0) {
              ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
              setTimeout(() => {
                  setExitApp(0);
              }, 2000); // Reset after 2 seconds
              return 1; // Update state to track first press
          } else if (prevExitApp === 1) {
              BackHandler.exitApp();
          }
          return prevExitApp;
      });

      return true; // Prevent default back action
  }, []);

  useFocusEffect(
      useCallback(() => {
          const backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              backAction
          );
          return () => backHandler.remove();
      }, [backAction])
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <TopSection />

          <View style={{ height: 120 }} />

          <HairKitScreen />
          <ChatWithUsCard />
          <GrowthJourneyCard />
          <TrayaPlan />

          <AfterPlaceOrder />

          <HelpSection navigation={navigation} />

          <ReviewSection />

          {/* Padding to prevent BottomSection from overlapping last item */}
          {/* <View style={{ height: 80 }} /> */}
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

});
