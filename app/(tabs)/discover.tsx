import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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

const dataSongs = [
  {
    id: "1",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/23/07/92/23079247-25be-3098-ef53-78e7d0fe7406/196871341653.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "2",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/7b/8b/2a7b8b05-e5b0-bbef-c0a5-ebd27254e501/196871437684.jpg/1200x1200bb.jpg",
  },
  {
    id: "3",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fd/a3/83/fda38397-c955-a6a3-123b-b25a0b30a869/23UM1IM30516.rgb.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "4",
    image:
      "https://www.udiscovermusic.com/wp-content/uploads/2023/06/olivia-rodrigo-vampire-artwork.jpg",
  },
  { id: "5", image: "https://pbs.twimg.com/media/Fw_VqLtXsBQtzrk.jpg:large" },
  {
    id: "6",
    image:
      "https://media.pitchfork.com/photos/64d78bf694b0ef4633cc8380/1:1/w_1280,h_1280,c_limit/Olivia-Rodrigo-Bad-Idea-Right.jpg",
  },
  {
    id: "7",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7d/64/76/7d64761e-a9b3-6754-8ae1-b457338beead/23UMGIM77779.rgb.jpg/1200x1200bb.jpg",
  },
  {
    id: "8",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2e/a7/75/2ea77552-aa74-8cf1-4765-0529f6080c26/23SYMIM03701.rgb.jpg/1200x1200bb.jpg",
  },
  {
    id: "9",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/37/21/45/37214531-57d0-b6d2-5dcd-0a4b6318d86f/23UMGIM91977.rgb.jpg/1200x1200bb.jpg",
  },
  {
    id: "10",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/600x600bf-60.jpg",
  },
];

const friendsReviews = [
  {
    id: "1",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6f/9c/f1/6f9cf14a-9a03-7dca-5969-787c928a71bd/886448800347.jpg/1200x1200bf-60.jpg",
    friendPicture: require("../../assets/images/digo.jpg"),
    review: 5,
  },
  {
    id: "2",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/f0/31/b2/f031b2b2-bcf0-6102-426f-e0b2c7437415/dj.vrgpwamf.jpg/1200x1200bf-60.jpg",
    friendPicture: require("../../assets/images/miguel.jpg"),
    review: 5,
  },
  {
    id: "3",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/52/aa/85/52aa851f-15b7-6322-f91f-df84b15b7b19/190295978044.jpg/600x600bf-60.jpg",
    friendPicture: require("../../assets/images/vitor.jpg"),
    review: 5,
  },
  {
    id: "4",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bc/b1/45/bcb145c1-7038-7ba4-5f78-3fcf70a61035/mzi.nxeqffhl.jpg/600x600bf-60.jpg",
    friendPicture: require("../../assets/images/rian.jpg"),
    review: 5,
  },
  {
    id: "5",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/6c/b1/c56cb16a-52c3-33b5-5189-6c65028001fb/19UM1IM00404.rgb.jpg/1200x1200bf-60.jpg",
    friendPicture: require("../../assets/images/damage.jpg"),
    review: 4,
  },
];

export default function Discover() {
  const renderStars = (review: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review) {
        stars.push(
          <FontAwesome
            size={18}
            name="star"
            color="yellow"
            style={{ marginRight: 2 }}
          />
        );
      } else {
        stars.push(
          <FontAwesome
            size={18}
            name="star"
            color="gray"
            style={{ marginRight: 2 }}
          />
        );
      }
    }
    return <View style={styles.divStars}>{stars}</View>;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={32} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Buscar álbuns e músicas"
            placeholderTextColor="#888888"
          />
        </View>
        <Text style={styles.albumText}>Álbuns em alta</Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        />
        <Text style={styles.albumText}>Músicas em alta</Text>
        <FlatList
          data={dataSongs}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        />
        <View style={styles.gramophoneContainer}>
          <Image
            source={require("../../assets/images/gramophone.png")}
            style={styles.gramophoneImage}
          />
          <Text style={styles.gramophoneText}>
            Avalie as músicas indicadas ao Grammy Awards 2024
          </Text>
        </View>
        <Image
          source={require("../../assets/images/new.png")}
          style={styles.topLeftImage}
        />
        <Text style={styles.albumText}>
          Últimas avaliações de quem você segue
        </Text>
        <FlatList
          data={friendsReviews}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.divReview}>
                <Image source={item.friendPicture} style={styles.friendImage} />
                {renderStars(item.review)}
              </View>
            </View>
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
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#373737",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 12,
    flexDirection: "row",
    marginRight: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#888888",
    fontSize: 16,
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
  friendImage: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 50,
  },
  divReview: {
    flexDirection: "row",
  },
  divStars: {
    flexDirection: "row",
    marginTop: 15,
  },
});
