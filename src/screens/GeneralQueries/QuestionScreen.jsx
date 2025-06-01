import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import GoBack from '../../components/common/GoBack'

const QuestionScreen = () => {
  return (
    <ScreenWrapper>
        <GoBack title={"Questions"} backgroundColor='#fff' titleColor='#000' iconColor='#000'/>
      <Text>QuestionScreen</Text>
    </ScreenWrapper>
  )
}

export default QuestionScreen

const styles = StyleSheet.create({})