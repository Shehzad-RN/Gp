/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import AntDesign1 from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { BottomSheet } from "react-native-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import RazorpayCheckout from 'react-native-razorpay';
import LOGO from '../Assets/icon.png';
import API from '../api/_api'
import OngoingGroups from '../Components/OngoingGroups';
import { handleCart, handleCartType, handleIndividualBuyingCart, handleJoiningGroup } from "../Redux/dataReducer";

const Data2 = [
  {
    time: "08: 45: 17",
    member: "1/2",
    image1: require("../Assets/IMages/image2.png"),
    messengername: "Priankhi Saikia",
    messsage:
      "This is a very good product you should definitely buy this and the price of the product is affordable too.",
  },
];
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
const PRODUCT_SIZE = ["S", "M", "L", "XL", "XXL"];


const MainPurchasing = ({ navigation, route }) => {
  const user = useSelector(state => state?.auth.user);
  const token = useSelector(state => state?.auth?.token);
  const dispatch = useDispatch();
  const { productData, similarProducts } = route.params;
  let hasVariants = similarProducts.length === 0 ? productData : similarProducts[0]
  const [productDetail, setProductDetail] = React.useState(hasVariants);

  const productImage = productDetail?.title_image;
  const [text, onChangeText] = React.useState("");
  const [count, setCount] = React.useState(1);
  const [Slect, setSlect] = useState();
  const bottomSheet = React.useRef(null);
  const Showgrp = React.useRef(null);
  const [join_group, setJoinGroup] = useState(false);
  const [singleGroupToJoin, setSingleGroupToJoin] = useState('');
  const [creatinggrp, setcreatinggrp] = useState(false);
  const [isActiveVariant, setIsActiveVariant] = useState(false);
  const [_groups, setGroups] = useState([]);
  const [productBuyingType, setProductBuyingType] = useState('');
  const [__gId, setGroupId] = useState(null);

  React.useEffect(() => {
    similarProducts.forEach(element => {
      if (productDetail.id !== element.id && element.is_active) {
        setIsActiveVariant(true)
      }
    });

    //? Set Product Related Groups
    getGroups()
      .then(group => setGroups(group))
      .catch(error => console.log(error))

  }, [similarProducts]);

  /* ------------------------ fetch groups -------------------------- */
  const getGroups = () => {
    return new Promise(async (resolve, reject) => {
      try {
        let groups = [];
        let allGroups = await API.get('/groups/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        allGroups.data.groups.forEach(group_detail => {
          groups.push(group_detail);
        });
        resolve(groups)
      } catch (error) {
        reject('MainPerchasing/getGroups', error.message)
      }
    })
  }

  const OpenPurching = (data) => {
    setJoinGroup(!join_group);
    setSingleGroupToJoin(data);
  };
  const OpenForPurching = () => {
    setSingleGroupToJoin(singleGroupToJoin);
    bottomSheet.current.show();
  };
  const openforcreatinggrp = () => {
    Showgrp.current.hide();
    setcreatinggrp(true);
  };

  const handleProductQty = (num) => {
    /*
    ? if num > 0 then count will get increment
    ? if num < 0 then count will get decrement
    ? if num == 0 then count will be (1)
    */
    let qty = Number(count + num);
    let isZero = qty === 0;
    if (isZero) setCount(1)
    else setCount(qty)
  }

  /*
    Func addToCartProduct Stores the Selected 
    Product into Redux and list into cart.
  */
  const addToCartProduct = () => {
    let productToBuy = {
      id: productDetail?.id,
      name: productDetail?.name,
      title_image: productDetail?.title_image,
      size: PRODUCT_SIZE[Slect],
      description: productDetail?.description,
      mrp: productDetail?.mrp * count,
      product_price: productDetail?.selling_price,
    }

    // Close the BottomSheet
    bottomSheet.current.hide();

    // Add Product To Cart
    dispatch(handleIndividualBuyingCart(productToBuy));

    // Indicate which type of cart have to show
    dispatch(handleCartType(1))

    navigation.navigate('Cart', { userLog: true });
  }
  /*
    Func buyGroupProduct allows the user
    to create his/her group then proceed to pay. 
  */
  const buyGroupProduct = () => {
    let productToBuy = {
      id: productDetail?.id,
      name: productDetail?.name,
      title_image: productDetail?.title_image,
      size: PRODUCT_SIZE[Slect],
      description: productDetail?.description,
      product_price: productDetail?.group_price * count,
      mrp: productDetail?.mrp * count
    }

    dispatch(handleCartType(2))

    // JumpTo Create Group
    navigation.navigate('CreateGroup', { productToBuy, user });
  }
  // Call if user wants to join the group
  const joinSpecificGroup = () => {
    let productToBuy = {
      id: productDetail?.id,
      name: productDetail?.name,
      title_image: productDetail?.title_image,
      size: PRODUCT_SIZE[Slect],
      description: productDetail?.description,
      product_price: productDetail?.group_price * count,
      mrp: productDetail?.mrp * count,
    }

    // Add Product To Cart
    dispatch(handleJoiningGroup(productToBuy));

    // Indicate which type of cart have to show
    dispatch(handleCartType(3))

    // Close the BottomSheet
    bottomSheet.current.hide();

    navigation.navigate('Cart', { userLog: true });
  }

  /*
    Func handleProductBuying decides which method 
    need to proceed to buy the product
  */
  const handleProductBuying = () => {
    bottomSheet.current.hide();
    if (productBuyingType === 'Group') buyGroupProduct();
    else if (productBuyingType === 'Individual') addToCartProduct();
    else if (productBuyingType === 'JoinGroup') joinSpecificGroup();
  }

  const handleShowAll = () => {
    Showgrp.current.show()
  }

  const handleJoinGroup = () => {
    if (__gId !== null) {
      alert('May be this group has been expired!');
    }
    try {
      API({
        method: 'post',
        url: `https://api.groupick.in/api/v1/groups/${__gId}/members/add`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          user_id: user?.id
        }
      })
        .then(res => {
          setProductBuyingType('JoinGroup');
          OpenForPurching();
        })
        .catch(err => console.log('try/catch', err.message))
    } catch (error) {
      console.log('handlegroupjoin');
    }
  }

  const percentOff = Number(100 - (productDetail?.group_price * 100 / productDetail?.mrp)).toFixed(0);

  let PRODUCT_IMAGE = productDetail?.title_image ? { uri: productDetail?.title_image } : require('../Assets/IMages/GropIMage/group_detail.png')

  let USER_ICON = singleGroupToJoin?.image ? { uri: singleGroupToJoin?.image } : require('../Assets/IMages/GropIMage/group_detail.png')

  return (
    <View>
      <FlatList
        data={MainData}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View>
            <View>

              {/* Product Image */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("FullIMageScreen", {
                    productImage: productDetail?.previews
                  })
                }
              >
                <Image
                  style={{ height: 395, width: "100%" }}
                  source={{ uri: productImage }}
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
                  <TouchableOpacity onPress={() => navigation.pop()}>
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

              {/* Similar Product */}
              {isActiveVariant && similarProducts !== false &&
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
                  <View style={{ flexDirection: 'row' }}>
                    {similarProducts?.map((variant, index) => {
                      return (
                        <Pressable key={index} onPress={() => setProductDetail(variant)}>
                          {variant?.title_image !== null &&
                            <Image
                              style={{
                                marginRight: 10,
                                height: 61,
                                borderRadius: 7,
                                width: 53,
                              }}
                              source={{ uri: variant?.title_image }}
                            />
                          }
                        </Pressable>
                      )
                    })}
                  </View>
                  <View style={{ height: 10 }} />
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Rs.{productDetail.group_price}(Group Buy)
                  </Text>
                  <Text
                    style={{
                      fontSize: 9,
                      color: "#969696",
                    }}
                  >
                    {productDetail.name}
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
                      MRP {productDetail.mrp}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "700",
                        color: "#FF954F",
                      }}
                    >
                      {percentOff}% OFF
                    </Text>
                    <View style={{ width: 80 }} />
                    <View
                      style={{
                        marginLeft: 10,
                        width: 96,
                        height: 26,
                        flexDirection: "row",
                        justifyContent: 'center',
                        borderRadius: 21,
                        // backgroundColor: "lightgrey",
                        borderWidth: 1,
                        borderColor: "lightgrey",
                        // opacity: 0.8,
                      }}
                    >
                      <Text
                        style={{
                          marginTop: 2,
                          fontSize: 14,
                          textAlign: 'center'
                        }}
                      >
                        Free Delivery
                      </Text>
                    </View>
                  </View>

                  <View style={{ height: 1 }} />
                </View>
              }
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  paddingLeft: 20,
                  marginTop: 10,
                }}
              >
                Title
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  paddingLeft: 20,
                  marginVertical: 5
                }}
              >
                {productDetail.name}
              </Text>

              {/* Ongoing Groups */}
              {/* 
                    * ##
                    *
                    * OngoingGroups is a component.  
                    * Having a user's detail who created the group.
                    * Group will be expired after 24hours.
                    *
                    * ##
                  */}
              <View>
                {_groups?.length !== 0 &&
                  <View>
                    <OngoingGroups
                      user={user}
                      GROUP={_groups}
                      PRODUCT_ID={productDetail?.id}
                      setJoinGroup={setJoinGroup}
                      join_group={join_group}
                      OpenPurching={OpenPurching}
                    />
                  </View>}
              </View>
              {/* ************************* */}              

              {/* Description */}
              <View style={{ height: 14 }} />
              <View
                style={{
                  paddingHorizontal: 20,
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
                  {productDetail.description}
                </Text>
              </View>

              {/* Product Detail */}
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
                    country : {productDetail?.country}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "grey",
                    }}
                  >
                    Brand : {productDetail?.brand}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "grey",
                    }}
                  >
                    Features : {productDetail?.features}
                  </Text>
                </View>
              </View>

              {/* Check Delivery Date */}
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

              {/* Free Cash On delivery */}
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

              {/* You may also like it */}
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
              <View style={{ height: 80 }}></View>
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
                  {/* Buy Individual */}
                  <View
                    style={{
                      width: "50%",
                      height: 47,
                      // backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Individually Buy */}
                    <TouchableOpacity
                      onPress={() => {
                        bottomSheet.current.show()
                        setProductBuyingType('Individual');
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          // fontWeight: "bold",
                          fontWeight: "900",

                          color: "white",
                        }}
                      >
                        ₹ {productDetail?.selling_price}
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

                  {/* Select Product Details */}
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
                    <BottomSheet height={600} ref={bottomSheet} contentContainerStyle={{ backgroundColor: '#fff' }}>
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
                            ₹ {productBuyingType === 'Individual' ? productDetail.selling_price : productDetail.group_price}
                          </Text>
                        </View>
                        <Text>{productDetail?.name}</Text>
                        <View
                          style={{
                            height: "5%",
                          }}
                        />
                        <View
                          style={{
                            height: 210,
                            width: 210,

                            alignSelf: "center",
                          }}
                        >
                          <Image
                            source={{ uri: productDetail?.title_image }}
                            style={{
                              width: 210,
                              height: 210,
                              borderRadius: 10,
                            }}
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
                            Select Color
                          </Text>
                          <View style={{ width: "5%" }} />
                          {/* Different Color */}
                          <View style={{ flexDirection: 'row' }}>
                            {similarProducts?.map((variant, index) => {
                              return (
                                <Pressable key={index} onPress={() => setProductDetail(variant)}>
                                  {variant?.title_image !== null &&
                                    <Image
                                      style={{
                                        marginRight: 10,
                                        height: 61,
                                        borderRadius: 7,
                                        width: 53,
                                      }}
                                      source={{ uri: variant?.title_image }}
                                    />
                                  }
                                </Pressable>
                              )
                            })}
                          </View>
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
                          <TouchableOpacity onPress={() => handleProductQty(-1)}>
                            <View
                              style={{
                                // height:44,
                                width: 30,
                                height: 30,
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
                                  // fontSize: 30,
                                  color: "white",
                                  justifyContent: "center",
                                }}
                              >
                                -
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 24,
                            }}
                          >
                            {count}
                          </Text>
                          <TouchableOpacity onPress={() => handleProductQty(1)}>
                            <View
                              style={{
                                // height:44,
                                width: 30,
                                height: 30,
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
                                  // fontSize: 30,
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

                        {/* Buy Now Btn */}
                        <TouchableOpacity onPress={handleProductBuying}>
                          <View
                            style={{
                              height: 56,
                              backgroundColor: "#C3C3C3",
                              justifyContent: "center",
                              borderRadius: 12,
                              backgroundColor: "#112735",
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

                    {/* Group Buy Button */}
                    <TouchableOpacity
                      onPress={() => {
                        bottomSheet.current.show();
                        setProductBuyingType('Group');
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "900",
                          color: "#112735",
                        }}
                      >
                        ₹ {productDetail.group_price}
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

      {/* List of Ongoing Groups */}
      <BottomSheet height={500} ref={Showgrp}>
        <View>
          <View style={{ width: "100%", alignSelf: "center" }}>
            <View
              style={{
                width: "100%",
                alignSelf: "center",
                height: 79,
                backgroundColor: "#112735",
                // borderRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    Ongoing Groups (10 Groups)
                  </Text>
                  <Text style={{ fontSize: 13, color: "#FFAE79" }}>
                    You can join group and buy this item
                  </Text>
                </View>
                <TouchableOpacity onPress={() => openforcreatinggrp()}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderWidth: 2,
                      borderColor: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 100,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      +
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 400, paddingHorizontal: 10 }}>
              {/* 
                * ##
                *
                * OngoingGroups is a component.  
                * Having a user's detail who created the group.
                * Group will be expired after 24hours.
                *
                * ##
              */}
              <OngoingGroups
                show={handleShowAll}
                GROUP={_groups}
                PRODUCT_ID={productDetail?.id}
                setJoinGroup={setJoinGroup}
                join_group={join_group}
                OpenPurching={OpenPurching}
                setGroupId={setGroupId}
              />
              {/* ************************* */}

            </View>
          </View>

        </View>
      </BottomSheet>

      <Modal visible={singleGroupToJoin !== ''}>
        <View>
          <View>
            <View style={{ width: "100%", backgroundColor: "#fff" }}>
              <View
                style={{
                  height: 30,
                  flexDirection: "row",
                  marginTop: 10,
                  backgroundColor: "#fff",
                  marginLeft: 8,
                  marginBottom: 10,
                }}
              >
                <Text>Item :{ }</Text>
                <View style={{ width: "78%" }} />
                <TouchableOpacity onPress={() => setSingleGroupToJoin('')}>
                  <AntDesign1 name={"close"} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Product Cart */}
            <View
              style={{
                backgroundColor: "#FFF8DA",
                height: 139,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "95%",
                  alignSelf: "center",
                  flexDirection: "row",
                  // backgroundColor: "#FFF3C2",
                }}
              >
                <Image
                  style={{ height: 114, width: 104, borderRadius: 8 }}
                  source={PRODUCT_IMAGE}
                />
                <View style={{ marginLeft: 5 }}>
                  <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <Text>{productDetail?.name}</Text>
                    <View style={{ width: "15%" }} />
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="heart-off-outline"
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>Free Delivery</Text>
                    {/* <Text>Size : {PRODUCT_SIZE[Slect] || 'M'}</Text> */}
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold" }}>₹ {productDetail?.group_price}</Text>
                      <View style={{ width: "3%" }} />
                      <Text style={{ textDecorationLine: "line-through" }}>
                        ₹ {productDetail?.mrp}
                      </Text>
                      <View style={{ width: "3%" }} />
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#FF0000",
                          marginTop: 2,
                          justifyContent: "center",
                        }}
                      >
                        {percentOff}% OFF
                      </Text>
                    </View>

                    {/* <Text>Delivery by 22 Nov 2021</Text> */}
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Quantity */}
          <View
            style={{
              backgroundColor: "white",
              height: 67,
              width: "100%",
              //   justifyContent:"center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
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
          </View>

          <FlatList
            data={Data2}
            keyExtractor={item => item}
            renderItem={({ item }) => {
              return (
                <View>
                  <View
                    style={{
                      alignItems: "center",
                      height: 400,
                      backgroundColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#FF4D00",
                        marginTop: "6%",
                      }}
                    >
                      Time: {item.time}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        marginTop: "3%",
                      }}
                    >
                      {singleGroupToJoin?.name} 2/2 members
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: "6%",
                      }}
                    >
                      <Image
                        style={{
                          height: 63,
                          width: 63,
                          borderRadius: 31,
                        }}
                        source={USER_ICON}
                      />
                      <Image
                        style={{
                          height: 63,
                          width: 63,
                          borderRadius: 31,
                        }}
                        source={user?.image !== null ? { uri: user?.image } : require('../Assets/IMages/GropIMage/group_detail.png')}
                      />


                    </View>
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: "bold",
                        marginTop: "10%",
                      }}
                    >
                      Message from {singleGroupToJoin?.data.name}
                    </Text>

                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 15,
                        color: "#979797",
                        width: "70%",
                        marginTop: "3%",
                      }}
                    >
                      {singleGroupToJoin?.data.description}
                    </Text>
                    <View
                      style={{
                        height: "10%",
                      }}
                    />

                    <TouchableOpacity onPress={handleJoinGroup}>
                      <View
                        style={{
                          height: 50,
                          width: 200,
                          backgroundColor: "#FF4D00",
                          borderRadius: 33,
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: 10
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: "800",
                            color: "white",
                          }}
                        >
                          ORDER NOW
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </Modal>

      <Modal visible={creatinggrp}>
        <SafeAreaView>
          <View style={{}}>
            <View style={{ width: "100%", backgroundColor: "#fff" }}>
              <View
                style={{
                  width: "94%",

                  alignSelf: "center",
                  height: 47,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() => setcreatinggrp(false)}
                  >
                    <Entypo name="arrow-long-left" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ height: 10 }} />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={{ fontSize: 20, color: "#343434", marginBottom: 5 }}>
                Group Buy
              </Text>
            </View>
            <View style={{ backgroundColor: "#FFF3C2" }}>
              <View
                style={{
                  width: "95%",
                  alignSelf: "center",
                  flexDirection: "row",
                  // backgroundColor: "#FFF3C2",
                }}
              >
                <Image
                  style={{ height: 114, width: 104, borderRadius: 8 }}
                  source={require("../Assets/IMages/image7.png")}
                />
                <View style={{ marginLeft: 5 }}>
                  <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <Text>Wine Solid Cut Outs Gown</Text>
                    <View style={{ width: "15%" }} />
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="heart-off-outline"
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>4.5 | 289</Text>
                    <Text>Size : M</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold" }}>₹ 590</Text>
                      <View style={{ width: "3%" }} />
                      <Text style={{ textDecorationLine: "line-through" }}>
                        ₹ 590
                      </Text>
                      <View style={{ width: "3%" }} />
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#FF0000",
                          marginTop: 2,
                          justifyContent: "center",
                        }}
                      >
                        40% OFF
                      </Text>
                    </View>

                    <Text>Delivery by 22 Nov 2021</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{ marginTop: 10, height: 10, backgroundColor: "pink" }}
            />
            <View style={{ alignItems: "center" }}>
              <Text>Rahul 1/2 members</Text>
              <TouchableOpacity style={{ width: "100%" }}>
                <View
                  style={{
                    width: "90%",
                    alignSelf: "center",
                    borderWidth: 1,
                    height: 47,
                    borderRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#112735",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 22, color: "#fff" }}>
                    create group
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image source={require("../Assets/IMages/sellerimage.png")} />
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 35,
                    marginLeft: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="question" size={24} color="black" />
                </View>
              </View>
              <View
                style={{
                  height: 57,
                  width: "90%",
                  justifyContent: "center",
                  borderWidth: 1,
                  marginTop: 20,
                  borderRadius: 10,
                }}
              >
                <TextInput placeholder="Enter Group name" />
              </View>
              <View
                style={{
                  height: 97,
                  width: "90%",
                  borderWidth: 1,
                  marginTop: 20,
                }}
              >
                <TextInput placeholder="write a message..." />
              </View>
              <TouchableOpacity
                style={{ width: "100%", marginTop: 20 }}
                onPress={() => props.navigation.navigate("Cart")}
              >
                <View
                  style={{
                    width: "50%",
                    alignSelf: "center",
                    borderWidth: 1,
                    height: 47,
                    borderRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#CACACA",
                    marginTop: 10,
                    marginBottom: 10,
                    borderColor: "#CACACA",
                  }}
                >
                  <Text style={{ fontSize: 22, color: "#fff" }}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
export default MainPurchasing;



/*
  Seller && Product Review Are commented below
*/

/*
  <View
  style={{
  height: 450,
  width: "100%",
                  alignItems: "center",
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
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          height: 20,
                        }}
                      >
                        <View style={{ width: 15 }} />
                        <Text
                          style={{
                            fontSize: 12,
                          }}
                          >
                          Excellent
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
                          height: 20,
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
                          height: 20,
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
                          height: 20,
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
                          
                          height: 20,
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
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    Real Images and Review from Customers
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      style={{
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
                          width: 18,
                          height: 18,
                          backgroundColor: "#47BD95",
                          borderRadius: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
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
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 84,
                    borderColor: "lightgrey",
                    borderRadius: 10,
                    width: "90%",
                    padding: 17,
                    backgroundColor: "lightgrey",
                  }}
                >
                  <View
                    style={{
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
                        marginLeft: -5,
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
                    <View
                      style={{
                        marginRight: -10,
                      }}
                    >
                      <FontAwesome5
                        style={{
                          color: "grey",
                          marginLeft: 10,
                        }}
                        name="house-user"
                        size={50}
                      />
                    </View>
                  </View>
                </View>
              </View>

*/



{/* <View
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
                                        </View> */}