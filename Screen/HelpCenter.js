/** @format */

import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const Data1 = [
  {
    title: "Payment/Refund",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
    nv: "Pay",
  },
  {
    title: "Offers, Discount, Coupons",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
    nv: "Offer",
  },
  {
    title: "Manage Your Account",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
    nv: "Manage",
  },
  {
    title: "Other",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
    nv: "Other",
  },
  {
    title: "Other",
    arrow: (
      <SimpleLineIcons
        style={{ color: "#BCBCBC" }}
        size={20}
        name="arrow-right"
      />
    ),
  },
];
const HelpCenter = props => {
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
                HELP CENTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            height: 3,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 180,
              height: 180,
              padding: 18,
              // alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Help Center
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#909090",
              }}
            >
              Please get in touch and we will be happy to help you
            </Text>
          </View>
          <Image
            style={{
              height: 180,
              width: 180,
            }}
            source={require("../Assets/IMages/helpimage.png")}
          />
        </View>
        <View
          style={{
            height: "3%",
          }}
        />
        <View
          style={{
            height: 56,
            width: "100%",
            backgroundColor: "white",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            NEED HELP WITH RECENT PURCHASES?
          </Text>
        </View>
        <View
          style={{
            height: 2,
          }}
        />
        <View
          style={{
            height: 63,
            width: "100%",
            backgroundColor: "white",
            //   padding: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              textAlign: "center",
              color: "#909090",
            }}
          >
            There are no orders to show
          </Text>
        </View>
        <View
          style={{
            height: "2%",
          }}
        />
        <View
          style={{
            height: 56,
            backgroundColor: "white",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            MORE QUERIES RELATED TO YOUR EXPERIENCE
          </Text>
        </View>
        <FlatList
          data={Data1}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View>
              <View
                style={{
                  height: 2,
                }}
              />
              <TouchableOpacity
                onPress={() => props.navigation.navigate(item.nv)}
              >
                <View
                  style={{
                    height: 47,
                    backgroundColor: "white",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 25,
                    paddingTop: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#6F6F6F",
                    }}
                  >
                    {item.title}
                  </Text>
                  <View>{item.arrow}</View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={{ height: 10 }} />
        <View
          style={{
            width: "100%",
            height: 197,
            backgroundColor: "white",
            // alignItems: "center",
            // justifyContent: "center",
            padding: 30,
          }}
        >
          <View
            style={{
              height: 177,
              width: "100%",
              //   backgroundColor: "blue",
              //   paddding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Recent Queries
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              There are no recent queries raised in Last 30 Days
            </Text>
            <View
              style={{
                height: "10%",
              }}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Queries")}
            >
              <View
                style={{
                  height: 53,
                  borderWidth: 1,
                  borderColor: "lightgrey",
                  borderRadius: 3,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>SHOW OLDER QUERIES</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            height: 197,
            width: "100%",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
            }}
          >
            Want to reach us the old way?
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "#FF4400",
            }}
          >
            POSTAL ADDRESS
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default HelpCenter;

// export default HelpCenter;
