import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

function Produit({ route }) {
  // Vérifiez si route.params est défini
  if (!route.params || !route.params.image) {
    return <Text>Aucune image spécifiée</Text>;
  }

  // Récupérez le paramètre "image" de la navigation
  const { image, nom, description, auteur, dt_creation } = route.params;

  return ( 
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text_titre}>{nom}</Text>
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="cover"
        />
        <View style={ styles.container_auteur }>
          <Text style={styles.text_info_auteur} >Auteur - </Text>
          <Text style={styles.text_auteur} >{ auteur }</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.text_description}>{ description }</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    marginTop: 40,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    backgroundColor: '#ffefd1', // Couleur de fond
    padding: 10, // Espacement intérieur
    borderRadius: 10, // Coins arrondis
    marginBottom: 35,
  },
  text_description: {
    fontSize: 18,
  },
  container_auteur: {
    flexDirection: 'row',
  },
  text_auteur: {
    color: '#302018',
    fontWeight: 'normal',
  },
  text_info_auteur: {
    color: '#303030',
    fontWeight: 'bold',
  }
});

export default Produit;
