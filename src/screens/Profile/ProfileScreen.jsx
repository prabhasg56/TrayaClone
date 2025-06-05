import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/profile/Header';
import HairTestCard from '../../components/cards/HairTestCard';
import QuickActions from '../../components/profile/QuickActions';
import MenuLinks from '../../components/profile/MenuLinks';
import Footer from '../../components/profile/Footer';


export default function ProfileScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Header username="Prabhas" navigation={navigation} />
      <HairTestCard  navigation={navigation} />
      <QuickActions  navigation={navigation}  />
      <MenuLinks  navigation={navigation} />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
