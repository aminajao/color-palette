import React from 'react';
import { TouchableOpacity, StyleSheet, FlatList ,Text, View } from 'react-native';

const PalettePreview = ({ colorPalette, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.heading}>{colorPalette.paletteName}</Text>

        <FlatList 
          style={styles.list}
          data={colorPalette.colors.slice(0,5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View style={[styles.color, {backgroundColor: item.hexCode}]}></View>
          )}
        />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default PalettePreview;