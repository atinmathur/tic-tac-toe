import React, { ReactElement } from "react";
import { Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground } from "@components";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground>
      <Button
        title="Go to Game"
        onPress={() => {
          navigation.navigate("Game", { gameId: "123" });
        }}
      />
    </GradientBackground>
  );
}
