import { Text, View } from "react-native";
import styles from "./styles";
import BasicButton from "../BasicButton";

const TransparetBox = () => {
  return (
    <View style={styles.transparentBox}>
      <BasicButton text="Read More" />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illo
        fugiat a ab ex sapiente quasi impedit, odit in, assumenda amet molestias
        asperiores placeat. Ipsam veritatis at error autem provident.
      </Text>
    </View>
  );
};

export default TransparetBox;
