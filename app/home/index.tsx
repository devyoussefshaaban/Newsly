import { ImageBackground, View } from "react-native";
import React from "react";
import { TransparentBox } from "@/components";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      <ImageBackground
        borderRadius={15}
        source={require("../../assets/images/home_bg.jpg")}
      >
        <View style={styles.boxWrapper}>
          <TransparentBox />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
