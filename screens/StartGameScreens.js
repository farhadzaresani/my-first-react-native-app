import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/gameapp/PrimaryButton";

const StartGameScreens = () => {
  return (
    <View style={styles.inpuContainer}>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.numberInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreens;

const styles = StyleSheet.create({
  inpuContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    // android shadow = elevation:3
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    textAlign: "center",
  },
});
