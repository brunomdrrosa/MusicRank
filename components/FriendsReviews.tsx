import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface FriendsReviews {
  data: { id: string; image: string; friendPicture: string; review: number }[];
}

const FriendsReviews = ({ data }: FriendsReviews) => {
  const renderStars = (review: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review) {
        stars.push(
          <FontAwesome
            size={18}
            name="star"
            color="yellow"
            style={{ marginRight: 2 }}
          />
        );
      } else {
        stars.push(
          <FontAwesome
            size={18}
            name="star"
            color="gray"
            style={{ marginRight: 2 }}
          />
        );
      }
    }
    return <View style={styles.divStars}>{stars}</View>;
  };

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: { id: string }) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.divReview}>
            <Image source={item.friendPicture} style={styles.friendImage} />
            {renderStars(item.review)}
          </View>
        </View>
      )}
    />
  );
};

export default FriendsReviews;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 15,
    marginRight: 10,
    borderRadius: 15,
  },
  divReview: {
    flexDirection: "row",
  },
  divStars: {
    flexDirection: "row",
    marginTop: 15,
  },
  friendImage: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 50,
  },
});
