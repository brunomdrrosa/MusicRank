import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 20,
  },

  perfil: {
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
  },

  nome: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },

  icones: {
    flexDirection: "row",
  },

  numeros: {
    flexDirection: "row",
    gap: 24,
    maxWidth: "auto",
  },

  numeroContainer: {
    marginTop: 24,
    marginRight: 16,
    alignItems: "center",
  },

  numero: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  textoAvaliacoes: {
    color: "white",
    fontSize: 16,
  },
});
