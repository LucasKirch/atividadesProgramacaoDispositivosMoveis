import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Flexbox = ({ initialColor }) => {
  const [secondBoxColor, setSecondBoxColor] = useState('lightblue');

  const changeSecondBoxColor = () => {
    const newColor = secondBoxColor === 'lightblue' ? 'lightgreen' : 'lightblue';
    setSecondBoxColor(newColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.firstBox, { backgroundColor: initialColor }]} />
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
  box: () => ({
    width: 100,
    height: 100,
    margin: 10,
  }),
  firstBox: () => ({
    // Estilos adicionais para a primeira caixa
  }),
});

export default Flexbox;
