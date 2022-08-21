/** @format */

import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const MainscreenF = props => {
  return (
    <View
      style={{
        marginTop: "20%",
      }}
    >
      <FlatList
        data={props.imageData}
        keyExtractor={item => item}
        horizontal={true}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              //   margin: 5,
              borderColor: "#DBDBDB",
              width: 180,
              backgroundColor: "#F9F9F9",
              borderRadius: 14,
              //   alignItems: "center",
              height: 290,
              marginLeft: 18,
            }}
          >
            <View
              style={{
                // borderWidth: 1,
                //   margin: 5,
                borderColor: "#DBDBDB",
                width: 178,

                borderRadius: 14,
                height: 165,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  height: 165,
                  alignItems: "center",

                  width: 178,
                }}
              >
                <Image
                  style={{
                    height: 150,
                    borderRadius: 9,
                    width: 152,
                  }}
                  source={item.image1}
                ></Image>
              </View>

              <View
                style={{
                  position: "absolute",
                  width: 190,
                  height: 40,
                  //   backgroundColor: "pink",
                  alignItems: "flex-end",
                }}
              >
                <View
                  style={{
                    marginTop: 10,
                    height: 23,

                    width: 86,

                    backgroundColor: "#FF5E00",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9,
                      color: "white",
                    }}
                  >
                    Time {item.time}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 170,

                  marginTop: -35,
                  marginLeft: 10,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    width: 65,
                    height: 21,
                    flexDirection: "row",
                    borderRadius: 21,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 4,
                      marginTop: 2,
                      fontSize: 12,
                    }}
                  >
                    {item.ratingpoint}
                  </Text>
                  <AntDesign
                    name="star"
                    size={10}
                    style={{
                      color: "#FDCC0D",
                      alignSelf: "center",
                    }}
                  />
                  <View
                    style={{
                      borderWidth: 0.5,
                      height: 15,
                      marginLeft: 3,
                      alignSelf: "center",
                      justifyContent: "center",
                      borderRightColor: "black",
                    }}
                  />

                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 4,
                        alignSelf: "center",
                      }}
                    >
                      {item.ratingpeople}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 180,
                height: 83,
                // backgroundColor: "pink",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 152,
                  //   backgroundColor: "blue",
                  height: 83,
                  //   paddingTop: 1,
                  //   marginLeft: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A5A5A5",
                  }}
                >
                  {item.itemtitle}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      fontSize: 13,
                      marginRight: 4,
                      color: "#A5A5A5",
                    }}
                  >
                    {item.offrate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                      marginRight: 4,
                    }}
                  >
                    {item.rate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "800",
                      color: "red",
                      marginTop: 3,
                    }}
                  >
                    {item.saleoffpercent}
                  </Text>
                </View>
                <View
                  style={{
                    height: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    // marginLeft: 12,
                  }}
                >
                  <Image
                    style={{
                      width: 37,
                      height: 37,
                      borderRadius: 37,
                    }}
                    source={item.image2}
                  />

                  <View
                    style={{
                      // marginLeft: -10,
                      borderColor: "white",
                      // borderWidth: 1,
                      // borderRadius: 20,
                    }}
                  >
                    <Image
                      style={{
                        width: 37,
                        height: 37,
                        borderRadius: 37,
                      }}
                      source={item.image3}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 11,
                      }}
                    >
                      Party Friend
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                      }}
                    >
                      {item.member} members
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  width: 179,
                  height: 40,
                  backgroundColor: "#112735",
                  justifyContent: "center",
                  // borderRadiusBottomRight: 14,
                  borderBottomRightRadius: 14,
                  borderBottomLeftRadius: 14,
                }}
              >
                <Text
                  style={{
                    fontWeight: "800",
                    color: "white",
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Join Group
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default MainscreenF;
