import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Check from "./Check";
import CategoryIMageCimponents from "../Components/CategoryIMageCimponents";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
const Data = [
  "Woman Wears",
  "Man Wear",
  "Kids Wears",
  "Beauty",
  "Footwear",
  "Accessories",
  "Winter Wear",
  "Electronics",
  "Home",
  "Top Offers",
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
    itemtitle: "Wine Solid Cut Outs \n Gown",
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

const WomanTopData = [
  {
    title: "Polo",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman1.png"),
  },
  {
    title: "Round",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman2.png"),
  },
  {
    title: "Printed",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman3.png"),
  },
  {
    title: "Sleeveless",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman4.png"),
  },
  {
    title: "Classic",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman5.png"),
  },
  {
    title: "Full sleeve",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman6.png"),
  },
  {
    title: "Striped",
    imagePath: require("../Assets/IMages/Cateory/Womans/Top/Woman7.png"),
  },
];
const WomanDress = [
  {
    title: "Party wear",
    imagePath: require("../Assets/IMages/Cateory/Womans/Dress/Dress1.png"),
  },
  {
    title: "Casual",
    imagePath: require("../Assets/IMages/Cateory/Womans/Dress/Dress2.png"),
  },
  {
    title: "Long dress",
    imagePath: require("../Assets/IMages/Cateory/Womans/Dress/Dress3.png"),
  },
];
const WomanJeans = [
  {
    title: "Stiched",
    imagePath: require("../Assets/IMages/Cateory/Womans/jeans/Jeans1.png"),
  },
  {
    title: "Shorts",
    imagePath: require("../Assets/IMages/Cateory/Womans/jeans/Jeans2.png"),
  },
  {
    title: "Skinny",
    imagePath: require("../Assets/IMages/Cateory/Womans/jeans/Jeans3.png"),
  },
  {
    title: "Jeggings",
    imagePath: require("../Assets/IMages/Cateory/Womans/jeans/Jeans4.png"),
  },
  {
    title: "Straight",
    imagePath: require("../Assets/IMages/Cateory/Womans/jeans/Jeans5.png"),
  },
];
const Womanskrts = [
  {
    title: "A-line",
    imagePath: require("../Assets/IMages/Cateory/Womans/Skrts/Skrt5.png"),
  },
  {
    title: "Long",
    imagePath: require("../Assets/IMages/Cateory/Womans/Skrts/Skrt1.png"),
  },
  {
    title: "Pencil",
    imagePath: require("../Assets/IMages/Cateory/Womans/Skrts/Skrt4.png"),
  },
  {
    title: "Mini",
    imagePath: require("../Assets/IMages/Cateory/Womans/Skrts/Skrt3.png"),
  },
  {
    title: "Layred",
    imagePath: require("../Assets/IMages/Cateory/Womans/Skrts/Skrt2.png"),
  },
];
const WomansKurtas = [
  {
    title: "Anarkali",
    imagePath: require("../Assets/IMages/Cateory/Womans/Kurtas/Kurta1.png"),
  },
  {
    title: "Long straight",
    imagePath: require("../Assets/IMages/Cateory/Womans/Kurtas/Kurta2.png"),
  },
  {
    title: "Indo-western",
    imagePath: require("../Assets/IMages/Cateory/Womans/Kurtas/Kurta3.png"),
  },
  {
    title: "A-line",
    imagePath: require("../Assets/IMages/Cateory/Womans/Kurtas/Kurta4.png"),
  },

  {
    title: "Floor length",
    imagePath: require("../Assets/IMages/Cateory/Womans/Kurtas/kurta5.png"),
  },
  {
    title: "Flared",
    imagePath: require("../Assets/IMages/Cateory/Womans/Kurtas/Kurta6.png"),
  },
];
const WomanSarees = [
  {
    title: "Silk",
    imagePath: require("../Assets/IMages/Cateory/Womans/sarees/sarees0.png"),
  },
  {
    title: "Banarasi",
    imagePath: require("../Assets/IMages/Cateory/Womans/sarees/sarees1.png"),
  },
  {
    title: "Cotton",
    imagePath: require("../Assets/IMages/Cateory/Womans/sarees/sarees2.png"),
  },
  {
    title: "Casual",
    imagePath: require("../Assets/IMages/Cateory/Womans/sarees/sarees3.png"),
  },

  {
    title: "Elegant",
    imagePath: require("../Assets/IMages/Cateory/Womans/sarees/sarees4.png"),
  },
  {
    title: "Party",
    imagePath: require("../Assets/IMages/Cateory/Womans/sarees/sarees5.png"),
  },
];
const WomanSports = [
  {
    title: "Sports bra",
    imagePath: require("../Assets/IMages/Cateory/Womans/Sports/Sport1.png"),
  },
  {
    title: "Sleeveless",
    imagePath: require("../Assets/IMages/Cateory/Womans/Sports/Sport2.png"),
  },
  {
    title: "T-shirt",
    imagePath: require("../Assets/IMages/Cateory/Womans/Sports/Sport3.png"),
  },

  {
    title: "Track pant",
    imagePath: require("../Assets/IMages/Cateory/Womans/Sports/Sport5.png"),
  },
  {
    title: "Full sleeve",
    imagePath: require("../Assets/IMages/Cateory/Womans/Sports/Sport6.png"),
  },
  {
    title: "Shorts",
    imagePath: require("../Assets/IMages/Cateory/Womans/Sports/Sport7.png"),
  },
];
const WomanLingerie = [
  {
    title: "Bra",
    imagePath: require("../Assets/IMages/Cateory/Womans/Lingerie/Lingerie1.png"),
  },
  {
    title: "Bottom",
    imagePath: require("../Assets/IMages/Cateory/Womans/Lingerie/Lingerie2.png"),
  },
  {
    title: "Nighty",
    imagePath: require("../Assets/IMages/Cateory/Womans/Lingerie/Lingerie3.png"),
  },

  {
    title: "Short nighty",
    imagePath: require("../Assets/IMages/Cateory/Womans/Lingerie/Lingerie4.png"),
  },
  {
    title: "Shorts",
    imagePath: require("../Assets/IMages/Cateory/Womans/Lingerie/Lingerie5.png"),
  },
  {
    title: "Top",
    imagePath: require("../Assets/IMages/Cateory/Womans/Lingerie/Lingerie6.png"),
  },
];



const Category = props => {
  const [DOp, setDOp] = useState(0);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderRadius: 40,
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#EDEDED",
            marginBottom: 10,
            borderColor: "#EDEDED",
            height: 40,
          }}
        >
          <TextInput
            style={{ marginLeft: 18 }}
            placeholder="Search by product, brand & more..."
          />
        </View>
      </View>
      <Button onPress={() => props.navigation.navigate('Ctg')}>CTG</Button>

      <View
        style={{
          height: "100%",
          width: "98%",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <View style={{ height: "100%", width: "30%" }}>
          <FlatList
            data={Data}
            //   horizontal
            pagingEnabled
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setDOp(index)}>
                <View
                  style={{
                    height: 30,
                    alignSelf: "center",
                    backgroundColor: DOp == index ? "#fff" : null,
                    width: "100%",
                    marginTop: 20,
                    marginLeft: 10,
                  }}
                >
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ height: "100%", width: "70%", backgroundColor: "#fff" }}>
          {DOp == 0 ? (
            <ScrollView style={{}}>
              <View style={{ width: "98%", alignSelf: "flex-end" }}>
                <Text>Tops</Text>
                <CategoryIMageCimponents WomanTopData={WomanTopData} />
                <View style={{ marginTop: 10 }} />

                <Text>Dress</Text>

                <CategoryIMageCimponents
                  WomanTopData={WomanDress}
                  check={true}
                />
                <View style={{ marginTop: 10 }} />
                <Text>Jeans</Text>

                <CategoryIMageCimponents WomanTopData={WomanJeans} />
                <View style={{ marginTop: 10 }} />
                <Text>Skirts</Text>

                <CategoryIMageCimponents WomanTopData={Womanskrts} />

                <View style={{ marginTop: 10 }} />
                <Text>Kurtas</Text>

                <CategoryIMageCimponents WomanTopData={WomansKurtas} />
                <View style={{ marginTop: 10 }} />
                <Text>Sarees</Text>

                <CategoryIMageCimponents WomanTopData={WomanSarees} />
                <View style={{ marginTop: 10 }} />
                <Text>Sports</Text>

                <CategoryIMageCimponents WomanTopData={WomanSports} />
                <View style={{ marginTop: 10 }} />
                <Text>Lingerie</Text>

                <CategoryIMageCimponents WomanTopData={WomanLingerie} />
                <View style={{ marginTop: 10 }} />

                <Check imageData={imageData} />
                <View style={{ marginTop: 100 }} />
                <View>
                  <Text> </Text>
                </View>
              </View>
            </ScrollView>
          ) : DOp == 1 ? (
            <Text>Coming Soon</Text>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Category;
