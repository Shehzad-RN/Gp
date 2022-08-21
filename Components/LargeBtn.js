import React from "react";
import { Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

// import {windowHeight, windowWidth} from '../utils/Dimentions';

const LargeBtn = ({
  buttonTitle,
  borderc,
  txtcolor,
  BDR,
  Bakbround,
  ...rest
}) => {
  const Bg = Bakbround;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: Bg,
          borderColor: borderc,
          borderRadius: BDR ? BDR : 35,
        },
      ]}
      {...rest}
    >
      <Text style={[styles.buttonText, { color: txtcolor }]}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default LargeBtn;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    width: "100%",
    // height: windowHeight / 15,
    // backgroundColor: ,
    // padding: 18,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    alignSelf: "center",
    // borderRadius: 35,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "900",
    // color: "#ffffff",
    // fontFamily: 'Lato-Regular',
  },
});
