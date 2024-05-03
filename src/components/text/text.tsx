import React, { ReactElement, ReactNode } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
  weight?: "400" | "700";
  children: ReactNode;
} & NativeTextProps;

export default function Text({
  children,
  style,
  weight,
  ...props
}: TextProps): ReactElement {
  const fontFamily = weight === "700" ? "Lato_700Bold" : "Lato_400Regular";
  return (
    <NativeText {...props} style={[{ fontFamily }, style]}>
      {children}
    </NativeText>
  );
}
