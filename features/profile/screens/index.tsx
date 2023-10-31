import { ReactElement } from "react";
import { Image, ScrollView, Text } from "react-native";
import { appImages } from "../../../assets/images";
import ListImages from "../../../components/ListImages";
import MusicRankText from "../../../components/MusicRankText";
import { View } from "../../../components/Themed";
import { SocialMedia } from "../../../features/profile/components/SocialMedia";
import { favoriteAlbums } from "../../../features/profile/data/favorite-albums";
import { favoriteSongs } from "../../../features/profile/data/favorite-songs";
import { lastAlbumsReviews } from "../../../features/profile/data/last-albums-reviews";
import { lastSongsReviews } from "../../../features/profile/data/last-song-reviews";
import { styles } from "./styles";

export const ProfileTabScreen = (): ReactElement => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.perfil}>
          <Image source={appImages.profile.screen.bruno} style={styles.image} />
          <Text style={styles.nome}>Bruno Machado</Text>
          <View style={styles.icones}>
            <SocialMedia name="spotify" />
            <SocialMedia name="instagram" />
            <SocialMedia name="twitter" />
          </View>
          <View style={styles.numeros}>
            <View style={styles.numeroContainer}>
              <Text style={styles.numero}>83</Text>
              <Text style={styles.textoAvaliacoes}>músicas avaliadas</Text>
            </View>
            <View style={styles.numeroContainer}>
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
};
