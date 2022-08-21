/** @format */

import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
const Data = [
  {
    time: "08: 45: 17",
    member: "1/2",
    image1: require("../../../Assets/images/image2.png"),
    messengername: "Priankhi Saikia",
    messsage:
      "This is a very good product you should definitely buy this and the price of the product is affordable too.",
  },
];

const Groupbuy = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          height: 67,
          width: "100%",
          //   justifyContent:"center",
          alignItems: "center",
          marginTop: "20%",
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
      <View
        style={{
          height: "2%",
        }}
      />
      <FlatList
        data={Data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
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
                Hello friends {item.member} members
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
                  source={item.image1}
                />
                <View
                  style={{
                    width: "4%",
                  }}
                />
                <View
                  style={{
                    borderRadius: 31,
                    borderWidth: 1,
                    borderColor: "black",
                    height: 63,
                    width: 63,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  marginTop: "10%",
                }}
              >
                Message from {item.messengername}
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
                {item.messsage}
              </Text>
              <View
                style={{
                  height: "10%",
                }}
              />
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: 200,
                    backgroundColor: "#FF4D00",
                    borderRadius: 33,
                    justifyContent: "center",
                    alignItems: "center",
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
        )}
      />
    </View>
  );
};
export default Groupbuy;
