import { FlatList, ImageBackground, View } from "react-native";
import React from "react";
import { TransparentBox } from "@/components";
import styles from "./styles";
import useNews from "@/hooks/useNews";
import { NewsArticle } from "@/models/NewsArticle";

const HomeScreen = () => {
  const { newsList } = useNews();

  const renderItems = ({ item }: { item: NewsArticle }) => {
    return (
      <ImageBackground
        style={{ marginHorizontal: 10 }}
        borderRadius={15}
        source={item.url ? { uri: item.url } : undefined}
      >
        <View style={styles.boxWrapper}>
          <TransparentBox text={item.content} />
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      <FlatList
        data={newsList}
        renderItem={(item) => renderItems(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      />
    </View>
  );
};

export default HomeScreen;
