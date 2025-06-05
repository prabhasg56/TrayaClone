import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'
import GoBack from '../../components/common/GoBack'

const ReadMoreScreen = () => {
  return (
    <>
    <GoBack title='Read More' />
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <HeadingText text='ReadMoreScreen'/>
    </View>
    </>
  )
}

export default ReadMoreScreen

const styles = StyleSheet.create({})