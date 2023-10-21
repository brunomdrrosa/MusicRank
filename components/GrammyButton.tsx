import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";

const GrammyButton = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.6}>
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
      <Image
        source={require("../assets/images/discover/new.png")}
        style={styles.topLeftImage}
      />
    </>
  );
};

export default GrammyButton;

const styles = StyleSheet.create({
  gramophoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#373737",
    marginRight: 20,
    height: 100,
    borderRadius: 10,
  },
  gramophoneImage: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 15,
  },
  gramophoneText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: "80%",
    textAlign: "center",
  },
  topLeftImage: {
    position: "absolute",
    top: 505,
    right: 355,
    width: 50,
    height: 50,
  },
});
