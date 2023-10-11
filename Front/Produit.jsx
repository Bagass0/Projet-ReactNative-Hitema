import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

function Produit({ route }) {
  // Vérifiez si route.params est défini
  if (!route.params || !route.params.image) {
    return <Text>Aucune image spécifiée</Text>;
  }

  // Récupérez le paramètre "image" de la navigation
  const { image, nom, description, auteur } = route.params;

  return ( 
    <View style={styles.container}>
      <Text style={styles.text_titre}>{nom}</Text>
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode="cover"
      />
      <Text>{ auteur }</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text_description}>Description: {description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350, // Augmentation de la largeur de l'image
    height: 350, // Augmentation de la hauteur de l'image
    borderWidth: 2, // Bordure
    borderColor: '#000', // Couleur de la bordure
    borderRadius: 10, // Coins arrondis
    marginBottom: 10, // Espacement entre l'image et le texte
  },
  text_titre: {
    fontSize: 18,
    marginBottom: 80,
  },
  descriptionContainer: {
    backgroundColor: '#ffefd1', // Couleur de fond
    padding: 10, // Espacement intérieur
    borderRadius: 10, // Coins arrondis
  },
  text_description: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Produit;
