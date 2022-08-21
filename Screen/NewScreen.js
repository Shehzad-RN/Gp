import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import { Touchable } from "react-native";
import Check1 from "../Components/Check1";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import BoyFlatlist from "../Components/BoyFlatlist";
const IMageSlider = [
  require("../Assets/IMages/NewScreen/First.png"),
  require("../Assets/IMages/NewScreen/First.png"),
];

const imageData = [
  {
    image1: require("../Assets/IMages/image1.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Rose Stripes Dress",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  {
    image1: require("../Assets/IMages/image4.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Wine Solid Cut Outs Gown",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  {
    image1: require("../Assets/IMages/image5.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Black Colorblocked Wrap Dress",
    offrate: "₹ 999",
    rate: "₹ 669",
    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
  {
    image1: require("../Assets/IMages/image6.png"),
    image2: require("../Assets/IMages/image2.png"),
    ratingpoint: "4.5",
    ratingpeople: "223",
    itemtitle: "Solid Fit And Flare Dress",
    offrate: "₹ 999",
    rate: "₹ 669",

    saleoffpercent: "40% OFF",
    image3: require("../Assets/IMages/image3.png"),
  },
];
const NewScreen = props => {
  const moment = require("moment");

  console.log(moment().toDate());
  const m = new Date().getMonth() + 1;
  const d = moment().subtract(2, "d").format("D/M ");

  const d2 = moment().subtract(3, "d").format("D/M ");
  const d3 = moment().subtract(4, "d").format("D/M ");
  const d4 = moment().subtract(5, "d").format("D/M ");
  const d5 = moment().subtract(6, "d").format("D/M ");
  // const m = new Date().getMonth();
  // console.log(moment().subtract(1, "d").format());

  const [Selet, setSelet] = React.useState(0);
  const DateData = ["Today", "Yesterday", d, d2, d3, d4, d5];
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 50,
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{ width: "90%", alignSelf: "center", flexDirection: "row" }}
          >
            <Text>NEW ARRIVALS</Text>
            <View style={{ width: "65%" }} />
            <TouchableOpacity>
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <SliderBox
          images={IMageSlider}
          sliderBoxHeight={164.47}
          resizeMethod={"resize"}
          resizeMode={"cover"}
          dotColor="#122736"
          inactiveDotColor="#DADADA"
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 15,

            marginVertical: -29,

            marginTop: 50,
          }}
        />

        <View style={{ flexDirection: "row", marginTop: 29 }}>
          <FlatList
            data={DateData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={{
                  // marginLeft: 20,
                  width: 65,
                  height: 50,
                  justifyContent: "center",
                  // backgroundColor: index == Selet ? "cyan" : null,
                  alignItems: "center",
                  // borderWidth:1,
                  borderBottomWidth: index == Selet ? 3 : 0,
                  borderColor: index == Selet ? "#FF4D00" : null,
                  borderRadius: 3,
                }}
              >
                <TouchableOpacity onPress={() => setSelet(index)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          {Selet == 0 ? (
            <View>
              <Check1
                okey={true}
                num={2}
                Next={props.navigation.navigate}
                // ScreenName={}
                imageData={imageData}
              />
            </View>
          ) : Selet == 1 ? (
            <BoyFlatlist
              num={2}
              Next={props.navigation.navigate}
              // ScreenName={}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewScreen;
