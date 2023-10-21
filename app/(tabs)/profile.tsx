import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListImages from "../../components/ListImages";
import MusicRankText from "../../components/MusicRankText";
import { View } from "../../components/Themed";
import { favoriteAlbums } from "../../data/profile/favorite-albums";
import { favoriteSongs } from "../../data/profile/favorite-songs";
import { lastAlbumsReviews } from "../../data/profile/last-albums-reviews";
import { lastSongsReviews } from "../../data/profile/last-song-reviews";

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.perfil}>
          <Image
            source={require("../../assets/images/profile/bruno.jpg")}
            style={styles.image}
          />
          <Text style={styles.nome}>Bruno Machado</Text>
          <View style={styles.icones}>
            <TouchableOpacity activeOpacity={0.6}>
              <MaterialCommunityIcons
                name="spotify"
                size={30}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <MaterialCommunityIcons
                name="instagram"
                size={30}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <MaterialCommunityIcons
                name="twitter"
                size={30}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.numeros}>
              <Text style={styles.numero}>83</Text>
              <Text style={styles.textoAvaliacoes}>músicas avaliadas</Text>
              <Text style={styles.numero}>10</Text>
              <Text style={styles.textoAvaliacoes}>álbuns avaliados</Text>
            </View>
          </View>
        </View>
        <MusicRankText text="Últimas músicas avaliadas" />
        <ListImages data={lastSongsReviews} />
        <MusicRankText text="Músicas favoritas" />
        <ListImages data={favoriteSongs} />
        <MusicRankText text="Últimos álbuns avaliados" />
        <ListImages data={lastAlbumsReviews} />
        <MusicRankText text="Álbuns favoritos" />
        <ListImages data={favoriteAlbums} />
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 5,
    borderColor: "white",
  },
  perfil: {
    alignItems: "center",
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
  icon: {
    marginTop: 15,
    marginRight: 8,
  },
  numeros: {
    alignItems: "center",
    flexDirection: "column",
  },
  numero: {
    color: "white",
    marginTop: 20,
    fontSize: 44,
    fontWeight: "bold",
  },
  avaliacoes: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 110,
    textAlign: "center",
  },
  textoAvaliacoes: {
    color: "white",
    marginTop: 10,
    fontSize: 20,
  },
  mainContainer: {
    flexDirection: "row",
  },
});
