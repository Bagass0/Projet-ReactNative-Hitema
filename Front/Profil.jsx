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

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          {currentUser.role ? (
            <Text style={styles.text}>Vous êtes Administrateur</Text>
          ) : (
            <Text style={styles.text}>Vous êtes Redacteur</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Profil;
