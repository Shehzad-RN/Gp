import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Switch,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const Setting = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
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
                SETTINGS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          height: 99,
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: 10,
          borderRadius: 8,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignSelf: "center",

            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <View>
            <Text>Notifications</Text>
            <Text>This will not affect any order updates</Text>
          </View>

          <Switch
            // style={{ height: 20 }}
            trackColor={{ false: "#D5D5D5", true: "#03A685" }}
            thumbColor={"#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;
