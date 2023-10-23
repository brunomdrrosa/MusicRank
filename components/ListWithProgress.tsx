import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface AlbumStarted {
  id: string;
  albumName: string;
  image: string;
  progress: number;
  album: {
    song: string;
    listened: boolean;
    rating: number;
  }[];
}

interface ListWithProgressProps {
  data: AlbumStarted[];
}

interface AlbumDetailsRouteParams {
  albumName: string;
  songs: { song: string; rating: number }[];
}

const ListWithProgress = ({ data }: ListWithProgressProps) => {
  const numColumns = 3;
  const navigation = useNavigation();

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      albumName: string;
      image: string;
      progress: number;
      album: {
        song: string;
        listened: boolean;
        rating: number;
      }[];
    };
  }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate("albumsDetails", {
            albumName: "teste",
          });
        }}
      >
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.progressBar}>
        <View
          style={[styles.progressGreen, { width: `${item.progress * 100}%` }]}
        />
        <View
          style={[
            styles.progressGray,
            { width: `${(1 - item.progress) * 100}%` },
          ]}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

export default ListWithProgress;

const windowWidth = Dimensions.get("window").width;
const imageWidth = windowWidth / 3 - 20;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    margin: 8,
    borderRadius: 10,
  },
  progressBar: {
    width: 118,
    position: "absolute",
    bottom: 8,
    left: 8,
    height: 15,
    flexDirection: "row",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressGreen: {
    height: "100%",
    backgroundColor: "#25DF64",
  },
  progressGray: {
    height: "100%",
    backgroundColor: "#888888",
  },
});
