import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './Context/AuthContext';
import Accueil from './Front/Accueil';
import Produit from './Front/Produit';
import Profil from './Front/Profil';
import Connexion from './Front/Connexion';
import Navbar from './Composants/NavBar';
import Gestion from './Front/Gestion';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Accueil} name="Accueil" />
          <Stack.Screen component={Produit} name="Produit" />
          <Stack.Screen component={Profil} name="Profil" />
          <Stack.Screen component={Connexion} name="Connexion" />
          <Stack.Screen component={Gestion} name="Gestion" />
        </Stack.Navigator>
        <View style={styles.container}>
          <Navbar />
        </View>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8, // Ajout d'une élévation pour que la Navbar soit au-dessus du contenu
  },
});
