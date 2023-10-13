import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import db from "../config";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";

function Gestion() {
  const navigation = useNavigation();
  const [produits, setProduits] = useState([]);
  const { isLoggedIn, currentUser } = useAuth();

  const handleModifier = () => {
    alert("J'ai pas eu le temps de finir 😞 ");
  }

  const handleSupprimer = () => {
    alert("J'ai pas eu le temps de finir  😞 ");
}

  useEffect(function () {
    getDocs(collection(db, "oeuvres "))
      .then(function (snapShot) {
        const data = [];
        snapShot.docs.map(function (doc) {
          data.push({ ...doc.data(), id: doc.id });
        });
        setProduits(data);
      });
  }, [])

  return (
    <SafeAreaView>
      {isLoggedIn && currentUser.role === true ? (
        <FlatList
          data={produits}
          renderItem={function ({ item }) {
            return (
              <View style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('Produit', { id: item.id, image: item.image, nom: item.nom, description: item.description, auteur: item.auteur })}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.image, width: 200, height: 200 }}
                      resizeMode="cover"
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.produitInfo}>
                  <Text style={styles.produitTitre}>{item.nom}</Text>
                  <View>
                    <TouchableOpacity style={styles.buttonModifier} onPress={handleModifier}>
                        <Text style={styles.buttonTextModifier}>Modifier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSupprimer} onPress={handleSupprimer}>
                        <Text style={styles.buttonTextModifier}>Supprimer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      ) : (null)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonModifier: {
    backgroundColor: "#cfc021",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
  },
  buttonSupprimer: {
    backgroundColor: "#ff4a4a",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5
  },
  buttonTextModifier: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
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
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    borderWidth: 3,
    borderBottomWidth: 0,
    borderColor: 'black', 
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  produitInfo: {
    padding: 10,
    borderWidth: 3,
    borderTopWidth: 0,
  },
  produitTitre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    justifyContent: 'space-around',
  },
  produitPrix: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Gestion;
