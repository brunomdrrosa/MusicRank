import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

const data = [
  {
    id: "1",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/50/ee/2150ee84-62c3-4190-7dfa-da30abd98ac8/23UM1IM09862.rgb.jpg/600x600bf-60.jpg",
  },
  {
    id: "2",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/86/cc/00/86cc001c-2efc-9ebb-8290-17f4f3ba3e4a/23UMGIM08087.rgb.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "3",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5b/a7/ea/5ba7eac4-dbbd-8ebf-7ec4-92ee97a442c3/196871436434.jpg/600x600bf-60.jpg",
  },
  {
    id: "4",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9e/0d/17/9e0d17e0-c068-fbd9-fd85-610cc87c86aa/23UMGIM71511.rgb.jpg/1200x1200bb.jpg",
  },
  {
    id: "5",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ce/36/7f/ce367f3d-2a4f-46ee-1434-e3fbb52f1fc8/093624849797.jpg/1200x1200bb.jpg",
  },
  {
    id: "6",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "7",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "8",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/7d/b0/097db06f-8403-3cf7-7510-139e570ca66b/196871341882.jpg/1200x1200bb.jpg",
  },
  {
    id: "9",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5a/3f/8e/5a3f8ec5-be0d-580c-6f2e-8634121d5e68/22UM1IM01116.rgb.jpg/600x600bf-60.jpg",
  },
  {
    id: "10",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/1200x1200bb.jpg",
  },
];

export default function Grammy() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.albumText}>Álbum do ano</Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        />
        <Text style={styles.albumText}>Música do ano</Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        />
        <Text style={styles.albumText}>Gravação do ano</Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  albumText: {
    color: "white",
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 15,
    marginRight: 10,
    borderRadius: 15,
  },
});
