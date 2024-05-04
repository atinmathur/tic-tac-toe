import React, { ReactElement } from "react";
import { Image, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Button } from "@components";
import styles from "./home.styles";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("@assets/logo.png")} />
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            onPress={() => alert(true)}
            title="Single Player"
          />
          <Button
            style={styles.button}
            onPress={() => alert(true)}
            title="Multi Player"
          />
          <Button
            style={styles.button}
            onPress={() => alert(true)}
            title="Login"
          />
          <Button
            style={styles.button}
            onPress={() => alert(true)}
            title="Settings"
          />
        </View>
      </View>
    </GradientBackground>
  );
}
