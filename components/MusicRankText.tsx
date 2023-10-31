import { Text, StyleSheet } from "react-native";

interface MusicRankTextProps {
  text: string;
}

const MusicRankText = ({ text }: MusicRankTextProps) => {
  return <Text style={styles.albumText}>{text}</Text>;
};

export default MusicRankText;

const styles = StyleSheet.create({
  albumText: {
    color: "white",
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
});
