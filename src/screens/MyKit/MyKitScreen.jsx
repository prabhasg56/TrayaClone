import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import HeadingText from '../../components/home/HeadingText';

const MyKitScreen = () => {
  const [height, setHeight] = useState(40);

  const handleContentSizeChange = (event) => {
    const newHeight = event.nativeEvent.contentSize.height;
    setHeight(newHeight);
  };

  return (
    <View style={styles.container}>
      <HeadingText text="MyKitScreen" />

      <TextInput
        placeholder="Enter Text"
        multiline
        onContentSizeChange={handleContentSizeChange}
        style={[styles.textInput, { height }]}
      />
    </View>
  );
};

export default MyKitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    maxWidth: 300,
    minHeight: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    textAlignVertical: 'top',
  },
});
