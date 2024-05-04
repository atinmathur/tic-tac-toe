import React, { ReactElement, ReactNode } from "react";
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./gradient-background.styles";
import { StatusBar } from "expo-status-bar";

type GradientBackgroundProps = {
  children: ReactNode;
};

export default function GradientBackground({
  children,
}: GradientBackgroundProps): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient style={styles.gradient} colors={["#120318", "#221a36"]} />
      {children}
    </SafeAreaView>
  );
}
