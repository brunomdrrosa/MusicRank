import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GrammyButton = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.6}>
        <Image
          source={require("../assets/images/discover/new.png")}
          style={styles.topLeftImage}
        />
        <View style={styles.gramophoneContainer}>
          <Image
            source={require("../assets/images/discover/gramophone.png")}
            style={styles.gramophoneImage}
          />
          <Text style={styles.gramophoneText}>
            Avalie as músicas indicadas ao Grammy Awards 2024
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default GrammyButton;

const styles = StyleSheet.create({
  gramophoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    backgroundColor: "#373737",
    marginRight: 20,
    borderRadius: 10,
    position: "relative",
    padding: 16,
    gap: 16,
  },
  gramophoneImage: {
    width: 64,
    height: 64,
  },
  gramophoneText: {
    color: "white",
    fontSize: 16,
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  topLeftImage: {
    position: "absolute",
    width: 50,
    left: -20,
    top: 10,
    zIndex: 999,
    height: 50,
  },
});
