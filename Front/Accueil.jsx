import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image, FlatList } from "react-native"
import React, { useEffect, useState } from 'react';
import Navbar from '../Composants/NavBar';
import db from "../config"
import { deleteDoc , doc , getDocs, collection } from "firebase/firestore"

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

  const supprimer = (id) => {
    deleteDoc(doc(db , "etudiant" , id)).then(function(){
      setUpdateList(!updateList);
    })
}

  const handleClickProfil = function(){
    navigation.navigate("profil")
  }

  const handleClickConnexion = function(){
    navigation.navigate("formcreate")
  }

  return (
    <View>
      <Navbar/>
      <FlatList 
        data={produits}
        renderItem={function({item}){
        return <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Produit', { id: item.id })}>
              <Image
                style={styles.cardImage}
                source={{ uri: item.image , width: 200 , height : 200 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.produitInfo}>
              <Text style={styles.produitTitre}>{item.nom}</Text>
              <Text style={styles.produitPrix}>{item.description}</Text>
            </View>
          </View>
        }}
      />
    </View>
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