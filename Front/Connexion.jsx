import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView } from 'react-native';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez ajouter la logique de connexion avec les données de l'utilisateur (email, mot de passe).
    // Par exemple, vous pouvez envoyer ces données à votre API backend pour l'authentification.

    // Exemple de validation simple
    if (email && password) {
      console.log('Utilisateur connecté avec :', email, password);
    } else {
      console.log('Veuillez saisir un e-mail et un mot de passe.');
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
