import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppBootstrap, Text } from "@components";

export default function App() {
  return (
    <AppBootstrap>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text weight="400" style={{ color: "red", fontSize: 24 }}>
          Index
        </Text>
      </View>
    </AppBootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "# ",
    alignItems: "center",
    justifyContent: "center",
  },
});
