import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const GreetingCard = () => {
  return (
    <Card style={styles.cardCon}>
      <Text>Hi Prabhas</Text>
    </Card>
  )
}

export default GreetingCard

const styles = StyleSheet.create({
    cardCon:{
        marginHorizontal:20,
        padding:10,
        borderRadius:8,
        backgroundColor:"#fff"
    }
})