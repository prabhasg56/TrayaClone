import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatWithUsCard = () => (
  <View style={{ marginTop: 24, marginHorizontal:10 }}>
    <Text style={styles.heading}>Chat With Us</Text>

    <Card style={styles.card} mode="outlined">
      <Card.Content style={styles.row}>
        {/* copy block */}
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Talk to a Hair Coach Now</Text>
          <Text style={styles.subtitle}>
            Get all your queries resolved in 15 minutes
          </Text>

          <Button
            mode="contained-tonal"
            contentStyle={styles.chatBtnContent}
            labelStyle={styles.chatBtnLabel}
            style={styles.chatBtn}
            icon={({ size, color }) => (
              <Icon name="whatsapp" size={size} color={color} />
            )}
            onPress={() => {
              // TODO: link to WhatsApp chat (e.g. Linking.openURL('https://wa.me/91XXXXXXXXXX'))
            }}>
            Chat Now
          </Button>
        </View>

        {/* WhatsApp logo */}
        <Icon
          name="whatsapp"
          size={64}
          color="#25D366"
          style={{ marginLeft: 8 }}
        />
      </Card.Content>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    backgroundColor:"#fff"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  chatBtn: { marginTop: 16, borderRadius: 8, alignSelf: 'flex-start' },
  chatBtnContent: { paddingHorizontal: 24 },
  chatBtnLabel: { fontWeight: '600', color: '#000' },
});

export default ChatWithUsCard;
