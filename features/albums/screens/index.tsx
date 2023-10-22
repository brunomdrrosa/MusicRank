import { ReactElement } from "react";
import { ScrollView, Text, View } from "react-native";
import ListWithProgress from "../../../components/ListWithProgress";
import { albumsNotStarted } from "../data/albums-not-started";
import { albumsStarted } from "../data/albums-started";
import { styles } from "./styles";

export const AlbumsTabScreen = (): ReactElement => {
  return (
    <ScrollView>
      <View style={styles.listeningView}>
        <Text style={styles.listeningText}>OUVINDO</Text>
      </View>
      <ListWithProgress data={albumsStarted} />
      <View style={styles.listeningViewTwo}>
        <Text style={styles.listeningText}>NÃO INICIADOS</Text>
      </View>
      <ListWithProgress data={albumsNotStarted} />
    </ScrollView>
  );
};
