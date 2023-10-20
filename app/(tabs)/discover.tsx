import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import SearchInput from "../../components/SearchInput";
import ListImages from "../../components/ListImages";
import GrammyButton from "../../components/GrammyButton";
import FriendsReviews from "../../components/FriendsReviews";
import MusicRankText from "../../components/MusicRankText";
import { albuns, friendsReviews, musicas } from "../../assets/jsons/discover";

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
