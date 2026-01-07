import { Text, View } from "react-native";
import styles from "./styles";
import BasicButton from "../BasicButton";

const TransparetBox = ({ text }: { text: string }) => {
  return (
    <View style={styles.transparentBox}>
      <BasicButton text="Read More" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TransparetBox;
