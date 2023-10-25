import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

const AlbumDetailsScreen: React.FC = ({ route }) => {
  if (!route || !route.params) {
    return (
      <View>
        <Text style={styles.text}>Nome do Álbum:</Text>
        <Text style={styles.albumName}>Nome do Álbum Não Encontrado</Text>
      </View>
    );
  }

  const { albumName } = route.params;
  console.log(route)
  console.log(route.params)
  console.log(albumName)

  return (
    <View>
      <Text style={styles.text}>Nome do Álbum:</Text>
      <Text style={styles.albumName}>{albumName}</Text>
    </View>
  );
};

export default AlbumDetailsScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 32,
    top: 100,
  },
  albumName: {
    color: "white",
    fontSize: 24,
  },
});
