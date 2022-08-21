import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SimpleTextInput = ({
  labelValue,
  keyboardTyp,
  maxl,
  placeholderText,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={maxl}
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        keyboardType={keyboardTyp}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default SimpleTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 15,

    width: "100%",
    // backgroundColor: "3fff",
    // backgroundColor:''
    borderColor: "gray",
    // borderRadius: 30,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#fff",
    borderRadius: 5,
    // height: "10%",
  },

  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,

    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});
