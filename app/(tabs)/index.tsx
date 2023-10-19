import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

interface ImageData {
  id: number;
  uri: string;
  progress: number;
}

const imageArray: ImageData[] = [
  {
    id: 1,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/1200x1200bf-60.jpg",
    progress: 0.9,
  },
  {
    id: 2,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/1200x1200bb.jpg",
    progress: 0.8,
  },
  {
    id: 3,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/1200x1200bb.jpg",
    progress: 0.5,
  },
  {
    id: 4,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4b/42/21/4b422136-2cfd-222c-ca7c-7573bf23139c/886449537204.jpg/1200x1200bb.jpg",
    progress: 0.9,
  },
  {
    id: 5,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/1200x1200bf-60.jpg",
    progress: 0.15,
  },
  {
    id: 6,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/df/60/00/df600071-c5c7-24e7-e4d7-1a6b71fa44e7/190296529818.jpg/1200x1200bb.jpg",
    progress: 0.8,
  },
  {
    id: 7,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/1200x1200bb.jpg",
    progress: 0.2,
  },
  {
    id: 8,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f5/7a/9e/f57a9e6a-31c8-0784-dfbd-4a0120bfd4af/21UMGIM17517.rgb.jpg/1200x1200bf-60.jpg",
    progress: 0.5,
  },
];

const imageArrayNotStarted: ImageData[] = [
  {
    id: 1,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/1200x1200bf-60.jpg",
    progress: 0.9,
  },
  {
    id: 2,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/1200x1200bb.jpg",
    progress: 0.8,
  },
  {
    id: 3,
    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/1200x1200bb.jpg",
    progress: 0.5,
  },
];

export default function TabOneScreen() {
  const numColumns = 3; // Número de imagens por linha

  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
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
    <>
      <View style={styles.listeningView}>
        <Text style={styles.listeningText}>OUVINDO</Text>
      </View>
      <FlatList
        data={imageArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
      <View style={styles.listeningViewTwo}>
        <Text style={styles.listeningText}>NÃO INICIADOS</Text>
      </View>
    </>
  );
}

const windowWidth = Dimensions.get("window").width;
const imageWidth = windowWidth / 3 - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  listeningView: {
    left: "38%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#373737",
    borderRadius: 10,
    padding: 5,
    width: 100,
  },
  listeningViewTwo: {
    marginBottom: 200,
    left: "34%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#373737",
    borderRadius: 10,
    padding: 5,
    width: 140,
  },
  listeningText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
