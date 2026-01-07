import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Header } from "@/components";
import { NewsContextProvider } from "@/context/newsContext";

const MainLayout = () => {
  return (
    <NewsContextProvider>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home/index" options={{ title: "Home" }} />
        <Stack.Screen name="about/index" options={{ title: "About" }} />
      </Stack>
    </NewsContextProvider>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
