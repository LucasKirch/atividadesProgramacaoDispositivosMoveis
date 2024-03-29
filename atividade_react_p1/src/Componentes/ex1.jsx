import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponenteAlinhamentoHorizontal = () => {
  return (
    <View style={styles.container}>
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
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default ComponenteAlinhamentoHorizontal;