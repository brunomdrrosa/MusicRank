import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FriendsReviews from "../../components/FriendsReviews";
import GrammyButton from "../../components/GrammyButton";
import ListImages from "../../components/ListImages";
import MusicRankText from "../../components/MusicRankText";
import SearchInput from "../../components/SearchInput";
import { albuns } from "../../data/discover/albuns";
import { friendsReviews } from "../../data/discover/friends-reviews";
import { musicas } from "../../data/discover/musicas";

export default function Discover() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchInput placeholder="Buscar álbuns e músicas" />
        <MusicRankText text="Álbuns em alta" />
        <ListImages data={albuns} />
        <MusicRankText text="Músicas em alta" />
        <ListImages data={musicas} />
        <GrammyButton />
        <MusicRankText text="Últimas avaliações de quem você segue" />
        <FriendsReviews data={friendsReviews} />
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
