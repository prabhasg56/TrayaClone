import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const actions = [
  { label: 'Hair Progress', icon: 'trending-up' },
  { label: 'Help & Support', icon: 'help-circle' },
  { label: 'Chat With Us', icon: 'message-circle' },
  { label: 'Orders', icon: 'box' },
];

export default function QuickActions() {
  return (
    <View style={styles.grid}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Icon name={action.icon} size={20} color="#000" />
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal:10
  },
  item: {
    width: '47%',
    backgroundColor: '#e8f1c1',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  label: { marginTop: 8, fontWeight: '600' },
});
