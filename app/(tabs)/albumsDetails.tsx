import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AlbumDetailsScreen: React.FC = () => {
  const route = useRoute();
  const { data } = route.params;

  const renderStars = (review: number, song: string) => {
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
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.progressBar}>
          <View
            style={[styles.progressGreen, { width: `${data.progress * 100}%` }]}
          />
          <View
            style={[
              styles.progressGray,
              { width: `${(1 - data.progress) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.text}>{data.albumName}</Text>
        <Text style={styles.artist}>{data.artist}</Text>
        {data.album.map((songInfo, index) => (
          <TouchableOpacity activeOpacity={0.6}>
            <View key={index} style={styles.divMusic}>
              <Image source={data.image} style={styles.imageMusic} />
              <View style={styles.divMusic2}>
                <Text style={styles.songName}>{songInfo.song}</Text>
                <Text style={styles.artistName}>{data.artist}</Text>
                {renderStars(songInfo.rating, songInfo.song)}
                {songInfo.listened ? (
                  <View style={styles.bordaIcone}>
                    <FontAwesome
                      size={30}
                      name="check"
                      color="white"
                      style={styles.icon}
                    />
                  </View>
                ) : (
                  <View style={styles.bordaIcone2}>
                    <FontAwesome
                      size={30}
                      name="check"
                      color="white"
                      style={styles.icon}
                    />
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default AlbumDetailsScreen;

const windowWidth = Dimensions.get("window").width;
const imageWidth = windowWidth / 3 - 20;

const styles = StyleSheet.create({
  bordaIcone: {
    width: 40,
    height: 40,
    backgroundColor: "#00ba00",
    left: 180,
    position: "relative",
    zIndex: 1,
    borderRadius: 50,
  },
  bordaIcone2: {
    width: 40,
    height: 40,
    backgroundColor: "#888888",
    left: 180,
    position: "relative",
    zIndex: 1,
    borderRadius: 50,
  },
  icon: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 2,
  },
  divMusic: {
    flexDirection: "row",
    width: 380,
    height: 117,
    backgroundColor: "#373737",
    borderRadius: 20,
    marginBottom: 20,
  },
  divMusic2: {
    flexDirection: "column",
    justifyContent: "center",
    bottom: 50,
    left: 20,
  },
  imageMusic: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center"
  },
  songName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    top: 48,
    maxWidth: 170,
    marginTop: 30,
  },
  artist: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  artistName: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    top: 45,
  },
  albumName: {
    color: "white",
    fontSize: 24,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 10,
    marginTop: 60,
  },
  progressBar: {
    width: 118,
    position: "absolute",
    bottom: 8,
    left: 147,
    top: 162,
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
  divStars: {
    flexDirection: "row",
    top: 55,
  },
});
