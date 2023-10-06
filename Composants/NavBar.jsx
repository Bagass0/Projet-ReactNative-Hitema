import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('Accueil')}>
        <Text style={styles.navText}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('Profil')}>
        <Text style={styles.navText}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Produit')}>
        <Text style={styles.navText}>Paramètres</Text>
      </TouchableOpacity>
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
