import React, { ReactElement } from "react";
import { ScrollView, View } from "react-native";
import FriendsReviews from "../../../components/FriendsReviews";
import GrammyButton from "../../../components/GrammyButton";
import ListImages from "../../../components/ListImages";
import MusicRankText from "../../../components/MusicRankText";
import SearchInput from "../../../components/SearchInput";
import { friendsReviews } from "../../../features/discover/data/friends-reviews";
import { albuns } from "../data/albuns";
import { musicas } from "../data/musicas";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const DiscoverTabScreen = (): ReactElement => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchInput placeholder="Buscar álbuns e músicas" />
        <MusicRankText text="Álbuns em alta" />
        <ListImages data={albuns} />
        <MusicRankText text="Músicas em alta" />
        <ListImages data={musicas} />
        <GrammyButton
          onPress={() => {
            navigation.navigate("grammy" as never);
          }}
        />
        <MusicRankText text="Últimas avaliações de quem você segue" />
        <FriendsReviews data={friendsReviews} />
      </View>
    </ScrollView>
  );
};
