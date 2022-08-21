import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
const Data = [
  {
    image1: require("../Assets/IMages/image7.png"),
    itemTitle: "Wine Solid Cut Outs Gown ",
    size: "M",
    DeliveryDate: "26 Apr 2021",
    ReturnClosed: "10 May 2021",
    DeliveryAddress: "Poultry Farm road Tezpur , Kalibari",
    city: "Kalibari",
    Pincode: "784001",
    state: "Assam",
    Landmark: "Sontipur",
  },
];
const ItemDetail = props => {
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

              <Text style={{ fontSize: 13, marginTop: 2, marginLeft: 5 }}>
                My Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              height: 10,
            }}
          />

          <View
            style={{
              // justifyContent: "center",
              alignItems: "center",
              height: 380,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                height: "3%",
              }}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MainPurchasing")}
            >
              <Image
                source={require("../Assets/IMages/image7.png")}
                style={{
                  height: 219,
                  width: 200,
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                height: "3%",
              }}
            />
            <Text
              style={{
                color: "#7E7E7E",
                fontSize: 16,
              }}
            >
              Wine Solid Cut Outs Gown
            </Text>
            <Text
              style={{
                color: "#7E7E7E",
                fontSize: 13,
              }}
            >
              Size: M
            </Text>
            <View
              style={{
                marginTop: 5,
                height: 65,
                backgroundColor: "#03A685",
                width: "85%",
                borderRadius: 3,
                padding: 11,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <AntDesign
                  name="CodeSandbox"
                  style={{
                    color: "white",
                  }}
                  size={24}
                />
                <View
                  style={{
                    width: "5%",
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                    }}
                  >
                    Delivered
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#C4D2CF",
                    }}
                  >
                    ON :26 Apr 2021,
                  </Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: 13,
              }}
            >
              Exchange/Return window closed on :10 May 2021
            </Text>
          </View>
          <View style={{ height: 10 }} />
          <View
            style={{
              width: "100%",
              height: 103,
              // justifyContent: "center",
              // marginTop: -40,
              backgroundColor: "#fff",
            }}
          >
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={{ fontSize: 19 }}>Delivery Address</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 14 }}>Arshadul Rahman </Text>
                <View
                  style={{
                    borderEndWidth: 1,
                    height: 15,
                    marginTop: 3,
                    marginLeft: 3,
                    marginRight: 5,
                  }}
                />
                <Text style={{ fontSize: 14 }}>Arshadul Rahman </Text>
              </View>
              <Text style={{ marginTop: 10, color: "#979797" }}>
                Poultry Farm road Tezpur, Kalibari {"\n"} (Assam), Sonitpur -
                784001
              </Text>
              {/* <Text>Delivery Address</Text> */}
            </View>
          </View>
          <View style={{ height: 10 }} />
          <View
            style={{
              height: 431,
              width: "100%",
              backgroundColor: "#fff",
              marginTop: 10,
            }}
          >
            <View style={{ width: "90%", alignSelf: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold" }}>Total Item Price</Text>
                  <Text>You saved ₹ 560 on this item</Text>
                </View>

                <Text style={{ marginTop: 7, fontWeight: "bold" }}>
                  ₹ 430.00
                </Text>
              </View>
              <Text style={{ marginTop: 15, marginBottom: 15 }}>
                Price Details
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#737373" }}>Product Charges</Text>
                <Text>₹430</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#737373" }}>Delivery Charges</Text>
                <Text>+₹0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#737373" }}>Special Offer</Text>
                <Text>+₹0</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  marginTop: 10,
                  borderColor: "#737373",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Order Total
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>₹430</Text>
              </View>
              <View style={{ height: 19, marginTop: 10 }}>
                <TextInput
                  mode="outlined"
                  placeholder="Pay on delivery"
                  label={"Pay on delivery"}
                />
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 57,
                borderColor: "#DDDDDD",
              }}
            />
            <View style={{ backgroundColor: "#fff" }}>
              <View
                style={{ width: "90%", alignSelf: "center", marginTop: 10 }}
              >
                <Text>Sold by: Abhijit Das</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ItemDetail;
