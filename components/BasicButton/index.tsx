import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";

const BasicButton = ({ text }: { text: string }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            padding: 10,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicButton;
