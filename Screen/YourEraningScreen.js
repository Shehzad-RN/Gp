import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Ionicon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const Options = ["Delivered", "Pending"];
const Data = [" ", " ", " "];
const Data2 = [" "];
const YourEraningScreen = props => {
  const [SelectOption, setSelectOption] = React.useState(0);
  const [Modalvisble, setModalvisble] = useState(false);
  const height = Dimensions.get("screen").height;
  // console.log(height);
  return (
    <View style={{ height: "100%", width: "100%" }}>
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
                MY EARNINGS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ height: 9 }} />
        <View
          style={{
            backgroundColor: "#fff",
            height: 109,
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: "#888888" }}>
              Total Earings
            </Text>
            <Text style={{ fontSize: 26, color: "#112735" }}> ₹ 40</Text>
          </View>
          <View
            style={{
              borderEndWidth: 2,
              borderColor: "#ACACAC",
              // backgroundColor: "black",
              height: 49,
            }}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: "#888888" }}>
              Pending Amount
            </Text>
            <Text style={{ fontSize: 26, color: "#112735" }}> ₹ 40</Text>
          </View>
        </View>
        <View style={{ height: 9 }} />
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
          }}
        >
          {Options.map((item, index) => (
            <View
              style={{
                marginLeft: 36,
                height: 41,

                borderBottomWidth: index == SelectOption ? 4 : 0,
                borderColor: index == SelectOption ? "#FF4D00" : null,
                borderRadius: 5,
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => setSelectOption(index)}>
                <Text
                  style={{
                    fontSize: 16,
                    color: index == SelectOption ? "black" : "#939393",
                    fontWeight: index == SelectOption ? "bold" : null,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {SelectOption == 0 ? (
          <View style={{ backgroundColor: "#fff" }}>
            <FlatList
              data={Data}
              renderItem={({ item, index }) => (
                <View style={{ height: 221, marginTop: 10 }}>
                  <View
                    style={{
                      width: "94%",
                      alignSelf: "center",
                      backgroundColor: "#fff",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicon name="ios-cube-outline" size={26} />
                      <View>
                        <Text style={{ color: "#03A685", fontSize: 14 }}>
                          Delivered
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                          On Mon, 26 Apr 2021
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate("MainPurchasing")
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          height: 135,
                          backgroundColor: "#FFF8DA",
                          marginTop: 10,
                          // alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            height: 114,
                            width: 94,
                            borderRadius: 8,
                            marginLeft: 5,
                            // justifyContent: "center",
                            alignSelf: "center",
                          }}
                          source={require("../Assets/IMages/image7.png")}
                        />
                        <View style={{ marginTop: 10, marginLeft: 4 }}>
                          <Text style={{ fontSize: 16 }}>
                            Wine Solid Cut Outs Gown
                          </Text>
                          <Text style={{ fontSize: 12 }}>
                            Sold by: Abhijit Das
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "65%",
                            }}
                          >
                            <View style={{ flexDirection: "row" }}>
                              <Text>4.5</Text>
                              <AntDesign
                                name="star"
                                size={10}
                                color={"#FFD62D"}
                              />
                              <View
                                style={{ borderEndWidth: 1, marginLeft: 2 }}
                              />
                              <Text style={{ marginLeft: 5 }}>289</Text>
                            </View>
                            <View>
                              <SimpleLineIcons
                                style={{
                                  color: "#BCBCBC",
                                }}
                                name="arrow-right"
                                size={20}
                              />
                            </View>
                          </View>
                          <Text style={{ fontSize: 16 }}>Size: M</Text>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                              ₹ 430
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                marginTop: 3,
                                textDecorationLine: "line-through",
                                color: "#A5A5A5",
                                fontSize: 15,
                              }}
                            >
                              ₹ 999
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                marginTop: 3,
                                // textDecorationLine: "line-through",
                                color: "#FF0000",
                                fontSize: 11,
                              }}
                            >
                              40% OFF
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                      <Text style={{ fontSize: 14, color: "#7D7D7D" }}>
                        Rate Product:
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: "#112735",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        ₹ 20
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 10,
                      backgroundColor: "#F5F5F5",
                      marginBottom: 30,
                      width: "100%",
                    }}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <View style={{ backgroundColor: "#fff" }}>
            <FlatList
              data={Data2}
              renderItem={({ item, index }) => (
                <View style={{ height: 221, marginTop: 10 }}>
                  <View
                    style={{
                      width: "94%",
                      alignSelf: "center",
                      backgroundColor: "#fff",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Ionicon name="ios-cube-outline" size={26} />
                      <View>
                        <Text style={{ color: "#03A685", fontSize: 14 }}>
                          Delivered
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                          On Mon, 26 Apr 2021
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate("MainPurchasing")
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          height: 135,
                          backgroundColor: "#FFF8DA",
                          marginTop: 10,
                          // alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            height: 114,
                            width: 94,
                            borderRadius: 8,
                            marginLeft: 5,
                            // justifyContent: "center",
                            alignSelf: "center",
                          }}
                          source={require("../Assets/IMages/image7.png")}
                        />
                        <View style={{ marginTop: 10, marginLeft: 4 }}>
                          <Text style={{ fontSize: 16 }}>
                            Wine Solid Cut Outs Gown
                          </Text>
                          <Text style={{ fontSize: 12 }}>
                            Sold by: Abhijit Das
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "65%",
                            }}
                          >
                            <View style={{ flexDirection: "row" }}>
                              <Text>4.5</Text>
                              <AntDesign
                                name="star"
                                size={10}
                                color={"#FFD62D"}
                              />
                              <View
                                style={{ borderEndWidth: 1, marginLeft: 2 }}
                              />
                              <Text style={{ marginLeft: 5 }}>289</Text>
                            </View>
                            <View>
                              <SimpleLineIcons
                                style={{
                                  color: "#BCBCBC",
                                }}
                                name="arrow-right"
                                size={20}
                              />
                            </View>
                          </View>
                          <Text style={{ fontSize: 16 }}>Size: M</Text>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                              ₹ 430
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                marginTop: 3,
                                textDecorationLine: "line-through",
                                color: "#A5A5A5",
                                fontSize: 15,
                              }}
                            >
                              ₹ 999
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                marginTop: 3,
                                // textDecorationLine: "line-through",
                                color: "#FF0000",
                                fontSize: 11,
                              }}
                            >
                              40% OFF
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 14, color: "#7D7D7D" }}>
                          Rate Product:
                        </Text>
                        <Text
                          style={{
                            fontSize: 17,
                            color: "#112735",
                            fontWeight: "bold",
                          }}
                        >
                          ₹ 20
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => setModalvisble(!Modalvisble)}
                      >
                        <View>
                          <Text style={{ fontSize: 13, color: "#FF4D00" }}>
                            View Details
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 10,
                      backgroundColor: "#F5F5F5",
                      marginBottom: 30,
                      width: "100%",
                    }}
                  />
                </View>
              )}
            />
          </View>
        )}
      </ScrollView>
      <Modal
        visible={Modalvisble}
        animationType="slide"
        // presentationStyle="FormSheet"
        transparent
        style={{ justifyContent: "center" }}
      >
        <View
          style={{
            marginTop: height / 3,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            // alignItems: "center",
            shadowColor: "#000",

            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            height: 210,
            width: 290,
            alignSelf: "center",
            // justifyContent: "center",
            // justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{ fontSize: 15, color: "#122736", fontWeight: "bold" }}
            >
              10 Apr, 08:12 PM
            </Text>
            <Text style={{ marginTop: 12, color: "#6C6C6C" }}>
              A total of Rs.20 has been processed to your bank account on 10
              Apr. It should reflect in your account within 2-3 working days.
            </Text>
            <TouchableOpacity onPress={() => setModalvisble(!Modalvisble)}>
              <View style={{ alignSelf: "flex-end", marginTop: 20 }}>
                <Text style={{ color: "#FF4D00", fontSize: 16 }}>CLOSE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default YourEraningScreen;
