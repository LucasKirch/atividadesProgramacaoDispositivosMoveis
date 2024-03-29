// screens/SecondScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TelaDois = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Button
        title="Go back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TelaDois;
