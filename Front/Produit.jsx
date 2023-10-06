import React from 'react';
import { View, Text, Image } from 'react-native';

function Produit({ route }) {
  // Récupérez le paramètre "image" de la navigation
  const { image } = route.params;

  return ( 
    <View>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: image }}
        resizeMode="cover"
      />
      <Text>Bonjour | Profil</Text>
    </View>
  );
}

export default Produit;
