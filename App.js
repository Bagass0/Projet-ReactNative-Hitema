import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './Front/Accueil';
import Navbar from './Composants/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Accueil />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },

});
