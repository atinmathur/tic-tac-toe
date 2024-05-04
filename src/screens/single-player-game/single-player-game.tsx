import React, { ReactElement } from "react";
import { GradientBackground, Text } from "@components";

export default function SinglePlayerGame(): ReactElement {
  return (
    <GradientBackground>
      <Text style={{ color: "#fff" }}>Game</Text>
    </GradientBackground>
  );
}
