import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FormInput from "../Components/Forminputs";
import FormButton from "../Components/Formsbtn";
import SimpleTextInput from "../Components/SimpleTextInput";
const { width, height } = Dimensions.get("window");
import LargeBtn from "../Components/LargeBtn";
// import CartScreenComponent from '../'
import { useSelector } from "react-redux";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign1 from "react-native-vector-icons/AntDesign";
// import { NavigationEvents } from "react-navigation";
import Cards from "../Assets/IMages/Svg/CartScreenSvg/card.svg";
import Bhim from "../Assets/IMages/Svg/CartScreenSvg/bhim.svg";
import Bank from "../Assets/IMages/Svg/CartScreenSvg/bank.svg";
import Cash from "../Assets/IMages/Svg/CartScreenSvg/Cash.svg";
import { TextInput } from "react-native-paper";
import CartProductList from "../Components/CartProductList";

import RazorpayCheckout from 'react-native-razorpay';
import LOGO from '../Assets/icon.png';

const slides = ["", "", "", ""];
const ModalData = ["Home", "Work", "Other"];
const CartScreen = ({ navigation, routes }) => {
  const check = useSelector(state => state?.auth.user);
  // Get Products Data from Redux
  const cart = useSelector(state => state.root.data?.cart);

  const [Selectforfriend, setSelectforfriend] = useState(false);
  const [selected, setselected] = useState(false);
  const [openmodal, setopenmodal] = useState(false);
  const [selected1, setselected1] = useState(false);
  const [selected2, setselected2] = useState(false);
  const [selected3, setselected3] = useState(false);
  const [firstboder, setfirstboder] = useState(false);
  const [Second, setSecond] = useState(false);
  const [Third, setThird] = useState(false);
  const [visbleAddress, setvisbleAddress] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [indexofModal, setindexofModal] = useState();
  const [totalProductsPrice, setTotalProductsPrice] = useState(0);


  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const skip = (flag) => {
    if (flag === true && currentSlideIndex === 0) {
      navigation.goBack();
    }
    const nextSlideIndex = currentSlideIndex - currentSlideIndex;
    if (nextSlideIndex >= 0) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(0);
      setSecond(false);

      setfirstboder(false);

      setThird(false);
    }
  };

  React.useEffect(() => {
    let flag = false;
    navigation.addListener("focus", () => {
      skip(flag);
    });
    check ? null : navigation.replace("Login1", { userLog: true });
  }, [navigation]);

  const skip1 = () => {
    const check = Third ? 2 : 1;
    const nextSlideIndex = currentSlideIndex - check;

    if (nextSlideIndex >= 0) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(1);

      setfirstboder(true);

      setSecond(false);

      setThird(false);
    }
  };
  const skip2 = () => {
    const nextSlideIndex = currentSlideIndex - 1;

    if (nextSlideIndex >= 0) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(2);

      setfirstboder(true);

      setSecond(true);

      setThird(false);
    }
  };
  const goToNextSlide = () => {
    console.log(currentSlideIndex);
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
      console.log(nextSlideIndex);
    }
    currentSlideIndex == 0
      ? setfirstboder(true)
      : currentSlideIndex == 1
        ? setSecond(true)
        : currentSlideIndex == 2
          ? setThird(true)
          : null;
  };
  const onchangeCredit = () => {
    setselected(!selected);
    setopenmodal(!openmodal);
  };

  // Constants
  let DELIVERY_CHARGES = 0, SPECIAL_OFFER = 0;

  React.useEffect(() => {
    //? Calculation
    let price = 0;
    cart.forEach(element => {
      price += Number(element.selling_price)
    });
    console.log('????', price);
    setTotalProductsPrice(price)
  }, [cart]);

  //? Total
  let TOTALPRICE = totalProductsPrice + DELIVERY_CHARGES + SPECIAL_OFFER;

  //? RazorPay Method
  const handleRazorPayments = () => {
    let INR = TOTALPRICE * 100; // Convert to rupee
    if (check === '') {
      navigation.navigate('LOgin', { userLog: true });
      return false
    }
    try {
      var options = {
        description: 'Online Payment',
        image: LOGO,
        currency: 'INR',
        key: 'rzp_test_89zzJ2H1rPditx',
        amount: INR,
        name: 'Groupick',
        prefill: {
          email: `${check?.mobile}@groupick.in`,
          contact: check?.mobile,
          name: check?.name
        },
        theme: { color: '#53a20e' }
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        console.log('suncess', data.razorpay_payment_id);
      }).catch((error) => {
        // handle failure
        console.log(`Error: ${error.code} | ${error.description}`);
      });
    } catch (error) {
      console.log('Homepage/handleRazorPayments', error.message);
    }
  }

  const EmptyCart = () => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 20,
          color: '#000'
        }}>Empty Cart</Text>
      </View>
    )
  }

  const Slide = ({ index }) => {
    return (
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            height: "70%",

            width,
          }}
        >
          {index == 0 ? (
            <View
              style={{
                width: "100%",
                alignSelf: "center",
                backgroundColor: "#fff",
                // height: "100%",
              }}
            >
              <View
                style={{
                  height: 20,
                  flexDirection: "row",
                  marginTop: 10,
                  backgroundColor: "#fff",
                  marginLeft: 8,
                  marginBottom: 10,
                }}
              >
                <Text>Item :{ }</Text>
                <View style={{ width: "78%" }} />
                <TouchableOpacity>
                  <AntDesign1 name={"delete"} size={20} />
                </TouchableOpacity>
              </View>

              {/* Cart Product List */}
              <CartProductList cart={cart} />

              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 5,
                  height: 20,
                }}
              >
                <Text style={{ fontSize: 13 }}>Sold by: Abhijit Das</Text>
              </View>

              {/* <View style={{ borderWidth: 5, marginTop: 25 }} /> */}
              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 25,
                  height: 160,

                  // backgroundColor: "cyan",
                }}
              >
                <Text>Price Details</Text>
                <View style={{ marginTop: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text>Product Charges</Text>
                    <View style={{ width: "50%" }} />
                    <Text> ₹ {totalProductsPrice}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>Delivery Charges</Text>
                    <View style={{ width: "54%" }} />
                    <Text>+₹{DELIVERY_CHARGES}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>Special Offer</Text>
                    <View style={{ width: "60%" }} />
                    <Text> +₹{SPECIAL_OFFER}</Text>
                  </View>
                  <View
                    style={{
                      borderColor: "#D6D6D6",
                      borderWidth: 1,
                      marginTop: 5,
                    }}
                  />
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>Total </Text>
                    <View style={{ width: "71%" }} />
                    <Text> ₹ {TOTALPRICE}</Text>
                  </View>
                </View>
              </View>
            </View>
          ) : index == 1 ? (
            <View style={{ width: "100%", alignSelf: "center" }}>
              <View style={{ height: 10 }} />
              <View
                style={{ width: "100%", height: 245, backgroundColor: "#fff" }}
              >
                <View style={{ width: "90%", alignSelf: "center" }}>
                  <Text style={{ marginTop: 5, fontSize: 13 }}>Payment</Text>
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        // justifyContent: "space-around",
                      }}
                    >
                      <Cards />
                      <Text style={{ marginLeft: 5 }}>
                        CREDIT CARD / DEBIT CARD
                      </Text>
                    </View>
                    {selected ? (
                      <TouchableOpacity onPress={() => setselected(false)}>
                        <AntDesign
                          style={{ marginTop: -5 }}
                          name="checkcircle"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => onchangeCredit()}>
                        <View
                          style={{
                            width: 25,
                            height: 25,
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: -5,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <View
                    style={{
                      height: 6,
                      borderBottomWidth: 1,
                      borderColor: "#EFEFEF",
                    }}
                  />
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        // justifyContent: "space-around",
                      }}
                    >
                      <Bhim />
                      <Text style={{ marginLeft: 5 }}>UPI PAYMENTS</Text>
                    </View>
                    {selected1 ? (
                      <TouchableOpacity o>
                        <AntDesign
                          // style={{ marginTop: 0 }}
                          name="checkcircle"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity>
                        <View
                          style={{
                            width: 25,
                            height: 25,
                            borderWidth: 1,
                            borderRadius: 50,
                            // marginTop: -5,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <View
                    style={{
                      height: 6,
                      borderBottomWidth: 1,
                      borderColor: "#EFEFEF",
                    }}
                  />
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        // justifyContent: "space-around",
                      }}
                    >
                      <Bank />
                      <Text style={{ marginLeft: 5 }}>NET BANKING</Text>
                    </View>
                    {selected2 ? (
                      <TouchableOpacity>
                        <AntDesign
                          // style={{ marginTop: 0 }}
                          name="checkcircle"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity>
                        <View
                          style={{
                            width: 25,
                            height: 25,
                            borderWidth: 1,
                            borderRadius: 50,
                            // marginTop: -5,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <View
                    style={{
                      height: 6,
                      borderBottomWidth: 1,
                      borderColor: "#EFEFEF",
                    }}
                  />
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        // justifyContent: "space-around",
                      }}
                    >
                      <Cash />
                      <Text style={{ marginLeft: 5 }}>
                        Pay Cash on Delivery
                      </Text>
                    </View>
                    {selected3 ? (
                      <TouchableOpacity>
                        <AntDesign
                          // style={{ marginTop: 0 }}
                          name="checkcircle"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity>
                        <View
                          style={{
                            width: 25,
                            height: 25,
                            borderWidth: 1,
                            borderRadius: 50,
                            // marginTop: -5,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <View
                    style={{
                      height: 6,
                      borderBottomWidth: 1,
                      borderColor: "#EFEFEF",
                    }}
                  />
                </View>
              </View>
              <View style={{ height: 10 }} />
              <View
                style={{
                  width: "100%",
                  height: 77,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "90%",
                    alignSelf: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text>Order for a friend?</Text>
                    <Text style={{ fontSize: 12, color: "#737373" }}>
                      Click on 'Yes' to add Final Price
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setSelectforfriend(!Selectforfriend)}
                    >
                      <View
                        style={{
                          width: 43,
                          height: 23,
                          borderWidth: 1,
                          alignItems: "center",
                          borderRadius: 20,
                          // backgroundColor:Selectforfriend?
                          borderColor: Selectforfriend ? "#9F9F9F" : "#FF4D00",
                        }}
                      >
                        <Text
                          style={{
                            color: Selectforfriend ? "#9F9F9F" : "#FF4D00",
                          }}
                        >
                          No
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setSelectforfriend(!Selectforfriend)}
                    >
                      <View
                        style={{
                          width: 43,
                          height: 23,
                          borderWidth: 1,
                          alignItems: "center",
                          borderRadius: 20,
                          marginLeft: 5,
                          borderColor: Selectforfriend ? "#FF4D00" : "#9F9F9F",
                        }}
                      >
                        <Text
                          style={{
                            color: Selectforfriend ? "#FF4D00" : "#9F9F9F",
                          }}
                        >
                          Yes
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* options */}
              {Selectforfriend ? (
                <View>
                  <View style={{ height: 10 }} />
                  <View
                    style={{
                      width: "100%",
                      height: 156,
                      backgroundColor: "#fff",
                      // justifyContent: "center",
                    }}
                  >
                    <View style={{ width: "90%", alignSelf: "center" }}>
                      <Text style={{ marginTop: 5 }}>Final Customer Price</Text>
                      <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#FF4D00", fontSize: 13 }}>
                          Order Total (₹580) + Your Margin
                        </Text>
                        <View
                          style={{
                            height: 35,
                            marginTop: 5,
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: "#FFA076",
                          }}
                        >
                          <Text style={{ marginLeft: 3 }}>₹600</Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: "row" }}>
                          <Text>Your Margin:</Text>
                          <Text style={{ marginTop: 1, color: "#03A685" }}>
                            ₹ 20
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
              <View style={{ height: 12 }} />
              <View style={{ backgroundColor: "#fff" }}>
                <View
                  style={{
                    width: "90%",
                    alignSelf: "center",
                    marginTop: 25,
                    height: 360,

                    // backgroundColor: "cyan",
                  }}
                >
                  <Text>Price Details</Text>
                  <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text>Product Charges</Text>
                      <View style={{ width: "50%" }} />
                      <Text> ₹ 590</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Text>Delivery Charges</Text>
                      <View style={{ width: "54%" }} />
                      <Text>+₹0</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Text>Special Offer</Text>
                      <View style={{ width: "60%" }} />
                      <Text> +₹0</Text>
                    </View>
                    <View
                      style={{
                        borderColor: "#D6D6D6",
                        borderWidth: 1,
                        marginTop: 5,
                      }}
                    />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Text>Total </Text>
                      <View style={{ width: "71%" }} />
                      <Text> ₹ 580</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : index == 2 ? (
            <View style={{ width: "100%", alignSelf: "center" }}>
              <View style={{ height: 40 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "90%",
                    alignSelf: "center",
                    // justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{ flexDirection: "row", width: "100%" }}
                    onPress={() => setvisbleAddress(true)}
                  >
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        backgroundColor: "#FF4D00",
                        justifyContent: "center",
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 20,
                          justifyContent: "center",
                          marginTop: -3.9,
                          color: "#fff",
                        }}
                      >
                        +
                      </Text>
                    </View>

                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        justifyContent: "center",
                        marginTop: -3.9,
                        marginLeft: 5,
                      }}
                    >
                      Add Address
                    </Text>
                    <View style={{ width: "55%" }} />
                    <SimpleLineIcons name="arrow-right" size={23} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  height: 237.5,
                  width: "100%",
                  backgroundColor: "#fff",
                }}
              >
                <View
                  style={{ width: "90%", alignSelf: "center", marginTop: 20 }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#5F5F5F",
                      fontWeight: "bold",
                    }}
                  >
                    Arshadul Rahman
                  </Text>
                  <Text
                    style={{ fontSize: 14, color: "#A9A9A9", marginTop: 15 }}
                  >
                    Poultry farm road Tezpur
                  </Text>
                  <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
                    Kalibari (Sonitpur)
                  </Text>
                  <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
                    Sonitpur - 784001
                  </Text>
                  <Text style={{ fontSize: 14, color: "#A9A9A9" }}>Assam</Text>
                  <Text
                    style={{ fontSize: 14, color: "#A9A9A9", marginTop: 20 }}
                  >
                    Mobile: 8657446578
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 15,
                    borderBottomWidth: 2,
                    borderColor: "#CECECE",
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    // alignItems: "center",
                    // justifyContent: "center",

                    height: 50,
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#FF4D00" }}>EDIT</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderEndWidth: 2,
                      height: 30,
                      borderColor: "#CECECE",
                    }}
                  />
                  <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#FF4D00" }}>
                      REMOVE
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{ borderBottomWidth: 2, borderColor: "#CECECE" }}
                />
              </View>
            </View>
          ) : index == 3 ? (
            <View style={{ width: "100%" }}>
              <ScrollView>
                <View style={{ height: 10 }} />
                <View style={{ width: "100%", backgroundColor: "#fff" }}>
                  <View
                    style={{
                      height: 20,
                      flexDirection: "row",
                      marginTop: 10,
                      backgroundColor: "#fff",
                      marginLeft: 8,
                      marginBottom: 10,
                    }}
                  >
                    <Text>Item :{ }</Text>
                    <View style={{ width: "78%" }} />
                    <TouchableOpacity>
                      <AntDesign1 name={"delete"} size={20} />
                    </TouchableOpacity>
                  </View>
                </View>

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
                <View style={{ backgroundColor: "#fff" }}>
                  <View
                    style={{
                      width: "90%",
                      alignSelf: "center",
                      marginTop: 5,
                      height: 20,
                    }}
                  >
                    <Text style={{ fontSize: 13 }}>Sold by: Abhijit Das</Text>
                  </View>
                </View>
                <View style={{ height: 10 }} />
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    height: 119,
                  }}
                >
                  <View
                    style={{ width: "90%", alignSelf: "center", marginTop: 10 }}
                  >
                    <Text>Arshadul Rahman</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 15,
                      }}
                    >
                      <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
                        Poultry farm road Tezpur, Kalibari {"\n"} (Sonitpur)
                        Sonitpur - 784001, {"\n"} Assam Mobile: 8657446578
                      </Text>
                      <TouchableOpacity>
                        <SimpleLineIcons
                          name="arrow-right"
                          size={20}
                          color={"black"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ height: 10 }} />
                <View
                  style={{
                    width: "100%",
                    height: 97,
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <View style={{ width: "90%", alignSelf: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Payment Method
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Cards />
                        <Text style={{ marginLeft: 4 }}>
                          CREDIT CARD / DEBIT CARD
                        </Text>
                      </View>
                      <TouchableOpacity style={{ marginTop: -9 }}>
                        <SimpleLineIcons
                          name="arrow-right"
                          size={20}
                          color={"black"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ height: 10 }} />
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    height: 460,
                  }}
                >
                  <View
                    style={{
                      width: "90%",
                      alignSelf: "center",
                      marginTop: 25,
                      height: 160,

                      // backgroundColor: "cyan",
                    }}
                  >
                    <Text>Price Details</Text>
                    <View style={{ marginTop: 20 }}>
                      <View style={{ flexDirection: "row" }}>
                        <Text>Product Charges</Text>
                        <View style={{ width: "50%" }} />
                        <Text> ₹ 590</Text>
                      </View>
                      <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Text>Delivery Charges</Text>
                        <View style={{ width: "54%" }} />
                        <Text>+₹0</Text>
                      </View>
                      <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Text>Special Offer</Text>
                        <View style={{ width: "60%" }} />
                        <Text> +₹0</Text>
                      </View>
                      <View
                        style={{
                          borderColor: "#D6D6D6",
                          borderWidth: 1,
                          marginTop: 5,
                        }}
                      />
                      <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Text>Total </Text>
                        <View style={{ width: "71%" }} />
                        <Text> ₹ 580</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          ) : null}
        </View>
        <Modal
          // Moda
          visible={visbleAddress}
          animationType="slide"
          onRequestClose={() => console.log("no warning")}
          // presentationStyle="FormSheet"
          transparent
        >
          <View
            style={{
              marginTop: 110,
              backgroundColor: "white",
              borderRadius: 20,
              // padding: 35,
              // alignItems: "center",
              shadowColor: "#000",
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: 480,
              width: "90%",
              // justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
                ADD NEW ADDRESS
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: "#181818",
                  marginTop: 20,
                }}
              >
                CONTACT DETAILS
              </Text>
              <View
                style={{
                  marginTop: 8,
                  flexDirection: "row",
                  // justifyContent: "space-evenly",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="Name*"
                  />
                </View>
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="Phone no*"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: "#181818",
                  marginTop: 10,
                }}
              >
                ADDRESS
              </Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  // justifyContent: "space-evenly",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="Pin Code*"
                  />
                </View>
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="Address*"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 8,
                  flexDirection: "row",
                  // justifyContent: "space-evenly",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="Locality/Town*"
                  />
                </View>
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="Landmark*"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 8,
                  flexDirection: "row",
                  // justifyContent: "space-evenly",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="City/District*"
                  />
                </View>
                <View
                  style={{
                    // height: 44,
                    width: 140,
                    // borderWidth: 1,
                    // borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                    marginTop: -10,
                  }}
                >
                  <SimpleTextInput
                    style={{
                      marginLeft: 5,

                      height: 44,
                    }}
                    placeholder="State*"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <Text
                style={{
                  marginTop: 15,
                  color: "#181818",
                  fontSize: 13,
                  fontWeight: "600",
                }}
              >
                SAVE ADDRESS AS
              </Text>
              <FlatList
                data={ModalData}
                keyExtractor={(_, i) => i.toString()}
                horizontal
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      marginTop: 10,
                      width: 81,
                      height: 31,
                      borderWidth: 1,
                      marginLeft: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                      borderColor:
                        indexofModal == index ? "#FF6F32" : "#C4C4C4",
                    }}
                  >
                    <TouchableOpacity onPress={() => setindexofModal(index)}>
                      <Text
                        style={{
                          color: indexofModal == index ? "#FF6F32" : "#C4C4C4",
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <LargeBtn
                buttonTitle={"ADD ADDRESS"}
                Bakbround={"#FF4D00"}
                txtcolor={"#fff"}
                borderc="#FF4D00"
                onPress={() => setvisbleAddress(false)}
              />
            </View>
          </View>
        </Modal>
        <Modal
          // Moda
          visible={openmodal}
          animationType="slide"
          onRequestClose={() => console.log("no warning")}
          // presentationStyle="FormSheet"
          transparent
        >
          <View
            style={{
              marginTop: 110,
              backgroundColor: "white",
              borderRadius: 20,
              // padding: 35,
              // alignItems: "center",
              shadowColor: "#000",
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              height: 342,
              width: "90%",
              // justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 19, marginTop: 20 }}>ADD NEW CARD</Text>
            <View style={{ height: 45, width: "90%", marginTop: 10 }}>
              <TextInput
                label={"Card number"}
                mode="outlined"
                placeholder="***  ****  ***  ***"
              />
              <View
                style={{
                  height: 45,
                  width: "100%",
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "48%" }}>
                  <TextInput
                    label={"Expiry date"}
                    mode="outlined"
                    placeholder="MM / YY"
                  />
                </View>
                <View style={{ width: "48%" }}>
                  <TextInput
                    label={"CVC / CVV"}
                    mode="outlined"
                    placeholder="***"
                  />
                </View>
              </View>
            </View>
            <View style={{ height: 45, width: "90%", marginTop: 103 }}>
              <TextInput
                label={"Enter Cardholder name"}
                mode="outlined"
                placeholder="enter cardholder full name*"
              />
            </View>
            <View style={{ width: "90%", marginTop: 10 }}>
              <LargeBtn
                buttonTitle={"ADD CARD"}
                Bakbround={"#112735"}
                txtcolor={"#fff"}
                borderc="#112735"
                onPress={() => setopenmodal(false)}
              />
            </View>
          </View>
        </Modal>

        <View style={{ height: 50 }} />
      </ScrollView>
    );
  };

  const CartHeader = () => {
    let flag = true;
    return (
      <View
        style={{
          flexDirection: "row",
          height: 77,
          borderBottomWidth: 1,
          backgroundColor: "#fff",
          borderColor: "lightgrey",
          paddingHorizontal: 5
        }}
      >
        <TouchableOpacity
          activeOpacity={.9}
          style={{ alignSelf: "center" }}
          onPress={() => skip(flag)}
        >
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginLeft: 10,
              height: 44,
              width: 42,
              backgroundColor: "#F6F6F6",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <SimpleLineIcons name="arrow-left" size={23} color={"black"} />
          </View>
        </TouchableOpacity>
        <View style={{ width: "29%" }} />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>CART</Text>
        </View>

        <View style={{ width: "35%" }} />
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={{ alignSelf: "center" }}>
            <AntDesign name="home" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ height: "100%", width: "100%" }}>
      {/* header */}
      <CartHeader />

      {cart.length === 0 ?
        <EmptyCart />
        :
        <View>
          <View
            style={{
              height: 65,
              width: "100%",
              // backgroundColor: "pink",
              flexDirection: "row",
              backgroundColor: "#fff",
              justifyContent: 'center'
            }}
          >
            <View
              style={{
                justifyContent: "center",
                marginLeft: "10%",
                alignItems: 'center'

              }}
            >
              <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => skip()}>
                <View
                  style={{
                    marginTop: 13,
                    height: 21,

                    // alignSelf: "center",
                    // justifyContent:"center",

                    width: 21,
                    // alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 21,
                    borderColor: "#FF4D00",
                    justifyContent: 'center'

                  }}
                >
                  <Text style={{ color: "#FF4D00", textAlign: 'center' }}>1</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 10 }}>Cart</Text>
            </View>
            <View
              style={{
                width: "19%",
                marginLeft: '-0.1%',
                borderWidth: 1,
                borderColor: firstboder ? "#FF4D00" : "#CFCFCF",
                alignSelf: "center",

                borderBottomWidth: 1,
                // borderColor:'blue'
              }}
            />
            <View style={{ justifyContent: "center", marginLeft: "-3%" }}>
              <TouchableOpacity onPress={() => skip1()}>
                <View
                  style={{
                    marginTop: 13,
                    height: 21,
                    // marginLeft:-1,
                    alignSelf: "center",

                    width: 21,
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 21,
                    borderColor: firstboder ? "#FF4D00" : "#CFCFCF",
                  }}
                >
                  <Text style={{ color: firstboder ? "#FF4D00" : "#CFCFCF" }}>
                    2
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 10 }}>payment</Text>
            </View>
            <View
              style={{
                marginLeft: '-3.1%',
                width: 70,

                borderWidth: 1,
                borderColor: Second ? "#FF4D00" : "#CFCFCF",
                alignSelf: "center",

                borderBottomWidth: 1,
              }}
            />
            <View style={{ justifyContent: "center", marginLeft: '-2.5%' }}>
              <TouchableOpacity onPress={() => (Third ? skip2() : null)}>
                <View
                  style={{
                    marginTop: 13,
                    height: 21,

                    alignSelf: "center",

                    width: 21,
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 21,
                    borderColor: Second ? "#FF4D00" : "#CFCFCF",
                  }}
                >
                  <Text style={{ color: Second ? "#FF4D00" : "#CFCFCF" }}>3</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 10 }}>address</Text>
            </View>
            <View
              style={{
                marginLeft: '-2.5%',
                width: 70,

                borderWidth: 1,
                borderColor: Third ? "#FF4D00" : "#CFCFCF",
                alignSelf: "center",

                borderBottomWidth: 1,
              }}
            />
            <View style={{ justifyContent: "center", marginLeft: "-2.3%" }}>
              <View
                style={{
                  marginTop: 13,
                  height: 21,

                  alignSelf: "center",

                  width: 21,
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 21,
                  borderColor: Third ? "#FF4D00" : "#CFCFCF",
                }}
              >
                <Text style={{ color: Third ? "#FF4D00" : "#CFCFCF" }}>4</Text>
              </View>
              <Text style={{ fontSize: 10 }}>sumary</Text>
            </View>
          </View>
          <View>
            <FlatList
              ref={ref}
              onMomentumScrollEnd={updateCurrentSlideIndex}
              keyExtractor={(_, i) => i.toString()}
              // contentContainerStyle={{ height: height * 0.8 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              horizontal
              data={slides}
              pagingEnabled
              renderItem={({ item, index }) => <Slide index={index} />}
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#fff",
              alignSelf: "flex-end",
              flexDirection: "row",
              // justifyContent: "center",
              // alignItems: "flex-end",
              // justifyContent: "flex-end",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          // onPress={() => goToNextSlide()}
          >
            <Text style={{ justifyContent: "center", marginRight: 10 }}>
              Total: ₹ {TOTALPRICE}
            </Text>
            <TouchableOpacity
              onPress={handleRazorPayments}
            // onPress={() =>
            //   currentSlideIndex == 3
            //     ? navigation.navigate("Payment")
            //     : goToNextSlide()
            // }
            >
              <View
                style={{
                  marginRight: 8,
                  width: 183,
                  height: 51,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: "#112735",
                  borderColor: "#112735",
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 16,
                  }}
                >
                  {currentSlideIndex == 3 ? "PAY NOW" : "CONTINUE"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  );
};

export default CartScreen;
