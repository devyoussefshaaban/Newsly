import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Header } from "@/components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home/index" options={{ title: "Home" }} />
        <Stack.Screen name="about/index" options={{ title: "About" }} />
      </Stack>
    </>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
