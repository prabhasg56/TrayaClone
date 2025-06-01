import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HeadingText text='ProfileScreen' />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})