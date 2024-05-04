import React, { ReactElement } from "react";
import { Button, Text, View } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Game"
        onPress={() => {
          navigation.navigate("Game", { gameId: "123" });
        }}
      />
    </View>
  );
}
