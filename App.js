import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Front/Accueil';
import Produit from './Front/Produit';
import Profil from './Front/Profil';
import Navbar from './Composants/NavBar';

export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <Navbar/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Accueil} name="Accueil" />
        <Stack.Screen component={Produit} name="Produit" />
        <Stack.Screen component={Profil} name="Profil" />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },

});
