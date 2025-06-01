import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { rasDetox } from '../../assets'
import { primaryColor } from '../../styles/GlobalStyles';

const DoctorInfoCard = (props) => {
    const {name, title, experience, description, avatar} = props;

    return (
        <TouchableOpacity style={styles.doctorCard}>
            <Image
                source={{uri:avatar}}
                style={styles.doctorImage}
            />
            <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{name}</Text>
                <Text style={styles.doctorTitle}>{title}</Text>
                <Text style={styles.doctorExperience}>{experience}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DoctorInfoCard

const styles = StyleSheet.create({
    doctorCard: {
        flexDirection: 'row',
        alignItems: 'center',
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
        borderTopWidth:1,
        borderTopColor:primaryColor,
      },
})