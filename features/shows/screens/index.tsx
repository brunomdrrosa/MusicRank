import { ReactElement } from "react";
import { ScrollView, View } from "react-native";
import FriendsReviews from "../../../components/FriendsReviews";
import ListImages from "../../../components/ListImages";
import MusicRankText from "../../../components/MusicRankText";
import SearchInput from "../../../components/SearchInput";
import { friendsReviews } from "../data/friends-reviews";
import { showsCity } from "../data/shows-city";
import { showsCountry } from "../data/shows-country";
import { styles } from "./styles";

export const ShowsTabScreen = (): ReactElement => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchInput placeholder="Buscar shows e festivais" />
        <MusicRankText text="Shows em alta no Brasil" />
        <ListImages data={showsCountry} />
        <MusicRankText text="Shows em alta em Porto Alegre" />
        <ListImages data={showsCity} />
        <MusicRankText text="Últimas shows frequentados por seus amigos" />
        <FriendsReviews data={friendsReviews} />
      </View>
    </ScrollView>
  );
};
