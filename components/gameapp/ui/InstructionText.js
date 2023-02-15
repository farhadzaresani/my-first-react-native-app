import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../../constants/colors";

const InstructionText = ({ children,style }) => {
  return <Text style={[styles.intstructionText,style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  intstructionText: {
    fontFamily:"open-sans",
    color: Colors.primary2,
    fontSize: 24,
  },
});
