import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./button.styles";
import Text from "../text/text";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({
  title,
  style,
  ...props
}: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={[style, styles.button]}>
      <Text weight="700" style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
