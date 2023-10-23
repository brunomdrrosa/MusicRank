import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";

type AlbumDetailsRouteParams = {
  albumName: string;
  songs: {
    song: string;
    rating: number;
  }[];
};

const AlbumDetailsScreen: React.FC<{
  route: RouteProp<Record<string, AlbumDetailsRouteParams>, string>;
}> = ({ route }) => {
  const { albumName } = route.params;
  console.log(route)
  console.log(route.params)
  console.log(albumName)

  return (
    <View>
      <Text>Nome do Álbum: {albumName}</Text>
    </View>
  );
};

export default AlbumDetailsScreen;
