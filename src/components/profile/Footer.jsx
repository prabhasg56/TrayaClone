import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default function Footer() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    const fetchVersion = async () => {
      const appVersion = await DeviceInfo.getVersion();
      setVersion(appVersion);
    };

    fetchVersion();
  }, []);

  return (
    <View style={styles.footer}>
      <Text style={styles.brand}>Traya.</Text>
      <Text style={styles.version}>Version {version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { 
    alignItems: 'center', marginBottom: 20 },
  brand: { fontSize: 18, fontWeight: 'bold', color: '#555' },
  version: { color: '#888' },
});
