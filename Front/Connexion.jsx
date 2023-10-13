import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView } from 'react-native';
import db from "../config";
import { getDocs, collection } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../Context/AuthContext';

const Connexion = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(['']);
  const { setIsLoggedIn, updateCurrentUser } = useAuth();

  useEffect( function(){ 

    getDocs(collection(db, "membres"))
    .then(function(snapShot){
      
      const data = [];


      snapShot.docs.map(function(doc){ 
        data.push({...doc.data() , id : doc.id}) 
      })

      setUserData(data);
    })

} , [])

const handleLogin = () => {
  if (email && password) {
      const user = userData.find(user => user.email === email && user.password === password);
      if(user) {
        setIsLoggedIn(true);
        updateCurrentUser(user.id, user.email, user.password, user.role);
        navigation.navigate('Accueil');
      }
      else {
        alert("Mauvais e-mail ou mot de passe.");
      }
  } 
  else {
      alert('Veuillez saisir un e-mail et un mot de passe.');
  }
};


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Musée Bagasso</Text>
      <View style={styles.container_input}>
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
      </View>  
      <Button title="Se connecter" onPress={handleLogin} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Ajout d'un fond blanc
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container_input: {
    width: 250,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%', // Remplissage complet du conteneur parent
  },
});

export default Connexion;
