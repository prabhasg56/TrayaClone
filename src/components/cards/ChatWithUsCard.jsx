import React, { useRef } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadingText from '../home/HeadingText';
import BounceTouchable from '../BounceTouchable';

const ChatWithUsCard = () => {

  const handleWhatsApp = () => {
    // Implement WhatsApp chat logic here
  };

  return (
    <View style={{ marginTop: 24, marginHorizontal: 10 }}>
      <HeadingText text={"Chat With Us"} />
      <BounceTouchable onPress={()=>Alert.alert("Sorry 😔 wait for this feature!")}>
        <Card style={styles.card} mode="outlined" >
          <Card.Content style={styles.row}>
            <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
              <View>
                <Text style={styles.title}>Talk to a Hair Coach Now</Text>
                <Text style={styles.subtitle}>
                  Get all your queries resolved in 15 minutes
                </Text>
              </View>
              <Icon
                name="whatsapp"
                size={64}
                color="#25D366"
                style={{ marginLeft: 8 }}
              />
            </View>

            <Button
              mode="contained-tonal"
              contentStyle={styles.chatBtnContent}
              labelStyle={styles.chatBtnLabel}
              style={styles.chatBtn}
              icon={({ size, color }) => (
                <Icon name="whatsapp" size={size} color={color} />
              )}
              onPress={handleWhatsApp}>
              Chat Now
            </Button>
          </Card.Content>
        </Card>
      </BounceTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: 'lightgray', 
  },
  row: {
    flex: 1
  },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  chatBtn: {
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#e0ecac'
  },
  chatBtnContent: { paddingHorizontal: 24 },
  chatBtnLabel: { fontWeight: '600', color: '#000' },
});

export default ChatWithUsCard;
