import { View, StyleSheet, ScrollView } from "react-native";
import ListImages from "../../components/ListImages";
import { favoriteSongs } from "../../assets/jsons/profile";
import MusicRankText from "../../components/MusicRankText";

export default function Grammy() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MusicRankText text="Confira as indicações do Grammy 2024" />
        <MusicRankText text="Álbum do Ano" />
        <ListImages data={favoriteSongs} />
        <MusicRankText text="Música do Ano" />
        <ListImages data={favoriteSongs} />
        <MusicRankText text="Gravação do Ano" />
        <ListImages data={favoriteSongs} />
        <MusicRankText text="Melhor Performance Solo de Pop" />
        <ListImages data={favoriteSongs} />
        <MusicRankText text="Melhor Álbum Vocal de Pop" />
        <ListImages data={favoriteSongs} />
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
});
