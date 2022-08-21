import React, { useEffect, useState } from "react";
import Check1, { ImageCard } from "../Components/Check1";

import {
  View,
  Text,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
  Button,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import Check from "./Check";
import { Ionicons } from "@expo/vector-icons";
import BoyFlatlist from "../Components/BoyFlatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheet } from "react-native-btr";
import { FontAwesome } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Reconmended from "../Components/Reconmended";
import { EvilIcons } from "@expo/vector-icons";

import Mainscreenf from "../Components/Mainscreenf";
import { FontAwesome5 } from "@expo/vector-icons";
import setting from "../Back-end/Setteing.json";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import HomeCategory from "../Components/homeCategory";
import API from '../api/_api'
import { handleCategories } from "../Redux/dataReducer";
import FlashSellCart from "../Components/FlashSellCart";

// This is Group 2
const GroupData2 = [
  {
    IMagePath: require("../Assets/IMages/Group1.png"),
    AdressName: "Rose Stripes Dress",
    Time: <AntDesign name="hearto" size={24} color="black" />,
    Star: <Ionicons name="md-star-sharp" size={14} color="cyan" />,
    StarRate: "4.5",
    Purchased: "357",
    off: "40% OFF",
    realprice: "₹ 699",
    offPrice: "₹ 999",
    discount: "40% OFF",
  },
  {
    IMagePath: require("../Assets/IMages/Group5.png"),
    AdressName: "Rose Stripes Dress",
    Time: <AntDesign name="hearto" size={24} color="black" />,
    Star: <Ionicons name="md-star-sharp" size={14} color="cyan" />,
    StarRate: "4.5",
    Purchased: "357",
    off: "40% OFF",
    realprice: "₹ 699",
    offPrice: "₹ 999",
    discount: "40% OFF",
  },
  {
    IMagePath: require("../Assets/IMages/Group1.png"),
    AdressName: "Rose Stripes Dress",
    Time: <AntDesign name="hearto" size={24} color="black" />,
    Star: <Ionicons name="md-star-sharp" size={14} color="cyan" />,
    StarRate: "4.5",
    Purchased: "357",
    off: "40% OFF",
    realprice: "₹ 699",
    offPrice: "₹ 999",
    discount: "40% OFF",
  },
  {
    IMagePath: require("../Assets/IMages/Group5.png"),
    AdressName: "Rose Stripes Dress",
    Time: <AntDesign name="hearto" size={24} color="black" />,
    Star: <Ionicons name="md-star-sharp" size={14} color="cyan" />,
    StarRate: "4.5",
    Purchased: "357",
    off: "40% OFF",
    realprice: "₹ 699",
    offPrice: "₹ 999",
    discount: "40% OFF",
  },
  {
    IMagePath: require("../Assets/IMages/Group1.png"),
    AdressName: "Rose Stripes Dress",
    Time: <AntDesign name="hearto" size={24} color="black" />,
    Star: <Ionicons name="md-star-sharp" size={14} color="cyan" />,
    StarRate: "4.5",
    Purchased: "357",
    off: "40% OFF",
    realprice: "₹ 699",
    offPrice: "₹ 999",
    discount: "40% OFF",
  },
];
const Categorydata = [
  "Analog Watches",
  "Anklets & Toe Rings",
  "Appliance Covers",
  "Bagpacks",
  "Bangles & Bracelets",
  "Bathroom Accessories",
  "Bedding & Bedsheets",
  "Bellies and Ballerinas",
  "Blouses",
  "Boxers",
  "Bra",

  "Panty",
  "Lingerie sets",
  "Clutches",
  "Cups & Mugs",
  "Curtains & Accessories",
  "Cushion Covers",
  "Doormats",
  "Dresses",
  "Dupattas",
  "Earphones and Speakers",
  "Facecare",
  "Face Masks",
  "Flats",
  "Flipflops & Slippers",
  "Fragrance",
  "Tops",
  "Toys",
  "Track Suit",
];
const SortData = [
  "What's New",
  "Price-high to low",
  "Popularity",
  "Discount",
  "Price-low to high",
  "coustomer ranking",
];
const BestBuys = [
  require("../Assets/IMages/RecomandedProduct/first.png"),
  require("../Assets/IMages/RecomandedProduct/Second.png"),
  require("../Assets/IMages/RecomandedProduct/Third.png"),
  require("../Assets/IMages/RecomandedProduct/Forth.png"),
];
const SORTBY = [
  "What's new",
  "Price - high to low",
  "Popularity",
  "Discount",
  "Price - low to high",
  "Customer Rating",
];
const CategorySelect = [
  "Analog Watches",
  "Anklets & Toe Rings",
  "Appliance Covers",
  "Bagpacks",
  "Bangles & Bracelets",
  "Bathroom Accessories",
  "Bedding & Bedsheets",
  "Bellies and Ballerinas",
  "Blouses",
  "Boxers",
  "Bra",
  "Panty",
  "Lingerie sets",
  "Clutches",
  "Cups & Mugs",
  "Curtains & Accessories",

  "Cushion Covers",
  "Doormats",
  "Dresses",
  "Dupattas",
  "Earphones and Speakers",
  "Facecare",
  "Face Masks",
  "Flats",
  "Flipflops & Slippers",
  "Fragrance",
  "Tops",
  "Toys",
  "Track Suit",
  "Watches",
];
const FilterMadalData = [
  "Size",
  "Colour",
  "Brand",
  "Price Range",
  "Pattern",
  "Sleeve Length",
  "Body Shape",
  "Fabric",
  "Ratting",
  "Combo",
];
const MixDress = [
  { title: "Dress", imp: require("../Assets/IMages/Mix/First.png") },
  { title: "Tops", imp: require("../Assets/IMages/Mix/Second.png") },
  { title: "Jeans", imp: require("../Assets/IMages/Mix/m3.png") },
  // { title: "Dress", imp: require("../Assets/IMages/Mix/m.png") },
  { title: "Skirts", imp: require("../Assets/IMages/Mix/m4.png") },
  { title: "Kurtas", imp: require("../Assets/IMages/Mix/m5.png") },
  { title: "Sarees", imp: require("../Assets/IMages/Mix/m6.png") },
  { title: "Sports", imp: require("../Assets/IMages/Mix/m7.png") },
  { imp: require("../Assets/IMages/Mix/m8.png") },
];
const MixDress2 = [
  { title: "T-shirts", imp: require("../Assets/IMages/Mix/MixBoy/b1.png") },
  { title: "Shirts", imp: require("../Assets/IMages/Mix/MixBoy/b2.png") },
  { title: "Jeans", imp: require("../Assets/IMages/Mix/MixBoy/b3.png") },
  // { title: "Dress", imp: require("../Assets/IMages/Mix/m.png") },
  { title: "Vests", imp: require("../Assets/IMages/Mix/MixBoy/b4.png") },
  { title: "Formal", imp: require("../Assets/IMages/Mix/MixBoy/b5.png") },
  { title: "Traditional", imp: require("../Assets/IMages/Mix/MixBoy/b6.png") },
  { title: "Sports", imp: require("../Assets/IMages/Mix/MixBoy/b7.png") },
  { imp: require("../Assets/IMages/Mix/m8.png") },
];

const Moreoption = ["Party Dress", "Casual Dress", "Long Dress"];

const HomeScreen = props => {
  const dispatch = useDispatch()
  // Get Products Data from Redux
  const products = useSelector(state => state.root.data?.products?.results);

  // Get BestBuys Data from Redux
  const banner = useSelector(state => state.root.data?.banner);

  const [bannerImages, setBannerImages] = useState([]);
  const imageData = useSelector(state => state.root.counter.imageReduxData);
  const imageData2 = useSelector(state => state.root.counter.imageReduxData2);

  const [CheckData, setCheckData] = useState(imageData);
  const [Check11, setCheck11] = useState(imageData2);
  const [Checkindex, setCheckindex] = useState(0);
  const [GenderModal, setGenderModal] = useState(false);
  const [Category, setCategory] = useState(false);
  const [SortMadal, setSortMadal] = useState(false);
  const [FilterMadal, setFilterMadal] = useState(false);
  const [indexofFilter, setindexofFilter] = useState(0);
  const [moreoption, setmoreoption] = useState(false);
  const [Moreoptionindex, setMoreoptionindex] = useState(false);
  const [indexofmix, setIndexofmix] = useState();
  const [Data, setData] = useState();
  const [Dataapi, setDataapi] = useState();

  const Search = val => {
    filterData(val);
    filterData1(val);
  };
  const filterData = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setCheckData(imageData);
    else {
      const filteredData = imageData.filter(item => {
        console.log(Object.keys(item));
        return Object.keys(item).some(key => {
          return item[key].toString().toLowerCase().includes(lowercasedValue);
        });
      });
      setCheckData(filteredData);
    }
  };
  const filterData1 = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setCheck11(imageData2);
    else {
      const filteredData = imageData.filter(item => {
        console.log(Object.keys(item));
        return Object.keys(item).some(key => {
          return item[key].toString().toLowerCase().includes(lowercasedValue);
        });
      });
      setCheck11(filteredData);
    }
  };
  const seletectforcategory = index => {
    index == 7 ? props.navigation.navigate("Category") : setIndexofmix(index);
    setmoreoption(true);
  };

  React.useEffect(() => {
    if (bannerImages?.length === banner[0]?.length) {
      return false
    }
    let banner_image = [...bannerImages];
    banner[0]?.forEach(element => {
      banner_image.push(`http://api.groupick.in/media/${element.banner}`);
    });
    setBannerImages(banner_image)
  }, [banner]);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          height: 74,
          backgroundColor: "#112735",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Image
            style={{ height: 70, width: 40 }}
            source={require("../Assets/IMages/login1.png")}
          />
        </View>
        <View style={{ width: "3%" }} />
        <View
          style={{
            borderWidth: 1,
            borderColor: "#fff",

            height: 35,
            marginTop: 20,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
            width: "70%",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "2%",
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <AntDesign
            style={{
              justifyContent: "center",

              // marginLeft: -50,
              marginTop: 7,

              height: 50,
              marginLeft: -20,
            }}
            name="search1"
            size={20}
            color="black"
          />

          <TextInput
            style={{
              justifyContent: "center",

              height: 15,
              width: 200,
              marginTop: 10,
            }}
            placeholder="Search by Product brand"
            maxLength={100}
            onChangeText={val => Search(val)}
          />
        </View>
        <View style={{ width: "2%" }} />
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Notification")}
          >
            <FontAwesome name="bell" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <HomeCategory nav={props.navigation} />
        <View style={{ height: 10 }} />
        <View style={{ marginLeft: 0 }}>
          <View>
            <FlatList
              keyExtractor={(_, i) => i.toString()}
              data={Data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={{}}>
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      flexDirection: "column",
                    }}
                    onPress={() => setCheckindex(index)}
                  >
                    <Image
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 50,
                        marginLeft: 8,
                        borderWidth: 2,
                        borderColor: index == Checkindex ? "black" : null,
                        flexDirection: "column",
                      }}
                      source={{ uri: item.icon }}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "black",
                        textAlign: "center",
                        width: "97%",
                        flexWrap: "wrap",
                        alignSelf: "center",
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        {Checkindex == 0 ? (
          <View style={{}}>
            <View style={{ marginTop: 10 }} />
            <SliderBox
              images={bannerImages}
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
            <View style={{ height: 10, marginTop: 10 }} />
            {/* Flash sell */}
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View style={{ justifyContent: "flex-end" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  Flash sale
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{}}>Sale Ends in:</Text>
                  <EvilIcons name="clock" size={24} color="#FF4C00" />
                  <Text style={{ color: "#FF4C00" }}>5 hours 27mins </Text>
                </View>
              </View>
            </View>
            {/* Flash sell cart */}
            <View>
              <FlashSellCart />
            </View>
            <View style={{ marginTop: 20, }}>
              <Check
                okey={true}
                Next={props.navigation.navigate}
                imageData={Dataapi}
              />
              {/* <View
                style={{ width: "90%", alignSelf: "center", marginTop: 10 }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Best Buys
                </Text>
              </View>
              <View
                style={{ width: "97%", alignSelf: "center", marginTop: 10, }}
              >
                <Reconmended Next={props.navigation.navigate} data={bestBuys?.products} />
              </View> */}
              <View
                style={{
                  width: "100%",
                  borderWidth: 1,
                  marginTop: 5,
                  borderColor: "#DBDBDB",
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 52,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: 5 }} />
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => setGenderModal(true)}
                >
                  <FontAwesome5
                    name={"transgender"}
                    size={20}
                    color={"#B4B4B4"}
                  />

                  <Text
                    style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}
                  >
                    GENDER
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderRightWidth: 1,
                    height: 45,
                    marginLeft: 5,
                    borderColor: "#B4B4B4",
                  }}
                />
                <View
                  style={{
                    width: 1,
                  }}
                />
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => setCategory(true)}
                >
                  <View>
                    <MaterialIcons name="category" size={24} color="#B4B4B4" />
                  </View>
                  <Text
                    style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}
                  >
                    CATEGORY
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderRightWidth: 1,
                    height: 45,
                    marginLeft: 5,
                    borderColor: "#B4B4B4",
                  }}
                />
                <View style={{ width: 1 }} />
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => setSortMadal(true)}
                >
                  <View>
                    <MaterialCommunityIcons
                      name="sort"
                      size={24}
                      color="#B4B4B4"
                    />
                  </View>
                  <Text
                    style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}
                  >
                    SORT
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderRightWidth: 1,
                    height: 45,
                    marginLeft: 5,
                    borderColor: "#B4B4B4",
                  }}
                />
                <View style={{ width: 1 }} />
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => setFilterMadal(true)}
                >
                  <View>
                    <MaterialCommunityIcons
                      name="filter-variant"
                      size={24}
                      color="#B4B4B4"
                    />
                  </View>
                  <Text
                    style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}
                  >
                    FILTER
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderColor: "#DBDBDB",
                }}
              />
              <View style={{ width: "90%", alignSelf: "center", marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Recommend products
                </Text>
              </View>

              <View>
                {products?.length === 0 ?
                  <ActivityIndicator color="#000" /> :
                  <ImageCard
                    {...props}
                    imageData={products}
                    okey
                    num={2}
                  />}
              </View>
            </View>
          </View>
        ) : Checkindex == 1 ? (
          <View style={{ width: "100%", alignItems: 'center' }}>
            <View style={{ marginTop: 15, width: "100%", height: "22%", alignItems: 'center' }}>
              <FlatList
                keyExtractor={(_, i) => i.toString()}
                nestedScrollEnabled
                horizontal
                data={MixDress}
                numColumns={4}
                renderItem={({ item, index }) => (
                  <View
                    style={
                      {
                        marginLeft: "5%",
                        // padding
                        // width: "100%",
                        alignItems: 'center'
                      }
                    }
                  >
                    <TouchableOpacity
                      style={{
                        borderWidth: index == indexofmix ? 2 : 0,
                        // width: "100%",
                      }}
                      onPress={() => seletectforcategory(index)}
                    >
                      <Image
                        style={{ width: 70, height: 70 }}
                        source={item.imp}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        alignSelf: "center",
                        fontSize: 12,
                        justifyContent: "flex-end",
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                width: "90%",

                alignSelf: "center",
              }}
            >
              {moreoption ? (
                <View>
                  <FlatList
                    keyExtractor={(_, i) => i.toString()}
                    nestedScrollEnabled
                    data={Moreoption}
                    horizontal
                    renderItem={({ item, index }) => (
                      <View
                        style={{
                          marginLeft: 20,
                          height: 40,
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottomWidth:
                            Moreoptionindex == index ? 1 : null,
                          borderColor: "#FF6600",
                          marginTop: 10,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => setMoreoptionindex(index)}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              justifyContent: "center",
                            }}
                          >
                            {item}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
              ) : null}
              <View style={{ marginTop: 10 }}>
                <Check1
                  okey={true}
                  num={2}
                  Next={props.navigation.navigate}
                  imageData={CheckData}
                />
              </View>
            </View>
          </View>
        ) : Checkindex == 2 ? (
          <View style={{ width: "100%", }}>
            <View style={{ marginTop: 10, }}>
              <FlatList
                keyExtractor={(_, i) => i.toString()}
                nestedScrollEnabled
                data={MixDress2}
                numColumns={4}
                renderItem={({ item }) => (
                  <View style={{ marginLeft: 8, alignSelf: 'center' }}>
                    <TouchableOpacity

                      onPress={() => setmoreoption(!moreoption)}
                    >
                      <Image
                        style={{ width: 80, height: 70 }}
                        source={item.imp}
                      />
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />

              <View style={{ marginTop: 10 }}>
                <BoyFlatlist num={2} Next={props.navigation.navigate} />
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <BottomSheet visible={GenderModal}>
        <View style={{ height: 219, backgroundColor: "#fff" }}>
          <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#AEAEAE" }}
            >
              GENDER
            </Text>
            <View
              style={{
                marginTop: 10,
                borderWidth: 1,
                width: "100%",
                alignSelf: "center",
                borderColor: "#AEAEAE",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                height: 180,
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => setGenderModal(false)}>
                  <Image
                    style={{ width: 76, height: 75, borderRadius: 70 }}
                    source={require("../Assets/IMages/male.png")}
                  />
                </TouchableOpacity>
                <Text>Men</Text>
              </View>

              <View style={{ width: 10 }} />
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => setGenderModal(false)}>
                  <Image
                    style={{ width: 76, height: 75, borderRadius: 70 }}
                    source={require("../Assets/IMages/woman1.png")}
                  />
                </TouchableOpacity>
                <Text>Women</Text>
              </View>
              <View style={{ width: 10 }} />
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => setGenderModal(false)}>
                  <Image
                    style={{ width: 76, height: 75, borderRadius: 70 }}
                    source={require("../Assets/IMages/girl1.png")}
                  />
                </TouchableOpacity>
                <Text>Girl</Text>
              </View>
              <View style={{ width: 10 }} />
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => setGenderModal(false)}>
                  <Image
                    style={{ width: 76, height: 75, borderRadius: 70 }}
                    source={require("../Assets/IMages/boy1.png")}
                  />
                </TouchableOpacity>
                <Text>Boy</Text>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
      {/* Category */}
      <BottomSheet visible={SortMadal}>
        <View style={{ height: 321, backgroundColor: "#fff" }}>
          <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#AEAEAE" }}
            >
              SORT BY
            </Text>
            <View
              style={{
                marginTop: 10,
                borderWidth: 1,
                width: "100%",
                alignSelf: "center",
                borderColor: "#AEAEAE",
              }}
            />
            <FlatList
              keyExtractor={(_, i) => i.toString()}
              nestedScrollEnabled
              data={SORTBY}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSortMadal(false)}>
                  <View style={{ marginTop: 20 }}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </BottomSheet>
      <BottomSheet visible={Category}>
        <View
          style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginTop: 20,

                flexDirection: "row",
                width: "100%",
              }}
            >
              <View
                style={{
                  width: "83%",
                  flexDirection: "row",
                  backgroundColor: "#EDEDED",
                  borderRadius: 10,
                  alignSelf: "center",
                  marginLeft: 5,
                }}
              >
                <EvilIcons
                  style={{ marginTop: 5 }}
                  name="search"
                  size={20}
                  color="black"
                />
                <TextInput
                  style={{ height: 26, width: 273 }}
                  placeholder="Search..."
                  multiline={true}
                />
              </View>

              <TouchableOpacity
                style={{ marginTop: 3, marginLeft: 3 }}
                onPress={() => console.log("Clear Every Thing")}
              >
                <Text style={{ color: "#FF1414" }}>Clear all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: "80%", marginTop: 10 }}>
            <FlatList
              keyExtractor={(_, i) => i.toString()}
              nestedScrollEnabled
              data={CategorySelect}
              renderItem={({ item }) => (
                // <ScrollView>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: "row",
                    width: "90%",
                    alignSelf: "center",
                  }}
                >
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 5,
                        borderWidth: 1,
                      }}
                    />
                    <View style={{ width: "2%" }} />
                    <Text>{item}</Text>
                  </TouchableOpacity>
                </View>
                // </ScrollV            >
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              // alignSelf: "center",
              // justifyContent: "center",
              marginTop: 20,
              width: "100%",
              backgroundColor: "#FFFFFF",
              height: 51,
            }}
          >
            {/* <View style={{ width: "100%", borderTopWidth: 1 }} /> */}
            {/* <View style={{ alignSelf: "center" }}> */}
            <TouchableOpacity onPress={() => setCategory(false)}>
              <Text
                style={{
                  marginLeft: 60,
                  textAlign: "center",
                  marginTop: 14,
                  color: "#122736",
                }}
              >
                CLOSE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderColor: "#BEBEBE",
                  marginLeft: 80,
                  height: 30,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 60,
                  textAlign: "center",
                  marginTop: 14,
                  color: "#FF4400",
                }}
              >
                APPLY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <BottomSheet visible={FilterMadal}>
        <View
          style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
        >
          <View
            style={{
              height: 42,
              width: "90%",
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>FILTERS</Text>
            </View>
            <View style={{ width: "64%" }} />
            <Text style={{ color: "#FF1414" }}>CLEAR ALL</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "35%",
                backgroundColor: "blue",
                // alignSelf: "center",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                // height: "90%",
              }}
            >
              <FlatList
                keyExtractor={(_, i) => i.toString()}
                nestedScrollEnabled
                data={FilterMadalData}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => setindexofFilter(index)}>
                    <View
                      style={{
                        height: 52,

                        backgroundColor:
                          indexofFilter == index ? "#fff" : "#F5F5F5",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 125,
                      }}
                    >
                      <Text>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{ width: "65%", backgroundColor: "#fff" }}>
              {indexofFilter == 0 ? (
                <View style={{ justifyContent: "center" }}>
                  <View style={{ justifyContent: "center" }}>
                    <View
                      style={{
                        width: "94%",
                        flexDirection: "row",
                        backgroundColor: "#EDEDED",
                        borderRadius: 10,
                        alignSelf: "center",
                        // marginLeft: 5,
                        height: 30,
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <EvilIcons
                        style={{ marginTop: 2 }}
                        name="search"
                        size={20}
                        color="black"
                      />
                      <TextInput
                        style={{ width: 188 }}
                        placeholder="Search..."
                        multiline={true}
                      />
                    </View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <FlatList
                      keyExtractor={(_, i) => i.toString()}
                      nestedScrollEnabled
                      data={CategorySelect}
                      renderItem={({ item }) => (
                        // <ScrollView 
                        <View
                          style={{
                            marginTop: 20,
                            flexDirection: "row",
                            width: "90%",
                            alignSelf: "center",
                          }}
                        >
                          <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View
                              style={{
                                width: 22,
                                // height: 22,
                                borderRadius: 5,
                                borderWidth: 1,
                              }}
                            />
                            <View style={{ width: "2%" }} />
                            <Text>{item}</Text>
                          </TouchableOpacity>
                        </View>
                        // </ScrollView                     >
                      )}
                    />
                  </View>
                </View>
              ) : // <View
                null}
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              // alignSelf: "center",
              // justifyContent: "center",
              // marginTop: 60,
              width: "100%",
              backgroundColor: "#FFFFFF",
              height: 51,
              position: "absolute",
              bottom: 0,
            }}
          >
            {/* <View style={{ width: "100%", borderTopWidth: 1 }} /> */}
            {/* <View style={{ alignSelf: "center" }}> */}
            <TouchableOpacity onPress={() => setFilterMadal(false)}>
              <Text
                style={{
                  marginLeft: 60,
                  textAlign: "center",
                  marginTop: 14,
                  color: "#122736",
                }}
              >
                CLOSE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderColor: "#BEBEBE",
                  marginLeft: 80,
                  height: 30,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 60,
                  textAlign: "center",
                  marginTop: 14,
                  color: "#FF4400",
                }}
              >
                APPLY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,

    // marginBottom: 50,
    opacity: 0.9,
  },
  bottomNavigationView2: {
    backgroundColor: "#fff",
    width: "100%",

    // marginBottom: 50,
    opacity: 0.9,
  },
  bottomNavigationView3: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,

    // marginBottom: 50,
    // opacity: 0.9,
  },
});
