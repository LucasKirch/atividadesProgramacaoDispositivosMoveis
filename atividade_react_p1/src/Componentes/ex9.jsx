import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Flexbox = ({ boxColors }) => {
  const [secondBoxColor, setSecondBoxColor] = useState(boxColors[1]);

  const changeSecondBoxColor = () => {
    const newColor = secondBoxColor === boxColors[0] ? boxColors[1] : boxColors[0];
    setSecondBoxColor(newColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: boxColors[0] }]} />
      <View style={[styles.box, { backgroundColor: secondBoxColor }]} />
      <Button title="Change Second Box Color" onPress={changeSecondBoxColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default Flexbox;
