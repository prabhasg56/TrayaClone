import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { rasDetox } from '../../assets';
import { buttonLightColor } from '../../styles/GlobalStyles';

const HelpSection = () => {
  return (
    <View style={styles.container}>
      {/* Help Buttons */}
      <Text style={styles.heading}>Need Help?</Text>
      <View style={styles.helpButtons}>
        <TouchableOpacity style={styles.helpButton}>
          <Icon name="help-circle-outline" size={20} />
          <Text style={styles.helpButtonText}>General Queries</Text>
          <Icon name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Icon name="phone-portrait-outline" size={20} />
          <Text style={styles.helpButtonText}>Hair Test</Text>
          <Icon name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
      </View>

      {/* Green Banner */}
      <View style={styles.greenBox}>
        <Text style={styles.greenTitle}>Not completely sure?</Text>
        <Text style={styles.greenText}>
          If you've left something or want to update a response on the hair test, simply re-take it.
        </Text>
        <TouchableOpacity style={styles.retakeButton}>
          <Text style={styles.retakeText}>Take The Hair Test Again</Text>
        </TouchableOpacity>
      </View>

      {/* Doctor Section */}
      <Text style={styles.doctorHeading}>Meet Our Team Of Doctors</Text>
      <View style={styles.doctorCard}>
        <Image
          source={rasDetox} 
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. Shailendra Chaubey</Text>
          <Text style={styles.doctorTitle}>Ayurvedic Practitioner</Text>
          <Text style={styles.doctorExperience}>Experience : 15 Years</Text>
        </View>
      </View>
    </View>
  );
};

export default HelpSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    marginTop:10
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  helpButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee6f5',
    padding: 12,
    borderRadius: 12,
    flex: 0.48,
    justifyContent: 'space-between',
  },
  helpButtonText: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '600',
  },
  greenBox: {
    backgroundColor: '#137a4a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  greenTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },
  greenText: {
    color: '#fff',
    marginBottom: 12,
  },
  retakeButton: {
    backgroundColor:buttonLightColor,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  retakeText: {
    color: '#000',
    fontWeight: '600',
  },
  doctorHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
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
    marginTop: 6,
    color: '#333',
    fontWeight: '500',
  },
});
