import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
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
    const starsStyle = song.length >= 20 ? styles.divStarsLong : styles.divStars;

    return <View style={starsStyle}>{stars}</View>;
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.imageContainer}>
          <Image source={data.image} style={styles.image} />
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressGreen,
                { width: `${data.progress * 100}%` },
              ]}
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
            <View key={index} style={styles.divMusic}>
              <Image source={data.image} style={styles.imageMusic} />
              <View style={styles.divMusic2}>
                <Text
                  style={
                    songInfo.song.length > 20
                      ? styles.longSongName
                      : styles.songName
                  }
                >
                  {songInfo.song}
                </Text>
                <Text
                  style={
                    songInfo.song.length > 20
                      ? styles.longArtistName
                      : styles.artistName
                  }
                >
                  {data.artist}
                </Text>
                {renderStars(songInfo.rating, songInfo.song)}
              </View>
            </View>
          ))}
          <View style={styles.finalDiv}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlbumDetailsScreen;

const windowWidth = Dimensions.get("window").width;
const imageWidth = windowWidth / 3 - 20;

const styles = StyleSheet.create({
  finalDiv: {
    marginBottom: 100,
  },
  divMusic: {
    flexDirection: "row",
    width: 380,
    backgroundColor: "#373737",
    top: 80,
    borderRadius: 20,
    marginBottom: 20,
  },
  divMusic2: {
    flexDirection: "column",
    bottom: 30,
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
    top: 60,
  },
  songName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 48,
    maxWidth: 240,
  },
  longSongName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 40,
    maxWidth: 240,
  },
  artist: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 60,
  },
  artistName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    top: 45,
  },
  longArtistName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    top: 40,
  },
  albumName: {
    color: "white",
    fontSize: 24,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    margin: 8,
    borderRadius: 10,
    top: 50,
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
  imageContainer: {
    alignItems: "center",
  },
  divStars: {
    flexDirection: "row",
    top: 55,
  },
  divStarsLong: {
    flexDirection: "row",
    top: 45,
  },
});
