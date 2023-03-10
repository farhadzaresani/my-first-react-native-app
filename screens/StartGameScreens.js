import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/gameapp/ui/Card";
import InstructionText from "../components/gameapp/ui/InstructionText";
import { PrimaryButton } from "../components/gameapp/ui/PrimaryButton";
import Title from "../components/gameapp/ui/Title";
import Colors from "../constants/colors";

const StartGameScreens = ({ onPickedNumber }) => {
  const [enterdNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  const numberInpuHandler = (enteredtext) => {
    setEnteredNumber(enteredtext);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterdNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "ok", style: "default", onPress: resetInputHandler }]
      );
      return;
    }

    onPickedNumber(chosenNumber);
  };

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter Number</InstructionText>
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
                <PrimaryButton action={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreens;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: "center",
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
    borderBottomColor: Colors.primary2,
    borderBottomWidth: 2,
    color: Colors.primary2,
    marginVertical: 8,
    textAlign: "center",
  },
});
