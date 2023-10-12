import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native"
import React, { useEffect, useState } from 'react';
import db from "../config"
import { getDocs, collection } from "firebase/firestore"

function Accueil({navigation}) {
  const [produits, setProduits] = useState([]);
  const [updateList , setUpdateList] = useState(false);

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
            <TouchableOpacity onPress={() => navigation.navigate('Produit', { id: item.id, image: item.image, nom: item.nom, description: item.description, auteur: item.auteur, dt_creation: item.dt_creation} )}>
              <Image
                style={styles.cardImage}
                source={{ uri: item.image , width: 200 , height : 200 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.produitInfo}>
              <Text style={styles.produitTitre}>{item.nom}</Text>
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
  produitTitre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  produitPrix: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Accueil;