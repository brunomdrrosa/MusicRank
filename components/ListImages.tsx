import { FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface AlbumStarted {
  id: string;
  albumName: string;
  artist: string;
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

const ListImages = ({ data }: ListWithProgressProps) => {
  const navigation = useNavigation();

  const handleImagePress = (item: AlbumStarted) => {
    if (item.albumName) {
      navigation.navigate("albumsDetails", {
        data: {
          id: item.id,
          albumName: item.albumName,
          artist: item.artist,
          image: item.image,
          progress: item.progress,
          album: item.album,
        },
      });
    }
  };

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: { id: string }) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleImagePress(item)}
        >
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
      )}
    />
  );
};

export default ListImages;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 15,
    marginRight: 10,
    borderRadius: 15,
  },
});
