import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import Order from "../Assets/IMages/Svg/order.svg";
import Help from "../Assets/IMages/Svg/Help.svg";
import Wish from "../Assets/IMages/Svg/wish.svg";
import Earn from "../Assets/IMages/Svg/earn.svg";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleTokenSession, handleUserBio } from "../Redux/dataReducer";
import { logout } from '../Redux/actions'
import { handleAuthTokenSession, handleAuthUserBio } from "../Redux/authReducer";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    SignOut()
  }
  const SignOut = async () => {
    try {
      logout()
      dispatch(handleAuthUserBio(''));
      dispatch(handleAuthTokenSession(''));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "FAFAFA",
      }}
    >
      <View>
        <View
          style={{
            height: 250,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ height: 180, width: 180 }}
              source={user?.image ? {uri: user?.image} : require("../Assets/IMages/GropIMage/group_detail.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 21,
            }}
          >
            {user?.name}
          </Text>
        </View>
        <View style={{ height: 10 }} />
        <View
          style={{
            height: 253,
            // backgroundColor: "pink",
          }}
        >
          <View
            style={{
              //   padding: 1,
              height: 60,
              marginTop: 2,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                padding: 18,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Order")}>
                <View
                  style={{
                    flexDirection: "row",
                    //   backgroundColor: "pink",
                    justifyContent: "space-between",
                  }}
                >

                  <View style={{ flexDirection: "row" }}>
                    <Order />
                    <View>


                      <Text
                        style={{
                          fontSize: 15,
                          marginLeft: 9,
                          color: "#252525",
                        }}
                      >
                        Order
                      </Text>
                      <Text
                        style={{
                          width: 180,
                          fontSize: 9,
                          marginLeft: 9,
                          color: "#9D9D9D",
                        }}
                      >
                        Check your order status
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: "flex-end",
                      // width: 115,
                      //   backgroundColor: "pink",
                      justifyContent: "center",
                    }}
                  >
                    <SimpleLineIcons
                      style={{
                        color: "#9D9D9D",

                      }}
                      name="arrow-right"
                      size={22}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>
            <View
              style={{
                //   padding: 1,
                height: 60,
                marginTop: 2,
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  padding: 18,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    //   backgroundColor: "pink",
                    justifyContent: 'space-between'
                  }}
                >



                  <View style={{ flexDirection: 'row' }}>
                    <Help />
                    <View>
                      <Text style={{ fontSize: 15, marginLeft: 9 }}>
                        Help Center
                      </Text>
                      <Text
                        style={{
                          width: 180,
                          fontSize: 9,
                          marginLeft: 9,
                          color: "#9D9D9D",
                        }}
                      >
                        Help regarding your recent purchases
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: "flex-end",

                      //   backgroundColor: "pink",
                      justifyContent: "center",
                      // marginTop: 4,
                    }}
                  >
                    <SimpleLineIcons
                      style={{
                        color: "#9D9D9D",
                        // justifyContent: "center",
                      }}
                      name="arrow-right"
                      size={22}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
            <View
              style={{
                //   padding: 1,
                height: 60,
                marginTop: 2,
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  padding: 18,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    //   backgroundColor: "pink",
                    justifyContent: 'space-between'
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Wish />
                    <View>


                      <Text style={{ fontSize: 15, marginLeft: 9 }}>
                        Wishlist
                      </Text>
                      <Text
                        style={{
                          width: 180,
                          fontSize: 9,
                          marginLeft: 9,
                          color: "#9D9D9D",
                        }}
                      >
                        Your most loved styles
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: "flex-end",
                      width: 115,
                      //   backgroundColor: "pink",
                      justifyContent: "center",
                    }}
                  >
                    <SimpleLineIcons
                      style={{
                        color: "#9D9D9D",
                        // justifyContent: "center",
                      }}
                      name="arrow-right"
                      size={22}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("YourEraningScreen")}
          >
            <View
              style={{
                //   padding: 1,
                height: 60,
                marginTop: 2,
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  padding: 18,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    //   backgroundColor: "pink",
                    justifyContent: 'space-between'
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Earn />
                    <View>

                      <Text style={{ fontSize: 15, marginLeft: 4 }}>
                        Your earnings
                      </Text>
                      <Text
                        style={{
                          width: 180,
                          fontSize: 9,
                          marginLeft: 5,
                          color: "#9D9D9D",
                        }}
                      >
                        Your total reselling earnings
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: "flex-end",
                      width: 115,
                      //   backgroundColor: "pink",
                      justifyContent: "center",
                    }}
                  >
                    <SimpleLineIcons
                      style={{
                        color: "#9D9D9D",
                      }}
                      name="arrow-right"
                      size={22}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 6 }} />
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <View style={{}}>
            <View
              style={{
                height: 62,
                marginTop: 2,
                backgroundColor: "white",
                // marginBottom: 2,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  padding: 18,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: 'space-between'
                  }}
                >


                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome
                      style={{
                        marginTop: 4,
                        color: "#9D9D9D",
                      }}
                      name="bell-o"
                      size={25}
                    />
                    <View>

                      <Text style={{ fontSize: 15, marginLeft: 9 }}>
                        My Notification
                      </Text>
                      <Text
                        style={{
                          width: 180,
                          fontSize: 9,
                          marginLeft: 9,
                          color: "#9D9D9D",
                        }}
                      >
                        Help regarding your recent purchases
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: "flex-end",
                      width: 115,
                      justifyContent: "center",
                    }}
                  >
                    <SimpleLineIcons
                      name="arrow-right"
                      style={{
                        //   backgroundColor: "blue",
                        color: "#9D9D9D",
                      }}
                      size={22}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Address")}>
          <View
            style={{
              height: 62,
              marginTop: 2,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                padding: 18,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'space-between'
                }}
              >

                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="location-outline"
                    size={22}
                  />
                  <View>


                    <Text style={{ fontSize: 15, marginLeft: 9 }}>Address</Text>
                    <Text
                      style={{
                        width: 190,
                        fontSize: 9,
                        marginLeft: 9,
                        color: "#9D9D9D",
                      }}
                    >
                      Save addresses for a hassle-free checkout
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "flex-end",
                    width: 115,
                    justifyContent: "center",
                  }}
                >
                  <SimpleLineIcons
                    name="arrow-right"
                    style={{
                      //   backgroundColor: "blue",
                      color: "#9D9D9D",
                    }}
                    size={22}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: 10 }} />
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileDetailScreen")}
      >
        <View
          style={{
            height: 62,
            marginTop: 2,
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              padding: 18,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between'
              }}
            >


              <View style={{ flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row' }}>
                  <Foundation
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="page-edit"
                    size={25}
                  />
                  <View>


                    <Text style={{ fontSize: 15, marginLeft: 9 }}>
                      Profile Details
                    </Text>
                    <Text
                      style={{
                        width: 180,
                        fontSize: 9,
                        marginLeft: 9,
                        color: "#9D9D9D",
                      }}
                    >
                      Change your profile status & password
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  width: 115,
                  justifyContent: "center",
                }}
              >
                <SimpleLineIcons
                  name="arrow-right"
                  style={{
                    //   backgroundColor: "blue",
                    color: "#9D9D9D",
                  }}
                  size={22}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
        <View
          style={{
            height: 62,
            marginTop: 2,
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              padding: 18,
              justifyContent: "space-between",
              // marginBottom: 10,
              // marginTop: -6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between'
              }}
            >

              <View style={{ flexDirection: 'row' }}>
                <Feather
                  style={{
                    marginTop: 4,
                    color: "#9D9D9D",
                  }}
                  name="settings"
                  size={22}
                />
                <View>


                  <Text style={{ fontSize: 15, marginLeft: 9 }}>Settings</Text>
                  <Text
                    style={{
                      width: 180,
                      fontSize: 9,
                      marginLeft: 9,
                      color: "#9D9D9D",
                    }}
                  >
                    Manage notifications & app settings
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  width: 115,
                  justifyContent: "center",
                }}
              >
                <SimpleLineIcons
                  name="arrow-right"
                  style={{
                    //   backgroundColor: "blue",
                    color: "#9D9D9D",
                  }}
                  size={22}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 12 }} />
      <View
        style={{
          height: 148,
          backgroundColor: "white",
          padding: 18,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('RefundPolicy')}
          style={{
            marginTop: 7,
            width: 109,
          }}
        >
          <Text>FAQs</Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 7,
            width: 109,
          }}
        >
          <Text>ABOUT US</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TermsAndConditions')}
          style={{
            marginTop: 7,
            width: '100%',
          }}
        >
          <Text>TERMS AND CONDITONS</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('PrivacyPolicy')}
          style={{
            marginTop: 7,
            width: '100%',
          }}
        >
          <Text>PRIVACY POLICY</Text>
        </Pressable>
      </View>
      <View
        style={{
          height: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={handleLogout}>
          <View
            style={{
              width: 300,
              height: 50,
              borderColor: "#FF4400",
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#FF4400",
              }}
            >
              LOG OUT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Profile;
