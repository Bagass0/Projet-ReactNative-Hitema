import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ isLoggedIn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Accueil')}
      >
        <Text style={styles.navText}>Accueil</Text>
      </TouchableOpacity>
      {isLoggedIn && (
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Profil')}
        >
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
      )}
      {!isLoggedIn && (
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  navText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Navbar;
