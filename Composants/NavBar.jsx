import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const navigation = useNavigation();
  const { isLoggedIn } = useAuth();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Accueil')}
      >
        <Text style={styles.navText}>Accueil</Text>
      </TouchableOpacity>

      {isLoggedIn ? (
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Profil')}
        >
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
      ) : (

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Connexion')}
        >
          <Text style={styles.navText}>Connexion</Text>
        </TouchableOpacity>
      )}  
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-betwween',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  navText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Navbar;
