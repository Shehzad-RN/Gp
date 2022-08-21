/** @format */

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
const PaymentRefund = [
  {
    title: "My return was picked up but I haven't received my refund yet",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "My payment has been debited multiple time",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "My bank account details for refund",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "I am unable to pay using wallet",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "I am unable to use gift card",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "I self shipped my return but haven't received my refund yet",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
  {
    title: "My order didn't get placed, but payment got debited",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
];
const Pay1 = props => {
  return (
    <View
      style={
        {
          // marginTop: "15%",
        }
      }
    >
      <View style={{ width: "100%", backgroundColor: "#fff" }}>
        <View
          style={{
            width: "94%",

            alignSelf: "center",
            height: 47,
            // justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => props.navigation.pop()}
            >
              <Entypo name="arrow-long-left" size={24} color="black" />

              <Text
                style={{
                  fontSize: 13,
                  marginTop: 2,
                  marginLeft: 5,
                  color: "#838383",
                  fontSize: 13,
                }}
              >
                HELP CENTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "2%",
        }}
      />
      <View
        style={{
          height: 75,
          width: "100%",
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <Text>
          MY RETURN WAS PICKED UP BUT I HAVEN'T RECEIVED MY REFUND YET
        </Text>
      </View>
      <View
        style={{
          height: "1%",
        }}
      />
      <View
        style={{
          height: 330,
          padding: 20,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Text>
          Refund will be initiated after we receive the item and it passes the
          quality check.
        </Text>
        <View
          style={{
            height: "4%",
          }}
        />
        <Text>Refund time depends on the mode of refund:</Text>
        <View
          style={{
            height: "4%",
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Banks Accounts:
        </Text>
        <Text>Time the item takes to reach us + 1 to 3 business days.</Text>
        <View
          style={{
            height: "4%",
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Online Refunds:
        </Text>
        <Text>Time the item takes to reach us + 7 to 10 business days.</Text>
        <View
          style={{
            height: "4%",
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          PhonePe Wallet:
        </Text>
        <Text>Time the item takes to reach us + 1 business day.</Text>
      </View>
      <View
        style={{
          height: 10,
        }}
      />
      <View
        style={{
          height: 70,
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 70,
            width: "60%",
            // backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Was this helpfull ?</Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              height: 35,
              width: 57,
              backgroundColor: "lightgrey",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              marginLeft: "2%",
            }}
          >
            <Image source={require("../Assets/IMages/finger1.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 35,
              width: 57,
              backgroundColor: "lightgrey",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
            }}
          >
            <Image source={require("../Assets/IMages/finger1.png")} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: "1%" }} />
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 150,
          padding: 20,
        }}
      >
        <Text>Still need help?</Text>
        <Text>
          Have queries? please get in touch and we will be happy to help you
        </Text>
        <View
          style={{
            height: "13%",
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              color: "#F15481",
            }}
          >
            CONTACT US
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Pay1;
