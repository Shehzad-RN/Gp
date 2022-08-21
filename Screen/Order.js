import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Ionicon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useSelector } from "react-redux";
import API from "../api/_api";
const Category = ["Delivered", "Processing", "Cancelled"];

const Order = props => {
  const [deliveredOrder, setDeliveredOrder] = useState([]);
  const [SelectCategory, setSelectCategory] = useState(0);
  const isToken = useSelector(state => state.auth?.token);
  const inProcessOrder = useSelector(state => state?.root?.data?.orders_in_processing);
  const cart_type = useSelector(state => state.root.data?.cart_type);
  const Data = [" ", " ", " "];

  React.useEffect(async () => {
    try {
      const get = await API.get('/orders/delivered', {
        headers: {
          Authorization: `Bearer ${isToken}`,
        }
      })
      setDeliveredOrder(get.data.orders);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <SafeAreaView>
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

                <Text style={{ fontSize: 13, marginTop: 2, marginLeft: 5 }}>
                  My Order
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 3 }} />
        <ScrollView>
          <View style={{ width: "100%", backgroundColor: "#fff" }}>
            <View
              style={{
                width: "94%",
                alignSelf: "center",
                backgroundColor: "#fff",
                height: 56,
                justifyContent: "center",
              }}
            >
              <FlatList
                data={Category}
                horizontal={true}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => setSelectCategory(index)}>
                    <View
                      style={{
                        height: 56,
                        justifyContent: "center",
                        marginLeft: 30,

                        borderBottomWidth: index == SelectCategory ? 4 : 0,
                        borderColor: index == SelectCategory ? "#FF4400" : null,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 17,
                          color:
                            index == SelectCategory ? "#122736" : "#9F9F9F",
                          fontWeight: index == SelectCategory ? "bold" : null,
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{ height: 10, backgroundColor: "#F5F5F5" }} />
            {SelectCategory == 0 && (
              <FlatList
                data={deliveredOrder}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) => {
                  let price = item?.product_price;
                  let DISCOUNT_PER = Number(100 - (price * 100 / item?.mrp)).toFixed(0);
                  return (
                    <View style={{ height: 221, marginTop: index == 0 ? 0 : 10 }}>
                      <View
                        style={{
                          width: "94%",
                          alignSelf: "center",
                          // backgroundColor: "grey",
                          justifyContent: "center",
                        }}
                      >
                        {/* <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicon name="ios-cube-outline" size={25} />
                        <View>
                          <Text style={{ color: "#03A685", fontSize: 14 }}>
                            Delivered
                          </Text>
                          <Text style={{ fontSize: 11 }}>
                            On Mon, 26 Apr 2021
                          </Text>
                        </View>
                      </View> */}
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("ItemDetail")}
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
                              source={{ uri: item?.title_image }}
                            />
                            <View style={{ marginTop: 10, marginLeft: 4 }}>
                              <Text style={{ fontSize: 16 }}>
                                {item?.name}
                              </Text>
                              {/* <Text style={{ fontSize: 12 }}>
                                Sold by: Abhijit Das
                              </Text> */}
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  width: "65%",
                                }}
                              >
                                <View style={{ flexDirection: "row" }}>
                                  <Text>Free Delivery</Text>
                                  {/* <AntDesign
                                    name="star"
                                    size={10}
                                    color={"#FFD62D"}
                                  /> 
                                  <View
                                    style={{ borderEndWidth: 1, marginLeft: 2 }}
                                  />
                                  <Text style={{ marginLeft: 5 }}>289</Text>*/}
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
                              {/* <Text style={{ fontSize: 16 }}>Size: M</Text> */}
                              <View style={{ flexDirection: "row" }}>
                                <Text
                                  style={{ fontSize: 18, fontWeight: "bold" }}
                                >
                                  ₹ {item?.product_price}
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
                                  ₹ {item?.mrp}
                                </Text>
                                <Text
                                  style={{
                                    marginLeft: 5,
                                    marginTop: 5,
                                    // textDecorationLine: "line-through",
                                    color: "#FF0000",
                                    fontSize: 11,
                                  }}
                                >
                                  {DISCOUNT_PER}% OFF
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                        <View style={{ height: 10 }} />
                        {/* <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 14, color: "#7D7D7D" }}>
                          Rate Product:
                        </Text>
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                      </View> */}
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
                  )
                }}
              />
            )}
            {SelectCategory == 1 && (
              <FlatList
                data={inProcessOrder[0]}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) => {
                  let price = item?.product_price;
                  let DISCOUNT_PER = Number(100 - (price * 100 / item?.mrp)).toFixed(0);
                  return (
                    <View style={{ height: 221, marginTop: index == 0 ? 0 : 10 }}>
                      <View
                        style={{
                          width: "94%",
                          alignSelf: "center",
                          // backgroundColor: "grey",
                          justifyContent: "center",
                        }}
                      >
                        {/* <View
                        style={{
                          flexDirection: "row",
                          // justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicon name="ios-cube-outline" size={25} />
                        <View>
                          <Text style={{ color: "#03A685", fontSize: 14 }}>
                            Delivered
                          </Text>
                          <Text style={{ fontSize: 11 }}>
                            On Mon, 26 Apr 2021
                          </Text>
                        </View>
                      </View> */}
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("ItemDetail")}
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
                              source={{ uri: item?.title_image }}
                            />
                            <View style={{ marginTop: 10, marginLeft: 4 }}>
                              <Text style={{ fontSize: 16 }}>
                                {item?.name}
                              </Text>
                              {/* <Text style={{ fontSize: 12 }}>
                                Sold by: Abhijit Das
                              </Text> */}
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  width: "65%",
                                }}
                              >
                                <View style={{ flexDirection: "row" }}>
                                  <Text>Free Delivery</Text>
                                  {/* <AntDesign
                                    name="star"
                                    size={10}
                                    color={"#FFD62D"}
                                  /> 
                                  <View
                                    style={{ borderEndWidth: 1, marginLeft: 2 }}
                                  />
                                  <Text style={{ marginLeft: 5 }}>289</Text>*/}
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
                              {/* <Text style={{ fontSize: 16 }}>Size: M</Text> */}
                              <View style={{ flexDirection: "row" }}>
                                <Text
                                  style={{ fontSize: 18, fontWeight: "bold" }}
                                >
                                  ₹ {item?.product_price}
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
                                  ₹ {item?.mrp}
                                </Text>
                                <Text
                                  style={{
                                    marginLeft: 5,
                                    marginTop: 5,
                                    // textDecorationLine: "line-through",
                                    color: "#FF0000",
                                    fontSize: 11,
                                  }}
                                >
                                  {DISCOUNT_PER}% OFF
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                        <View style={{ height: 10 }} />
                        {/* <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 14, color: "#7D7D7D" }}>
                          Rate Product:
                        </Text>
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="star"
                          size={22}
                          color={"#FFD62D"}
                        />
                      </View> */}
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
                  )
                }}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Order;
