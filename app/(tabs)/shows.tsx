import { ScrollView, StyleSheet, View } from "react-native";
import FriendsReviews from "../../components/FriendsReviews";
import ListImages from "../../components/ListImages";
import MusicRankText from "../../components/MusicRankText";
import SearchInput from "../../components/SearchInput";
import { friendsReviews } from "../../data/shows/friends-reviews";
import { showsCity } from "../../data/shows/shows-city";
import { showsCountry } from "../../data/shows/shows-country";

export default function Shows() {
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
});
