import React from "react";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const ProfileComponent = props => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => props.Next(props.NavigatioonName)}
        >
          <View>{props.icon}</View>
          <View style={{ width: "2%" }} />
          <View
            style={{
              width: "91%",

              justifyContent: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 17, color: "#122736" }}>
                {props.title}
              </Text>

              <View
                style={{
                  width: 30,

                  alignItems: "center",

                  justifyContent: "center",

                  marginTop: 7,
                }}
              >
                <SimpleLineIcons
                  style={{
                    color: "#BCBCBC",
                  }}
                  name="arrow-right"
                  size={20}
                />
              </View>
            </View>
            <Text style={{ fontSize: 10, color: "#9D9D9D" }}>
              {props.description}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileComponent;
