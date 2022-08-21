import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfileComponent from "../Components/ProfileComponent";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
// import Wishlist from "./Wishlist";
const Profile2 = props => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView>
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
                source={require("../Assets/IMages/Profile.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 21,
                marginTop: 8,
              }}
            >
              Rayan
            </Text>
          </View>
          <View style={{ height: 10 }} />
          <View style={{ backgroundColor: "#fff" }}>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <AntDesign
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="CodeSandbox"
                    size={25}
                  />
                }
                title="Order"
                description="Check your order status"
                Next={props.navigation.navigate}
                NavigatioonName={"Order"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <Feather
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="headphones"
                    size={25}
                  />
                }
                title="Help Center"
                description="Help regarding your recent purchases"
                Next={props.navigation.navigate}
                NavigatioonName={"HelpCenter"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <SimpleLineIcons
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="heart"
                    size={25}
                  />
                }
                title="Wishlist"
                description="Your most loved styles"
                Next={props.navigation.navigate}
                NavigatioonName={"Wishlist"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <SimpleLineIcons
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="user"
                    size={25}
                  />
                }
                title="Your earnings"
                description="Your total reselling earnings"
                Next={props.navigation.navigate}
                NavigatioonName={"YourEraningScreen"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <FontAwesome
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="bell-o"
                    size={25}
                  />
                }
                title="My Notification"
                description="Help regarding your recent purchases"
                Next={props.navigation.navigate}
                NavigatioonName={"Notification"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <Ionicons
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="location-outline"
                    size={22}
                  />
                }
                title="Address"
                description="Save addresses for a hassle-free checkout"
                Next={props.navigation.navigate}
                NavigatioonName={"HelpCenter"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <Foundation
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="page-edit"
                    size={25}
                  />
                }
                title="Profile Details"
                description="Change your profile status & password"
                Next={props.navigation.navigate}
                NavigatioonName={"ProfileDetailScreen"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
              <ProfileComponent
                icon={
                  <Feather
                    style={{
                      marginTop: 4,
                      color: "#9D9D9D",
                    }}
                    name="settings"
                    size={22}
                  />
                }
                title="Settings"
                description="Manage notifications & app settings"
                Next={props.navigation.navigate}
                NavigatioonName={"Setting"}
              />
              <View
                style={{
                  marginTop: 8,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#E4E4E4",
                }}
              />
            </View>
          </View>
          <View style={{ height: 10 }} />
          <View style={{ width: "100%", backgroundColor: "#fff" }}>
            <View style={{ width: "70%", alignSelf: "center" }}>
              <Text style={{ fontSize: 15, color: "#6D6D6D", marginTop: 10 }}>
                FAQs
              </Text>
              <Text style={{ fontSize: 15, color: "#6D6D6D", marginTop: 10 }}>
                ABOUT US
              </Text>
              <Text style={{ fontSize: 15, color: "#6D6D6D", marginTop: 10 }}>
                TERMS OF USE
              </Text>
              <Text style={{ fontSize: 15, color: "#6D6D6D", marginTop: 10 }}>
                PRIVACY POLICY
              </Text>
            </View>
          </View>
          <View style={{ height: 40 }} />
          <TouchableOpacity>
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                borderWidth: 1,
                alignItems: "center",
                borderColor: "#FF4400",
                height: 44,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#FF4400" }}>LOG OUT</Text>
            </View>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile2;
