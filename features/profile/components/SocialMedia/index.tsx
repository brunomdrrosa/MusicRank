import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps, ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface SocialMediaProps {
  name: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export const SocialMedia = ({ name }: SocialMediaProps): ReactElement => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <MaterialCommunityIcons
        name={name}
        size={30}
        color="white"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
