import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AlbumDetailsScreen: React.FC = () => {
  const route = useRoute();
  const { albumName } = route.params;

  console.log(albumName);
  if (!route || !route.params) {
    return (
      <View>
        <Text style={styles.text}>Nome do Álbum:</Text>
        <Text style={styles.albumName}>Nome do Álbum Não Encontrado</Text>
      </View>
    );
  }

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
