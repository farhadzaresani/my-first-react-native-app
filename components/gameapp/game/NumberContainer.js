import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const devideWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary2,
    padding: devideWidth < 350 ? 12 : 24,
    margin: devideWidth < 350 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary2,
    // fontWeight:"bold",
    fontSize: devideWidth<350 ? 28 :36 ,
    fontFamily: "open-sans-bold",
  },
});
