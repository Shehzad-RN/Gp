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

const imageData = [
  {
    image1: require("../Assets/IMages/BoyImage/First.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Sleeveless Hooded T-shirt",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  {
    image1: require("../Assets/IMages/BoyImage/Second.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Sleeveless Hooded T-shirt",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  {
    image1: require("../Assets/IMages/BoyImage/B3.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Sleeveless Hooded T-shirt",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  {
    image1: require("../Assets/IMages/BoyImage/First.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Sleeveless Hooded T-shirt",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  // {
  //   image1: require("../../../Assets/images/Boyimage2.png"),
  //   image2: require("../../../Assets/images/image2.png"),
  //   ratingpoint: "4.5",
  //   ratingpeople: "223",
  //   itemtitle: "Red Wine T-shirt",
  //   offrate: "₹ 999",
  //   rate: "₹ 669",
  //   saleoffpercent: "40% OFF",
  //   image3: require("../../../Assets/images/image3.png"),
  // },
  // {
  //   image1: require("../../../Assets/images/Boyimage3.png"),
  //   image2: require("../../../Assets/images/image2.png"),
  //   ratingpoint: "4.0",
  //   ratingpeople: "223",
  //   itemtitle: "Solid White Jacket",
  //   offrate: "₹ 999",
  //   rate: "₹ 669",
  //   saleoffpercent: "50% OFF",
  //   image3: require("../../../Assets/images/image3.png"),
  // },
  // {
  //   image1: require("../../../Assets/images/Boyimage4.png"),
  //   image2: require("../../../Assets/images/image2.png"),
  //   ratingpoint: "4.5",
  //   ratingpeople: "223",
  //   itemtitle: "Turtle Neck Sweatshirt",
  //   offrate: "₹ 999",
  //   rate: "₹ 669",

  //   saleoffpercent: "40% OFF",
  //   image3: require("../../../Assets/images/image3.png"),
  // },
];

const BoyFlatlist = props => {
  // props.okey = true;
  return (
    <View style={{}}>
      <FlatList
        data={imageData}
        numColumns={props.num}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              margin: 5,

              borderColor: "#DBDBDB",
              width: 170,
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              height: 280,
            }}
          >
            <View style={{}}>
              <TouchableOpacity onPress={() => props.Next("MainPurchasing")}>
                <Image
                  style={{
                    height: 220,

                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,

                    width: 169,
                  }}
                  source={item.image1}
                ></Image>
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  width: 170,
                  height: 40,

                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      marginTop: 10,
                      height: 31,
                      marginRight: 10,
                      width: 31,
                      borderRadius: 31,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      style={{ color: "black" }}
                      name="hearto"
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 170,
                  height: 30,
                  marginTop: -30,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    width: 92,
                    height: 21,
                    flexDirection: "row",
                    borderRadius: 21,
                    backgroundColor: "lightgrey",
                    opacity: 0.8,
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
            </View>
            <View style={{ height: 4 }} />
            <View
              style={{
                width: 170,
                height: 35,
                paddingTop: 1,
                marginLeft: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
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
                <View
                  style={{
                    marginLeft: 12,
                  }}
                >
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 24,
                    }}
                    source={item.image2}
                  />
                </View>
                <View
                  style={{
                    marginLeft: -10,
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 24,
                    }}
                    source={item.image3}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default BoyFlatlist;
