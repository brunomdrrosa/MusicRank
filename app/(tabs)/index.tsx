import { ScrollView, View, StyleSheet, Text } from "react-native";
import ListWithProgress from "../../components/ListWithProgress";
import { albumsNotStarted, albumsStarted } from "../../assets/jsons/home";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.listeningView}>
        <Text style={styles.listeningText}>OUVINDO</Text>
      </View>
      <ListWithProgress data={albumsStarted} />
      <View style={styles.listeningViewTwo}>
        <Text style={styles.listeningText}>NÃO INICIADOS</Text>
      </View>
      <ListWithProgress data={albumsNotStarted} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listeningView: {
    left: "38%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#373737",
    borderRadius: 10,
    padding: 5,
    width: 100,
  },
  listeningViewTwo: {
    left: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#373737",
    borderRadius: 10,
    padding: 5,
    width: 140,
  },
  listeningText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
