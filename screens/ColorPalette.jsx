import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import ColorBox from '../components/ColorBox';


function ColorPalette({route}) {
    const {colors, paletteName } = route.params
  return (
        <FlatList
          style={styles.container}
          data={colors}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => <ColorBox hexCode={item.hexCode} colorName={item.colorName} />}
        />

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;

