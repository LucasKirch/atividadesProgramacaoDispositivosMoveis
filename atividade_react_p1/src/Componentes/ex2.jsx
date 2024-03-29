import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalAlignComponent = ({ boxColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: boxColor }]}>
      <View style={styles.item}>
        <Text>Elemento 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Elemento 2</Text>
      </View>
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

export default HorizontalAlignComponent;