import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const data = [
  {
    id: "1",
    image: "https://i.imgur.com/LLBni2i.png",
  },
  {
    id: "2",
    image:
      "https://www.evanescence.com/wp-content/uploads/2023/06/EV-LATAM-8-Dates.jpg",
  },
  {
    id: "3",
    image:
      "https://www.eventim.com.br/campaign/fileadmin/fm_br/campaigns/2023/paul-mccartney/pm-mainban-v4c.jpg",
  },
];

const dataSongs = [
  {
    id: "1",
    image: "https://i.scdn.co/image/ab6761610000e5ebc33cc15260b767ddec982ce8",
  },
  {
    id: "2",
    image: "https://i.scdn.co/image/ab6761610000e5ebd5cbf057a26d4642df9efc0b",
  },
  {
    id: "3",
    image: "https://i.scdn.co/image/ab6761610000e5ebbc611be88d151416dba687c8",
  },
];

const friendsReviews = [
  {
    id: "1",
    image:
      "https://www.opovo.com.br/_midias/jpg/2021/10/25/lollapalooza_2022_quando_sera_atracoes_valor_do_ingresso_como_comprar-17344909.jpg",
    friendPicture: require("../../assets/images/digo.jpg"),
    review: 4,
  },
  {
    id: "2",
    image: "https://musicult.com.br/wp-content/uploads/2022/09/coldplay.jpg",
    friendPicture: require("../../assets/images/rian.jpg"),
    review: 5,
  },
  {
    id: "3",
    image:
      "https://s3.us-east-1.amazonaws.com/busites_www/kissonline/og_image_eotr_au.jpg",
    friendPicture: require("../../assets/images/vitor.jpg"),
    review: 5,
  },
];

export default function Shows() {
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
            placeholder="Buscar shows e festivais"
            placeholderTextColor="#888888"
          />
        </View>
        <Text style={styles.albumText}>Shows em alta no Brasil</Text>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
        <Text style={styles.albumText}>Shows em alta em Porto Alegre</Text>
        <FlatList
          data={dataSongs}
          horizontal
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
        <Text style={styles.albumText}>
          Últimas shows frequentados por seus amigos
        </Text>
        <FlatList
          data={friendsReviews}
          horizontal
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
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
