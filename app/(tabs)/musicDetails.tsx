import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const MusicDetailsScreen: React.FC = () => {
  const route = useRoute();
  const { data } = route.params;
  console.log(data);

  const renderStars = (review: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review) {
        stars.push(
          <FontAwesome
            size={40}
            name="star"
            color="yellow"
            style={{ marginRight: 22 }}
          />
        );
      } else {
        stars.push(
          <FontAwesome
            size={40}
            name="star"
            color="gray"
            style={{ marginRight: 22 }}
          />
        );
      }
    }
    return <View style={styles.divStars}>{stars}</View>;
  };

  return (
    <ScrollView>
      <View style={styles.container}></View>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.song}>{data.song}</Text>
      <Text style={styles.artista}>{data.artist}</Text>
      <Text style={styles.review}>AVALIAÇÃO</Text>
      <View style={styles.retangulo}>{renderStars(data.rating)}</View>
    </ScrollView>
  );
};

export default MusicDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
  },
  image: {
    width: "100%",
    height: 300,
    bottom: 220,
  },
  song: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    bottom: 220,
  },
  artista: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    bottom: 230,
  },
  review: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    bottom: 220,
  },
  addSong: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    bottom: 180,
    maxWidth: 350,
    left: 30,
  },
  retangulo: {
    width: 325,
    height: 70,
    backgroundColor: "#373737",
    bottom: 200,
    left: 40,
    borderRadius: 10,
  },
  divStars: {
    flexDirection: "row",
    left: 25,
    top: 15,
  },
});
