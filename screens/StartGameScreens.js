import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import { PrimaryButton } from "../components/gameapp/PrimaryButton";

const StartGameScreens = () => {
  const [enterdNumber, setEnteredNumber] = useState("");

  const numberInpuHandler = (enteredtext) => {
    setEnteredNumber(enteredtext);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNymber = parseInt(enterdNumber);
    if (isNaN(chosenNymber) || chosenNymber <= 0 || chosenNymber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "ok", style: "default", onPress: resetInputHandler }]
      );
      return;
    }
  };

  return (
    <View style={styles.inpuContainer}>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.numberInput}
        value={enterdNumber}
        onChangeText={numberInpuHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton action={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton action={confirmInputHandler}>Confirm</PrimaryButton>
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
