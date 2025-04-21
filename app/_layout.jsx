import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { use } from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  // console.log("RootLayout colorScheme", colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        {/* Individual Screens */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact" /*, headerShown: false */ }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
