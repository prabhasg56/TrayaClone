import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const items = [
  {
    label: '1 month kit',
    image: { uri: 'https://img.icons8.com/color/96/box.png' },
  },
  {
    label: 'Doctor prescription',
    image: { uri: 'https://img.icons8.com/ios-filled/100/medical-doctor.png' },
  },
  {
    label: 'Hair coach support',
    image: { uri: 'https://img.icons8.com/color/96/customer-support.png' },
  },
  {
    label: 'Customised diet plan',
    image: { uri: 'https://img.icons8.com/color/96/meal.png' },
  },
];

const TrayaPlan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Traya Plan Includes</Text>

      <View style={styles.gridContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <View style={styles.itemTopLeft}>
              <Text style={styles.gridText}>{item.label}</Text>
            </View>
            <View style={styles.itemBottomRight}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>100% Safe</Text>
        <Text style={styles.tag}>Vegan Friendly</Text>
        <Text style={styles.tag}>Allergen Free</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 100,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    marginBottom: 15,
    position: 'relative',
  },
  itemTopLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  itemBottomRight: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  gridText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0d6cf',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  tag: {
    fontSize: 12,
    color: '#000',
  },
});

export default TrayaPlan;
