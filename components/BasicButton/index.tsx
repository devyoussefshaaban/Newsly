import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import styles from "./styles";

const BasicButton = ({ text }: { text: string }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback>
        <Text
          style={{
            color: "#fff",
            padding: 10,
          }}
        >
          {text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BasicButton;
