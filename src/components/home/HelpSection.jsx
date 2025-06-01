import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { rasDetox } from '../../assets';
import { buttonLightColor } from '../../styles/GlobalStyles';
import HeadingText from './HeadingText';
import DoctorInfoCard from '../cards/DoctorInfoCard';

const doctorData = [
  {
    name: "Dr. Shailendra Chaubey",
    title: "Ayurvedic Practitioner",
    experience: "15 Years",
    avatar: "https://i.pravatar.cc/150?img=10",
    description:
      "Dr. Shailendra Chaubey is a qualified Ayurvedic Practitioner and a Pancha Karma Consultant, having over 15 years of experience in this field. He has a specialization in treating chronic disorders and runs a Healing school of his own, treating patients using ayurvedic therapies. He also works as a medical officer for a yoga organization for a renowned Yoga Club in Mumbai and has spent years perfecting his preventive hair loss all-natural treatment."
  },
  {
    name: "Dr. Anjali Mehra",
    title: "Naturopathy Expert",
    experience: "10 Years",
    avatar: "https://i.pravatar.cc/150?img=18",
    description:
      "Dr. Anjali Mehra is a well-known Naturopathy Expert with over a decade of experience. She specializes in holistic healing, nutrition therapy, and detoxification. She runs a wellness center in Pune and is committed to promoting natural healing methods for chronic illnesses."
  },
  {
    name: "Dr. Rohit Vyas",
    title: "Homeopathy Specialist",
    experience: "12 Years",
    avatar: "https://i.pravatar.cc/150?img=12",
    description:
      "Dr. Rohit Vyas is an experienced Homeopathy Specialist with a strong background in treating allergies, skin conditions, and autoimmune disorders. Based in Delhi, he combines modern diagnostic tools with traditional homeopathic remedies for effective results."
  },
  {
    name: "Dr. Neeta Deshpande",
    title: "Ayurveda & Yoga Consultant",
    experience: "18 Years",
    avatar: "https://i.pravatar.cc/150?img=13",
    description:
      "With 18 years of experience, Dr. Neeta Deshpande is an accomplished Ayurveda and Yoga Consultant. She integrates customized yoga plans with traditional Ayurvedic treatments to address lifestyle disorders, stress, and hormonal imbalances."
  },
  {
    name: "Dr. Arvind Kumar",
    title: "Siddha Medicine Practitioner",
    avatar: "https://i.pravatar.cc/150?img=14",
    experience: "20 Years",
    description:
      "Dr. Arvind Kumar is a highly respected Siddha Medicine Practitioner with two decades of experience. He has a unique approach that includes ancient herbal formulations and spiritual healing to manage chronic conditions and rejuvenate overall health."
  }
];


const HelpSection = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      {/* Help Buttons */}
      <HeadingText text={"Need Help?"} />
      <View style={styles.helpButtons}>
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => navigation.navigate("GeneralQueriesStack", { screen: "QuestionScreen" })}
        >
          <Icon name="help-circle-outline" size={20} />
          <Text style={styles.helpButtonText}>General Queries</Text>
          <Icon name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => navigation.navigate("GeneralQueriesStack", { screen: "QuestionScreen" })}
        >
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
      <HeadingText text={"Meet Our Team Of Doctors"} />

      <FlatList
        data={doctorData}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DoctorInfoCard {...item} />}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />
    </View>
  );
};

export default HelpSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 10
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
    borderRadius: 8,
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
    borderRadius: 8,
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
    backgroundColor: buttonLightColor,
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

});
