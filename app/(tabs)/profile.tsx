import { ScrollView, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import ListImages from "../../components/ListImages";
import MusicRankText from "../../components/MusicRankText";
import { showsCity } from "../../assets/jsons/shows";
import { favoriteAlbums, favoriteSongs, lastAlbumsReviews, lastSongsReviews } from "../../assets/jsons/profile";

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
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
});
