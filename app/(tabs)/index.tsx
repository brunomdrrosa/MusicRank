import { FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';

interface ImageData {
  id: number;
  uri: string;
}

const imageArray: ImageData[] = [
  { id: 1, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/1200x1200bf-60.jpg' },
  { id: 2, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/1200x1200bb.jpg' },
  { id: 3, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/1200x1200bb.jpg' },
  { id: 4, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4b/42/21/4b422136-2cfd-222c-ca7c-7573bf23139c/886449537204.jpg/1200x1200bb.jpg' },
  { id: 5, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/1200x1200bf-60.jpg' },
  { id: 6, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/df/60/00/df600071-c5c7-24e7-e4d7-1a6b71fa44e7/190296529818.jpg/1200x1200bb.jpg' },
  { id: 7, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/1200x1200bb.jpg' },
  { id: 8, uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f5/7a/9e/f57a9e6a-31c8-0784-dfbd-4a0120bfd4af/21UMGIM17517.rgb.jpg/1200x1200bf-60.jpg' },
];

export default function TabOneScreen() {
  const numColumns = 3; // Número de imagens por linha

  const renderItem = ({ item }: { item: ImageData }) => (
    <Image source={{ uri: item.uri }} style={styles.image} />
  );

  return (
    <FlatList
      data={imageArray}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
}

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth / 3 - 20; // 16 é a margem horizontal entre as imagens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8, // Margem externa geral
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    margin: 8, // Margem interna entre as imagens
    borderRadius: 10, // Adicione o border-radius de 10
  },
});