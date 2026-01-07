import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.avatarImg}
        source={require("../../assets/images/boy.png")}
      />
      <Text style={styles.text}>News App</Text>
      <Image
        style={styles.notoficationImg}
        source={require("../../assets/images/notification.png")}
      />
    </View>
  );
};

export default Header;
