import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inpuContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inpuContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary3,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
