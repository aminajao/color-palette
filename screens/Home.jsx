import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';



const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';


const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <FlatList
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};



export default Home;
