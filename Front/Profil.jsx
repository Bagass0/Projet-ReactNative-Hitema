import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../Context/AuthContext";
import { useNavigation } from "@react-navigation/native";

function Profil() {
  const { isLoggedIn, setIsLoggedIn, currentUser } = useAuth();

  const navigation = useNavigation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate("Accueil");
  };

  const handleGestion = () => {
    navigation.navigate("Gestion");
  };

  const handleAccueil = () => {
    navigation.navigate("Accueil");
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.container2}>
          {currentUser.role ? (
            <View>
              <Text style={styles.text}>Vous êtes Administrateur</Text>

              <TouchableOpacity style={styles.button2} onPress={handleGestion}>
                  <Text style={styles.buttonText2}>Gestion des oeuvres</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.text}>Vous êtes Rédacteur</Text>
              <TouchableOpacity style={styles.button2} onPress={handleAccueil}>
                  <Text style={styles.buttonText2}>Regarder les oeuvres</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  container2: {
    justifyContent: "space-between",
    backgroundColor: '#a8a7a7',
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'white',
  },
  button: {
    backgroundColor: "#ff4a4a",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 100,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  button2: {
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
  buttonText2: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Profil;
