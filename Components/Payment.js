import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const Payment = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          marginTop: "4%",
          //   height: "90%",
          backgroundColor: "white",
          alignItems: "center",
          // marginTop: "20%",
        }}
      >
        <Image
          style={{
            height: "50%",
            width: "100%",
          }}
          source={require("../Assets/IMages/payment.png")}
        />
        <Image
          style={{
            height: 61,
            width: 62,
            //   borderRadius:
          }}
          source={require("../Assets/IMages/green.png")}
        />
        <Text
          style={{
            fontSize: 23,
            fontWeight: "700",
            marginTop: "7%",
          }}
        >
          Payment Successful!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#6E6E6E",
            width: "60%",
            marginTop: "2%",

            textAlign: "center",
            height: "10%",
            // backgroundColor: "pink",
          }}
        >
          Please go back to the vendor page to complete the Group Buy to ship
          your order
        </Text>
        <View
          style={{
            height: "5%",
          }}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <View
            style={{
              height: 50,
              width: 200,
              borderRadius: 30,
              backgroundColor: "#FF4D00",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "900",
                color: "white",
              }}
            >
              Back to vendor
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Payment;
