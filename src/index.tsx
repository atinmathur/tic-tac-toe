import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
  });

  const onLayoutView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutView}>
      <StatusBar style="auto" />
      <Text style={{ fontFamily: "Lato_400Regular", fontSize: 24 }}>Index</Text>
    </View>
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
