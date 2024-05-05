import React, { ReactElement } from "react";
import { GradientBackground, Text } from "@components";
import { Board } from "@components";
import {
  BoardState,
  getAvailableMoves,
  isEmpty,
  isFull,
  printFormattedBoard,
} from "@utils";

export default function SinglePlayerGame(): ReactElement {
  const b: BoardState = ["x", "o", "x", "o", "x", "x", "o", "x", "o"];

  printFormattedBoard(b);
  console.log(isEmpty(b));
  console.log(isFull(b));
  console.log(getAvailableMoves(b));
  return (
    <GradientBackground>
      <Text style={{ color: "#fff" }}>Game</Text>
      <Board
        onCellPressed={(index) => {
          alert(index);
        }}
        state={b}
        size={300}
      />
    </GradientBackground>
  );
}
