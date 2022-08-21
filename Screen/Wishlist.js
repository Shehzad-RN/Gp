import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Check1 from "../Components/Check1";
import { ScrollView } from "react-native-gesture-handler";
const imageData2 = [
  {
    image1: require("../Assets/IMages/image20.png"),
    image2: require("../Assets/IMages/image21.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Rose Stripes Dress",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image22.png"),
    time: " 02: 05: 50",
    member: "1/2",
  },
  {
    image1: require("../Assets/IMages/image20.png"),
    image2: require("../Assets/IMages/image21.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Rose Stripes Dress",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image22.png"),
    time: " 02: 05: 50",
    member: "1/2",
  },
  {
    image1: require("../Assets/IMages/image20.png"),
    image2: require("../Assets/IMages/image21.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Rose Stripes Dress",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image22.png"),
    time: " 02: 05: 50",
    member: "1/2",
  },
  {
    image1: require("../Assets/IMages/image20.png"),
    image2: require("../Assets/IMages/image21.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Rose Stripes Dress",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image22.png"),
    time: " 02: 05: 50",
    member: "1/2",
  },
  // {
  //   image1: require("../Assets/IMages/image20.png"),
  //   image2: require("../Assets/IMages/image21.png"),
  //   ratingpoint: "4.5",
  //   ratingpeople: "223",
  //   itemtitle: "Rose Stripes Dress",
  //   offrate: "₹ 999",
  //   rate: "₹ 669",
  //   saleoffpercent: "40% OFF",
  //   image3: require("../Assets/IMages/image22.png"),
  //   time: " 02: 05: 50",
  //   member: "1/2",
  // },
  //   {
  //     image1: require("../../../Assets/images/image23.png"),
  //     image2: require("../../../Assets/images/image21.png"),
  //     ratingpoint: "4.5",
  //     ratingpeople: "223",
  //     itemtitle: "Rose Stripes Dress",
  //     offrate: "₹ 999",
  //     rate: "₹ 669",
  //     saleoffpercent: "40% OFF",
  //     image3: require("../../../Assets/images/image22.png"),
  //     time: " 02: 05: 50",
  //     member: "1/2",
  //   },
  //   {
  //     image1: require("../../../Assets/images/image24.png"),
  //     image2: require("../../../Assets/images/image21.png"),
  //     ratingpoint: "4.5",
  //     ratingpeople: "223",
  //     itemtitle: "Rose Stripes Dress",
  //     offrate: "₹ 999",
  //     rate: "₹ 669",
  //     saleoffpercent: "40% OFF",
  //     image3: require("../../../Assets/images/image22.png"),
  //     time: " 02: 05: 50",
  //     member: "1/2",
  //   },
  //   {
  //     image1: require("../../../Assets/images/image23.png"),
  //     image2: require("../../../Assets/images/image21.png"),
  //     ratingpoint: "4.5",
  //     ratingpeople: "223",
  //     itemtitle: "Rose Stripes Dress",
  //     offrate: "₹ 999",
  //     rate: "₹ 669",
  //     saleoffpercent: "40% OFF",
  //     image3: require("../../../Assets/images/image22.png"),
  //     time: " 02: 05: 50",
  //     member: "1/2",
  //   },
];

const Wishlist = props => {
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
                MY WISHLIST
              </Text>
            </TouchableOpacity>
          </View>

          <Feather name="shopping-bag" size={24} color="black" />
        </View>
      </View>
      <ScrollView>
        <View style={{ marginTop: 5, height: "100%" }}>
          <Check1
            imageData={imageData2}
            okey={true}
            num={2}
            Next={props.navigation.navigate}
            // ScreenName={}
            heart={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Wishlist;
