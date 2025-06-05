import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'
import GoBack from '../../components/common/GoBack'

const AllProductScreen = () => {
  return (
    <>
      <GoBack title='All Product' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <HeadingText text='AllProduct' />
      </View>
    </>
  )
}

export default AllProductScreen

const styles = StyleSheet.create({})