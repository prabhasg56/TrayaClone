import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'
import GoBack from '../../components/common/GoBack'

const TermsPolicieScreen = () => {
  return (
    <>
      <GoBack title='Read More' />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <HeadingText text='TermsPolicieScreen' />
      </View>
    </>
  )
}

export default TermsPolicieScreen

const styles = StyleSheet.create({})