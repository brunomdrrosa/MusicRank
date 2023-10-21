import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

interface ListImagesProps {
  data: { id: number; image: string; progress: number }[];
}

const ListWithProgress = ({ data }: ListImagesProps) => {
  const numColumns = 3;

  const renderItem = ({
    item,
  }: {
    item: { id: string; image: string; progress: number };
  }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity activeOpacity={0.6}>
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
