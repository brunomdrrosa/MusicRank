import { FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

interface ListImagesProps {
  data: { id: string; image: string }[];
}

const ListImages = ({ data }: ListImagesProps) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: { id: string }) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={ item.image } style={styles.image} />
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
