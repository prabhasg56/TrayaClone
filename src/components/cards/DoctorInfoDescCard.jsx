import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { primaryColor } from '../../styles/GlobalStyles';
import BounceTouchable from '../BounceTouchable';

const { width, height } = Dimensions.get('window');


const DoctorInfoDescCard = (props) => {
  const { name, title, experience, description, id, avatar } = props;

  return (
    <BounceTouchable>
      <View style={styles.doctorCard}>
        <View style={{flexDirection:'row'}}>
        <Image
          source={{ uri: avatar }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.doctorTitle}>{title}</Text>
          <Text style={styles.doctorExperience}>{experience}</Text>
        </View>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
    </BounceTouchable>
  )
}

export default DoctorInfoDescCard

const styles = StyleSheet.create({
  doctorCard: {
    width:width*0.8,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '700',
  },
  doctorTitle: {
    color: '#777',
  },
  doctorExperience: {
    marginTop: 8,
    color: '#333',
    fontWeight: '500',
    borderTopWidth: 1,
    borderTopColor: primaryColor,
  },
  descriptionBox: {
    backgroundColor: '#f5f7ef',
    padding: 15,
    borderRadius: 10,
    marginTop:20
  },
  description: {
    fontSize: 15,
    color: '#333',
    textAlign: 'justify'

  },
})