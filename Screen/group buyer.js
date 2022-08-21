/** @format */

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { BottomSheet } from "react-native-sheet";

const MainData = [
  {
    imagemain: require("../Assets/IMages/image7.png"),

    imagemain1: require("../Assets/IMages/image5.png"),
    saleoffpercent: "40% OFF",
    offrate: "₹ 999",
    fabric: "Rayon",
    SleeveLength: "Three-Quarter sleeves",
    Pattern: "Solid",
    Multipack: "1",
    rate: "₹ 669",
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Red Solid Fit And Flare Dress",
    image12: require("../Assets/IMages/image12.png"),
    image13: require("../Assets/IMages/image13.png"),
    time: "08: 45: 17",
    reviews: "10",
    ratingnumberExcellent: "5",
    ratingnumberVeryGood: "7",
    ratingnumberGood: "3",
    ratingnumberAverage: "2",
    ratingnumberPoor: "1",
    image14: require("../Assets/IMages/14.png"),
    image15: require("../Assets/IMages/15.png"),
    image16: require("../Assets/IMages/16.png"),
    image17: require("../Assets/IMages/17.png"),
    image18: require("../Assets/IMages/18.png"),
    image19: require("../Assets/IMages/19.png"),
  },
];
const BuyData = ["S", "M", "L", "XL", "XXL"];
const MainPurchasing = props => {
  const [text, onChangeText] = React.useState("");
  const [count, setCount] = React.useState(0);
  const bottomSheet = React.useRef(null);
  return (
    // <ScrollView>
    <View style={{}}>
      <FlatList
        data={MainData}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View>
            <View
              style={
                {
                  // marginTop: 40,
                }
              }
            >
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("FullIMageScreen", {
                    Imagepath: [item.imagemain, item.imagemain, item.imagemain],
                  })
                }
              >
                <Image
                  style={{ height: 395, width: "100%" }}
                  source={item.imagemain}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: "100%",
                  height: 60,
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: "86%",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <View
                      style={{
                        width: 44,
                        height: 42,
                        //   alignSelf: "center",
                        backgroundColor: "white",
                        justifyContent: "center",
                        borderRadius: 13,
                        alignItems: "center",
                      }}
                    >
                      <SimpleLineIcons name="arrow-left" size={23} />
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: 44,
                      height: 42,
                      position: "absolute",
                      right: 55,
                      //   alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      borderRadius: 13,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          width: 15,
                          height: 15,
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: "black",
                          // backgroundColor: "black",
                          marginRight: -4,
                        }}
                      />
                      <View
                        style={{
                          width: 15,
                          height: 15,
                          borderRadius: 15,
                          backgroundColor: "black",
                        }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      width: 44,
                      right: 0,
                      //   justifyContent: "center",
                      //   alignSelf: "center",
                      //   alignSelf: "flex-end",
                      position: "absolute",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 42,
                      backgroundColor: "white",
                      borderRadius: 13,
                    }}
                  >
                    <TouchableOpacity>
                      <AntDesign name="sharealt" size={23} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View
                style={{
                  // padding: 20,
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  Similar Product
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      marginRight: 10,
                      height: 61,
                      borderRadius: 7,
                      width: 53,
                    }}
                    source={item.imagemain}
                  />
                  <Image
                    style={{
                      height: 61,
                      borderRadius: 7,

                      width: 53,
                    }}
                    source={item.imagemain1}
                  />
                </View>
                <View style={{ height: 10 }} />
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  MRP Rs.{item.offrate}(Group.Buy)
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    color: "#969696",
                  }}
                >
                  Free Shipping View Product Detail
                </Text>
                <View style={{ height: 10 }} />
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#969696",
                      marginRight: 6,
                      textDecorationLine: "line-through",
                    }}
                  >
                    MRP {item.rate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "700",
                      color: "#FF954F",
                    }}
                  >
                    {item.saleoffpercent}
                  </Text>
                  <View style={{ width: 80 }} />
                  <View
                    style={{
                      marginLeft: 10,
                      width: 96,
                      height: 26,
                      flexDirection: "row",
                      borderRadius: 21,
                      // backgroundColor: "lightgrey",
                      borderWidth: 1,
                      borderColor: "lightgrey",
                      // opacity: 0.8,
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: 4,
                        marginTop: 2,
                        fontSize: 14,
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
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 2,
                          alignSelf: "center",
                        }}
                      >
                        sold
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ height: 1 }} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {item.itemtitle}
                </Text>
              </View>
              <View style={{ height: 14 }} />

              <View
                style={{
                  height: 190,
                  width: "100%",
                  alignItems: "center",
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 180,
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                    width: "90%",
                    padding: 12,
                    // backgroundColor: "pink",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Ongoing Groups(10 Groups)
                    </Text>
                    {/* <View style={{}}> */}
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        // width: 1,
                      }}
                    >
                      {/* <View style={{ width: 10 }} /> */}
                      <Text
                        style={{
                          fontSize: 13,
                          color: "grey",
                        }}
                      >
                        {" "}
                        View All{" "}
                      </Text>
                      <Ionicons
                        style={{
                          // fontSize: 14,
                          color: "grey",
                        }}
                        name="ios-arrow-forward-circle"
                        size={19}
                      />
                    </TouchableOpacity>
                    {/* </View> */}
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#FF6600",
                    }}
                  >
                    You can join group and buy this item
                  </Text>
                  <View
                    style={{
                      height: 10,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      height: 50,
                      // backgroundColor: "pink",
                    }}
                  >
                    <Image source={item.image12} />
                    <View
                      style={{
                        width: 10,
                      }}
                    />

                    <Text style={{ fontSize: 11, color: "grey" }}>
                      Hello Friends
                    </Text>
                    <View
                      style={{
                        width: 23,
                      }}
                    />

                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                        }}
                      >
                        1/2 members
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "grey",
                        }}
                      >
                        Time:
                        {item.time}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 15,
                      }}
                    />
                    <TouchableOpacity>
                      <View
                        style={{
                          height: 38,
                          width: 65,
                          borderRadius: 12,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#112735",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                          }}
                        >
                          join
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 10 }} />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      height: 50,
                      // backgroundColor: "pink",
                    }}
                  >
                    <Image source={item.image13} />
                    <View
                      style={{
                        width: 10,
                      }}
                    />

                    <Text style={{ fontSize: 11, color: "grey" }}>
                      Party Friends
                    </Text>
                    <View
                      style={{
                        width: 23,
                      }}
                    />

                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                        }}
                      >
                        0/2 members
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "grey",
                        }}
                      >
                        Time:
                        {item.time}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 15,
                      }}
                    />
                    <TouchableOpacity>
                      <View
                        style={{
                          height: 38,
                          width: 65,
                          borderRadius: 12,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#112735",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                          }}
                        >
                          join
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",

                  alignItems: "center",
                  justifyContent: "center",
                  height: 140,
                }}
              >
                <View
                  style={{
                    height: 130,
                    width: "90%",

                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      Rules
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Read Complete Rules
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        // backgroundColor: "pink",
                        width: 80,
                        padding: 6,
                        marginLeft: 9,
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 50,
                          borderWidth: 1,
                          height: 50,
                          width: 50,
                          borderColor: "#112735",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FontAwesome name="inr" size={21} />
                      </View>
                      <Text
                        style={{
                          // textAlign: "center",
                          fontSize: 9,
                          color: "#112735",
                        }}
                      >
                        Start a Group
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: "pink",
                        width: 80,
                        padding: 6,
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 50,
                          borderWidth: 1,
                          height: 50,
                          width: 50,
                          borderColor: "#112735",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FontAwesome name="user" size={21} />
                      </View>
                      <Text
                        style={{
                          // textAlign: "center",
                          marginLeft: 4,
                          fontSize: 9,
                          color: "#112735",
                        }}
                      >
                        Invite User
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: "pink",
                        width: 80,
                        padding: 6,
                        // marginTop: 2,
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 50,
                          borderWidth: 1,
                          height: 50,
                          width: 50,
                          borderColor: "#112735",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FontAwesome name="group" size={21} />
                      </View>
                      <Text
                        style={{
                          // textAlign: "center",
                          fontSize: 9,
                          color: "#112735",
                        }}
                      >
                        Complete Group
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: "pink",
                        width: 80,
                        padding: 6,
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 50,
                          borderWidth: 1,
                          height: 50,
                          width: 50,
                          borderColor: "#112735",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Ionicons name="md-gift-outline" size={21} />
                      </View>
                      <Text
                        style={{
                          // textAlign: "center",
                          fontSize: 9,
                          color: "#112735",
                        }}
                      >
                        Save Together
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  padding: 20,
                  // marginLeft: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#B4B4B4",
                  }}
                >
                  This style is from our soon-to-be launched collection and we
                  are currently taking limited Pre-orders on this style. By
                  pre-ordering it, you would be among the first fashionistas to
                  flaunt this. We will ship this product to you within 5-10 days
                  of the order date.
                </Text>
              </View>

              <View
                style={{
                  height: 140,
                  width: "100%",
                  alignItems: "center",
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 130,
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                    width: "90%",
                    // padding: 12,
                    paddingTop: 10,
                    paddingLeft: 20,
                    // backgroundColor: "pink",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    Product Details
                  </Text>

                  <Text
                    style={{
                      fontSize: 13,
                      color: "grey",
                    }}
                  >
                    Fabric : {item.fabric}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "grey",
                    }}
                  >
                    SleeveLength : {item.SleeveLength}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "grey",
                    }}
                  >
                    Pattern : {item.Pattern}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "grey",
                    }}
                  >
                    Multipack : {item.Multipack}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#FE7419",
                      }}
                    >
                      View All
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  height: 450,
                  width: "100%",
                  alignItems: "center",
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 440,
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                    width: "90%",
                    padding: 12,
                    // backgroundColor: "pink",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      Product Ratings & Reviews
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#FE7419",
                          fontWeight: "bold",
                        }}
                      >
                        View ALL
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <View
                      style={{
                        width: 60,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 38,
                          // fontWeight: "bold",
                        }}
                      >
                        {item.ratingpoint}
                      </Text>

                      <Text
                        style={{
                          color: "grey",
                          fontSize: 10,
                        }}
                      >
                        {item.ratingpeople} ratings
                      </Text>

                      <Text
                        style={{
                          color: "grey",
                          fontSize: 10,
                        }}
                      >
                        {item.reviews} reviews
                      </Text>
                    </View>
                    <AntDesign
                      name="star"
                      size={20}
                      style={{
                        color: "#FDCC0D",
                      }}
                    />
                    {/* <View> */}
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          // width: 100,
                          height: 20,
                          // backgroundColor: "pink",
                        }}
                      >
                        <View style={{ width: 15 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          Excellent
                          {/* {item.Excellent} */}
                          {/* {"   "} */}
                        </Text>
                        <View style={{ width: 17 }} />
                        <View
                          style={{
                            marginTop: 7,
                            height: 5,
                            width: 130,
                            borderRadius: 5,
                            backgroundColor: "lightgrey",
                          }}
                        >
                          <View
                            style={{
                              borderRadius: 5,

                              width: 100,
                              backgroundColor: "#0D845C",
                              height: 5,
                            }}
                          ></View>
                        </View>
                        <View style={{ width: 4 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {item.ratingnumberExcellent}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          // width: 100,
                          height: 20,
                          // backgroundColor: "pink",
                        }}
                      >
                        <View style={{ width: 15 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          Very Good
                        </Text>
                        <View style={{ width: 9 }} />

                        <View
                          style={{
                            marginTop: 7,
                            height: 5,
                            width: 130,
                            borderRadius: 5,
                            backgroundColor: "lightgrey",
                          }}
                        >
                          <View
                            style={{
                              borderRadius: 5,

                              width: 120,
                              backgroundColor: "#47BD95",
                              height: 5,
                            }}
                          ></View>
                        </View>
                        <View style={{ width: 4 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {item.ratingnumberVeryGood}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          // width: 100,
                          height: 20,
                          // backgroundColor: "pink",
                        }}
                      >
                        <View style={{ width: 15 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          Good
                        </Text>
                        <View style={{ width: 36 }} />

                        <View
                          style={{
                            marginTop: 7,
                            height: 5,
                            width: 130,
                            borderRadius: 5,
                            backgroundColor: "lightgrey",
                          }}
                        >
                          <View
                            style={{
                              borderRadius: 5,

                              width: 70,
                              backgroundColor: "#83DDBA",
                              height: 5,
                            }}
                          ></View>
                        </View>
                        <View style={{ width: 4 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {item.ratingnumberGood}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          // width: 100,
                          height: 20,
                          // backgroundColor: "pink",
                        }}
                      >
                        <View style={{ width: 15 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          Average
                        </Text>
                        <View style={{ width: 22 }} />

                        <View
                          style={{
                            marginTop: 7,
                            height: 5,
                            width: 130,
                            borderRadius: 5,
                            backgroundColor: "lightgrey",
                          }}
                        >
                          <View
                            style={{
                              borderRadius: 5,

                              width: 40,
                              backgroundColor: "#F47006",
                              height: 5,
                            }}
                          ></View>
                        </View>
                        <View style={{ width: 4 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {item.ratingnumberAverage}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          // width: 100,
                          height: 20,
                          // backgroundColor: "pink",
                        }}
                      >
                        <View style={{ width: 15 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          Poor
                        </Text>
                        <View style={{ width: 39 }} />

                        <View
                          style={{
                            marginTop: 7,
                            height: 5,
                            width: 130,
                            borderRadius: 5,
                            backgroundColor: "lightgrey",
                          }}
                        >
                          <View
                            style={{
                              borderRadius: 5,

                              width: 20,
                              backgroundColor: "#DC1804",
                              height: 5,
                            }}
                          ></View>
                        </View>
                        <View style={{ width: 4 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {item.ratingnumberPoor}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 20,
                    }}
                  />
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: "black",
                      height: 1,
                    }}
                  />
                  <Text
                    style={{
                      padding: 12,
                      // backgroundColor: "pink",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    Real Images and Review from Customers
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      // margin: 4,
                    }}
                  >
                    <Image
                      style={{
                        // padding: 3,
                        width: 44,
                        height: 42,
                      }}
                      source={item.image14}
                    />
                    <Image
                      style={{
                        width: 44,
                        marginLeft: 5,
                        height: 42,
                      }}
                      source={item.image15}
                    />
                    <Image
                      style={{
                        marginLeft: 5,
                        width: 44,
                        height: 42,
                      }}
                      source={item.image16}
                    />
                    <Image
                      style={{
                        width: 44,
                        marginLeft: 5,

                        height: 42,
                      }}
                      source={item.image17}
                    />
                    <Image
                      style={{
                        width: 44,
                        marginLeft: 5,

                        height: 42,
                      }}
                      source={item.image18}
                    />
                    <Image
                      style={{
                        width: 44,
                        marginLeft: 5,

                        height: 42,
                      }}
                      source={item.image19}
                    />
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      marginTop: 20,
                      marginBottom: 20,
                      borderColor: "black",
                      height: 1,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image source={item.image12} />
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                        }}
                      >
                        Bidisha Saikia
                      </Text>
                      <View
                        style={{
                          width: 31,
                          height: 18,
                          backgroundColor: "#47BD95",
                          borderRadius: 9,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          3
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ height: 5 }} />
                  <Text style={{ fontSize: 10 }}>
                    Very good and excellent product
                  </Text>
                  <View style={{ height: 5 }} />

                  <Image source={item.image14} />
                  <TouchableOpacity
                    style={{
                      width: 100,
                    }}
                  >
                    <View style={{ height: 5 }} />

                    <Text
                      style={{
                        color: "#FE7419",
                        fontSize: 13,
                        // backgroundColor: "pink",
                      }}
                    >
                      View all Reviews
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  height: 104,
                  width: "100%",
                  alignItems: "center",
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 84,
                    borderColor: "lightgrey",
                    // borderWidth: 1,
                    borderRadius: 10,
                    width: "90%",
                    padding: 17,
                    // alignItems: "center",
                    // justifyContent: "center",
                    backgroundColor: "lightgrey",
                  }}
                >
                  <View
                    style={{
                      // backgroundColor
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("../Assets/IMages/sellerimage.png")}
                      style={{
                        height: 62,
                        width: 62,
                        borderRadius: 62,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: -70,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          color: "#FE7419",
                        }}
                      >
                        Seller
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#122736",
                        }}
                      >
                        Abhijit Das
                      </Text>
                    </View>
                    <FontAwesome5
                      style={{
                        color: "grey",
                      }}
                      name="house-user"
                      size={50}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  padding: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    // marginLeft: 30,
                    // marginTop: 30,
                    fontWeight: "800",
                  }}
                >
                  Check Delivery Date
                </Text>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <TextInput
                    style={{
                      // backgroundColor: "pink",
                      width: 250,
                      height: 40,
                    }}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter Pincode"
                    keyboardType="numeric"
                  ></TextInput>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: "bold",
                        color: "#FE7419",
                      }}
                    >
                      Check
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "black",
                  }}
                />
                <View
                  style={{
                    // flexDirection: "row",
                    padding: 9,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      // style
                      source={require("../Assets/IMages/cardelivery.png")}
                    />
                    <View style={{ width: 20 }} />
                    <Text
                      style={{
                        marginLeft: 3,
                        fontSize: 13,
                      }}
                    >
                      Enter Pincode for Estimated Delivery Date
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      // style
                      source={require("../Assets/IMages/calander.png")}
                    />
                    <View style={{ width: 20 }} />
                    <Text
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Dispatch in 2-3 days
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",

                  alignItems: "center",
                  justifyContent: "center",
                  height: 90,
                }}
              >
                <View
                  style={{
                    height: 80,
                    width: "90%",

                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: 107,
                        // backgroundColor: "pink",
                        height: 80,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Image
                          style={{
                            height: 35,
                            width: 60,
                          }}
                          source={require("../Assets/IMages/INR.png")}
                        />
                        <Text
                          style={{
                            width: 40,
                            fontSize: 10,
                          }}
                        >
                          Free Cash on Delivery
                        </Text>
                        <View
                          style={{
                            borderRightWidth: 1,
                            height: 40,
                            borderRightColor: "lightgrey",
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: 107,
                        // backgroundColor: "blue",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 80,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Image
                          style={{
                            height: 40,
                            width: 65,
                          }}
                          source={require("../Assets/IMages/clock.png")}
                        />
                        <Text
                          style={{
                            width: 40,
                            fontSize: 10,
                          }}
                        >
                          7 Days Easy Returns
                        </Text>
                        <View
                          style={{
                            borderRightWidth: 1,
                            height: 40,
                            borderRightColor: "lightgrey",
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: 107,
                        // backgroundColor: "yellow",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 90,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Image
                          style={{
                            height: 43,
                            width: 40,
                          }}
                          source={require("../Assets/IMages/coin.png")}
                        />
                        <Text
                          style={{
                            width: 38,
                            fontSize: 10,
                          }}
                        >
                          Lowest Price Guarantee
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 17,
                }}
              >
                <Text>You may also like</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text>View all</Text>
                  <Ionicons
                    style={{
                      // fontSize: 14,
                      color: "grey",
                    }}
                    name="ios-arrow-forward-circle"
                    size={19}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View
        style={{
          width: "100%",
          height: 80,
          position: "absolute",
          bottom: 0,
          // backgroundColor: "pink",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "25%",
            height: 80,
            // backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: 57,
                borderRadius: 57,
                height: 57,
              }}
            >
              <AntDesign style={{ color: "#112735" }} name="hearto" size={35} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            width: "75%",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "blue",
          }}
        >
          <View
            style={{
              height: 57,
              width: "90%",
              borderRadius: 13,
              backgroundColor: "#112735",
              flexDirection: "row",
              padding: 5,
            }}
          >
            <FlatList
              data={MainData}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      height: 47,
                      // backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 18,
                          // fontWeight: "bold",
                          fontWeight: "900",

                          color: "white",
                        }}
                      >
                        {item.offrate}
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "white",
                          // fontWeight: "bold",
                        }}
                      >
                        Buy Individually
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: "50%",
                      height: 47,
                      backgroundColor: "#F0F0F0",
                      borderRadius: 13,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BottomSheet height={600} ref={bottomSheet}>
                      {/* <Text>Your bottom sheet content goes here</Text>
                      
                       */}

                      <View style={{ padding: 25 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 25,
                              color: "#FF4D00",
                              fontWeight: "bold",
                            }}
                          >
                            {item.rate}
                          </Text>
                          {/* <Entypo name="cross" size={35} /> */}
                        </View>
                        <Text>Wine Solid Cut Outs Gown</Text>
                        <View
                          style={{
                            height: "5%",
                          }}
                        />
                        <View
                          style={{
                            height: 210,
                            width: 210,
                            // width:
                            // alignItems: "center",
                            alignSelf: "center",
                            // backgroundColor: "pink",
                          }}
                        >
                          <Image
                            source={item.imagemain}
                            style={{
                              width: 210,
                              height: 210,
                              borderRadius: 10,
                            }}
                          />
                          {/* <View></View> */}
                        </View>
                        <View
                          style={{
                            height: "3%",
                          }}
                        />
                        <View
                          style={{
                            flexDirection: "row",
                            // justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                            }}
                          >
                            Select Color
                          </Text>
                          <View style={{ width: "5%" }} />
                          <Image
                            style={{
                              marginRight: 10,
                              height: 61,
                              borderRadius: 7,
                              width: 53,
                            }}
                            source={item.imagemain}
                          />
                          <Image
                            style={{
                              height: 61,
                              borderRadius: 7,

                              width: 53,
                            }}
                            source={item.imagemain1}
                          />
                        </View>
                        <View
                          style={{
                            height: "3%",
                          }}
                        />
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                            }}
                          >
                            Select size
                          </Text>
                          <View style={{ width: "5%" }} />

                          {BuyData.map(item => (
                            <TouchableOpacity onPress={() => console.log(item)}>
                              <View
                                style={{
                                  width: 44,
                                  height: 44,
                                  // marginLeft: 3,
                                  justifyContent: "center",
                                }}
                              >
                                <Text>{item}</Text>
                              </View>
                            </TouchableOpacity>
                          ))}

                          {/* <View
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 44,
                              borderWidth: 1,
                              borderColor: "grey",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text>S</Text>
                          </View>
                          <View
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 44,
                              borderWidth: 1,
                              borderColor: "grey",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text>M</Text>
                          </View> */}
                          {/* <View
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 44,
                              borderWidth: 1,
                              borderColor: "grey",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text>L</Text>
                          </View> */}
                          {/* <View
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 44,
                              borderWidth: 1,
                              borderColor: "grey",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text>XL</Text>
                          </View>
                          <View
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 44,
                              borderWidth: 1,
                              borderColor: "grey",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text>XXL</Text>
                          </View> */}
                        </View>
                        <View
                          style={{
                            height: "2%",
                          }}
                        />
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <View
                            style={{
                              width: "60%",
                              height: 44,
                              // backgroundColor: "pink",
                              // alignItems: "center",
                              // flexDirection: "row",
                              justifyContent: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                              }}
                            >
                              Quantity
                            </Text>
                          </View>
                          <TouchableOpacity onPress={() => setCount(count - 1)}>
                            <View
                              style={{
                                // height:44,
                                width: 44,
                                height: 44,
                                borderRadius: 44,
                                // borderWidth: 1,
                                // borderColor: "grey",
                                backgroundColor: "lightgrey",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 30,
                                  color: "white",
                                }}
                              >
                                -
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 33,
                            }}
                          >
                            {count}
                          </Text>
                          <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <View
                              style={{
                                // height:44,
                                width: 44,
                                height: 44,
                                borderRadius: 44,
                                // borderWidth: 1,
                                // borderColor: "grey",
                                backgroundColor: "#112735",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 30,
                                  color: "white",
                                }}
                              >
                                +
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            height: "2%",
                          }}
                        />
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate("CartScreen")
                          }
                        >
                          <View
                            style={{
                              height: 56,
                              backgroundColor: "#C3C3C3",
                              justifyContent: "center",
                              borderRadius: 12,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 20,
                                textAlign: "center",
                                color: "white",
                              }}
                            >
                              Buy now
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </BottomSheet>
                    <TouchableOpacity
                      onPress={() => bottomSheet.current.show()}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          // fontWeight: "200",
                          fontWeight: "900",
                          color: "#112735",
                        }}
                      >
                        {item.rate}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          width: 80,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 11,
                            color: "#112735",
                            // fontWeight: "800",
                          }}
                        >
                          Group Buy
                        </Text>
                        <AntDesign name="caretdown" size={10} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MainPurchasing;
