import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');


const GreetingCard = () => {
  return (
    <Card style={styles.container}>
        <Card.Content>
          <Text style={styles.userText}>Hi Prabhas</Text>
          <Text style={styles.normalText}>
            Here's what your hair analysis report says:
          </Text>
          <Text style={styles.subTitle}>Your Root Causes</Text>
          <View style={styles.causesRow}>
            <TouchableOpacity style={styles.causeItem}>
              <Icon name="sleep" size={24} color="#b8d700" />
              <Text style={styles.causeLabel}>SLEEP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.causeItem}>
              <Icon name="food-fork-drink" size={24} color="#b8d700" />
              <Text style={styles.causeLabel}>DIGESTION</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.causeItem}>
              <Icon name="apple" size={24} color="#b8d700" />
              <Text style={styles.causeLabel}>NUTRITION</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
  )
}

export default GreetingCard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 8,
        borderColor: 'lightgray',
        elevation: 3,
        marginHorizontal:14
      },
      userText: {
        fontSize: 18,
        fontWeight: '600',
      },
      normalText: {
        marginTop: 4,
        fontSize: 14,
      },
      subTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 6,
      },
      causesRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
      },
      causeItem: {
        alignItems: 'center',
      },
      causeLabel: {
        marginTop: 4,
        fontSize: 13,
        color: '#777',
        textDecorationLine:"underline"
      }
})