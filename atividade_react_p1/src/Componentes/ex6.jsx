import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const LayoutFlexivel = () => {
  // Dados da lista de exemplo
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ];

  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image
        source={{ uri: 'https://via.placeholder.com/400x200' }}
        style={styles.image}
        resizeMode="cover"
      />
      
      {/* Lista abaixo */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default LayoutFlexivel;
