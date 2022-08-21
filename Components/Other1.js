import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
const Other1 = props => {
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
          height: 60,
          width: "100%",
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <Text>I HAVE AN ISSUE WITH THE MOBILE APP</Text>
      </View>
      <View
        style={{
          height: "1%",
        }}
      />
      <View
        style={{
          height: 120,
          padding: 20,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Text>
          Sorry! We are not able to recommend a solution. Please get in touch
          using the Contact Us option below.
        </Text>
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
            <Image source={require("../Assets/IMages/finger2.png")} />
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
export default Other1;
