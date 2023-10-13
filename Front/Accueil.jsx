import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import db from "../config"
import { getDocs, collection } from "firebase/firestore"

function Accueil() {
  const navigation = useNavigation();
  const [produits, setProduits] = useState([]);

  useEffect( function(){ 

    getDocs(collection(db, "oeuvres "))
    .then(function(snapShot){
      
      const data = [];


      snapShot.docs.map(function(doc){ 
        data.push({...doc.data() , id : doc.id}) 
      })

      setProduits(data);
    })

} , [])

  return (
    <SafeAreaView>
      <FlatList 
        data={produits}
        renderItem={function({item}){
        return <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Produit', { id: item.id, image: item.image, nom: item.nom, description: item.description, auteur: item.auteur} )}>
              <Image
                style={styles.cardImage}
                source={{ uri: item.image , width: 200 , height : 200 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.produitInfo}>
              <View style={styles.produitInfo2}>
                <Text style={styles.produitTitre}>{item.nom}</Text>
                <Text style={styles.produitTitre2}>{item.auteur}</Text>
              </View>
            </View>
          </View>
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.5,
    marginTop: 16,
    marginRight: 8,
    marginLeft: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  produitInfo: {
    padding: 10,
    backgroundColor: 'white',
  },
  produitInfo2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  produitTitre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    justifyContent: 'space-around',
  },
  produitTitre2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    justifyContent: 'space-around',
    color: '#706f6f',
  },
});

export default Accueil;