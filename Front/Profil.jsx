import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import db from "../config";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import { useNavigation } from "@react-navigation/native";

function Profil() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [userData, setUserData] = useState(['']);
  const navigation = useNavigation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate("Accueil");
  };

  useEffect( () => { 

    getDocs(collection(db, "membres"))
    .then(function(snapShot){
      
      const data = [];


      snapShot.docs.map(function(doc){ 
        data.push({...doc.data() , id : doc.id}) 
      })

      setUserData(data);
    })

} , [])

  return (
    <View>
    {
        isLoggedIn ? 
        (
            <View style={styles.container}>
            {
                userData.map((user, index) => (
                <View key={index}>
                    {
                        user.role === true ? 
                        (
                            <Text key={index}>Vous êtes Administrateur</Text>
                        ) : 
                        (
                            <Text key={index}>Vous êtes Rédacteur</Text>
                        )
                    }
                </View>
                ) )
            }
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
      ) : 
      (null)
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: "stretch", // Prend toute la largeur disponible
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Profil;
