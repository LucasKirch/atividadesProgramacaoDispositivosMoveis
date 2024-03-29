import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ComponenteAlinhamentoHorizontal = () => {
  const [firstBoxColor, setFirstBoxColor] = useState('lightblue');

  const changeFirstBoxColor = () => {
    const newColor = firstBoxColor === 'lightblue' ? 'lightgreen' : 'lightblue';
    setFirstBoxColor(newColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.item, { backgroundColor: firstBoxColor }]}>
        <Text>Elemento 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Elemento 2</Text>
      </View>
      <Button title="Alterar Cor" onPress={() => changeFirstBoxColor()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Alinha os elementos horizontalmente
    justifyContent: 'space-around', // Distribui o espaço disponível igualmente entre os elementos
    alignItems: 'center', // Alinha os elementos verticalmente no centro
  },
  item: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default ComponenteAlinhamentoHorizontal;
