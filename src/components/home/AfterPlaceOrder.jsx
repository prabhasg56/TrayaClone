import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const steps = [
  {
    id: 1,
    title: 'Connect with a Hair Coach',
    description:
      'Get instant access to a free hair coach who will guide you on how to start the treatment.',
  },
  {
    id: 2,
    title: 'Receive Your Kit',
    description:
      'You will receive your customized 1 month kit along with guidance on how to use it.',
  },
  {
    id: 3,
    title: 'Track Your Progress',
    description:
      'Your hair coach and doctor will follow up and adjust treatment based on your progress.',
  },
];

const AfterPlaceOrder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>What Happens After You Place An Order?</Text>

      <Carousel
        width={width - 20}
        height={100}
        autoPlay={false}
        data={steps}
        scrollAnimationDuration={600}
        onSnapToItem={setCurrentIndex}
        renderItem={({ item }) => (
          <View style={styles.stepContainer}>
            <Text style={styles.stepNumber}>{item.id}</Text>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.stepDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        style={{ alignSelf: 'center' }}
      />

      {/* Dotted Pagination */}
      <View style={styles.pagination}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default AfterPlaceOrder;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  stepContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: 'lightgray',
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#ccc',
  },
  stepNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3a8a8',
    marginRight: 15,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 14,
    color: '#555',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#ccc',
  },
  activeDot: {
    backgroundColor: 'gray',
    borderColor: 'gray',
  },
});
