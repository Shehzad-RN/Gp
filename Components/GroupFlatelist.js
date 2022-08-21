import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { parseComponentStack } from "react-native/Libraries/LogBox/Data/parseLogBoxLog";
// import { FlatList } from "react-native-web";

const GroupFlatelist = props => {
  const { horiz, numColumnscheck } = props;
  return (
    // <SafeAreaView>
    <View style={{ width: "100%", alignSelf: "center" }}>
      <FlatList
        data={props.GroupData}
        // numColumnscheck?
        numColumns={props.nmcolums ? 2 : null}
        horizontal={props.nmcolums ? false : true}
        renderItem={({ item }) => (
          <View
            style={{
              height: props.check ? 282 : 279,
              borderWidth: props.check ? 1 : 0,
              width: props.check ? 184 : 216,
              // justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderColor: "#D5D5D5",
              marginLeft: props.check ? 30 : 10,
            }}
          >
            <View
              style={{
                marginTop: 5,
                borderWidth: 1,
                height: props.check ? 150 : 190,
                width: props.check ? 152 : 192,
                //   alignSelf: "center",
                backgroundColor: "#E3E3E3",
                borderColor: "#E3E3E3",
                borderRadius: 10,
                alignItems: "baseline",
                flexDirection: "row",
                zIndex: 0,
              }}
            >
              <Image
                style={{ alignSelf: "center", marginLeft: 25, zIndex: 0 }}
                source={item.IMagePath}
              />

              <View
                style={{
                  backgroundColor: props.check ? "#FF5E00" : null,
                  height: props.check ? 30 : 25,
                  zIndex: 1,
                  width: props.check ? 80 : 30,
                  // borderWidth: 1,
                  marginLeft: props.check ? -110 : -60,
                  marginTop: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: props.check ? 0 : 0,
                }}
              >
                {props.check ? (
                  <Text style={{ fontSize: 10, color: "#fff" }}>
                    {item.Time}
                  </Text>
                ) : (
                  <TouchableOpacity>
                    <Text style={{ fontSize: 10, color: "#fff" }}>
                      {item.Time}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View
              style={{
                //   alignSelf: "center",
                width: 65,
                marginTop: -30,
                borderWidth: 1,
                marginLeft: -88,
                flexDirection: "row",
                borderColor: "#fff",
                borderRadius: 10,
                backgroundColor: "#fff",
              }}
            >
              <View style={{ width: 2 }} />
              <Text style={{ color: "black" }}>{item.StarRate}</Text>
              {item.Star}
              <View style={{ borderEndWidth: 1, borderColor: "#A5A5A5" }} />
              <View style={{ width: 2 }} />
              <Text>{item.Purchased}</Text>
            </View>
            <View style={{ alignSelf: "center", width: 150, marginTop: 20 }}>
              <Text style={{ color: "#8B8B8B", fontSize: 12 }}>
                {item.AdressName}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "center",
                width: 150,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  // textDecorationLine: "line-through",
                  // textDecorationLine: "underline line-through",
                  textDecorationLine: "line-through",
                  color: "#A5A5A5",
                }}
              >
                {item.offPrice}
              </Text>
              <View style={{ width: 5 }} />
              <Text>{item.realprice}</Text>
              <View style={{ width: 5 }} />
              <Text
                style={{
                  color: "#FF0000",
                }}
              >
                {item.discount}
              </Text>
            </View>
            <View
              style={{
                alignSelf: "center",
                width: 150,
                flexDirection: "row",
              }}
            >
              <View style={{ width: 55, flexDirection: "row" }}>
                <Image source={item.FirstGroupImage} />
                <Image
                  style={{ marginLeft: -20 }}
                  source={item.SecondGroupImage}
                />
              </View>
              <View style={{ width: 95, marginLeft: 10 }}>
                <Text>{item.GroupTitle}</Text>
                <Text>{item.Groupmember}</Text>
              </View>
            </View>
            {props.check ? (
              <View
                style={{
                  height: 40,
                  backgroundColor: "#112735",
                  width: 184,
                  //   borderRadius: 10,
                  //   borderbottomEndRadius: 10,
                  borderBottomEndRadius: 10,
                  borderBottomLeftRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    justifyContent: "center",
                  }}
                >
                  {item.GroupStatus}
                </Text>
              </View>
            ) : null}
          </View>
        )}
      />
    </View>
  );
};

export default GroupFlatelist;
