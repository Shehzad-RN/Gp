import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormInput = ({
  labelValue,
  keyboardTyp,
  maxl,
  placeholderText,
  marginTo,
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

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,

    width: "100%",
    // backgroundColor: "3fff",
    // backgroundColor:''
    borderColor: "gray",
    borderRadius: 40,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});
