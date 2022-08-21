import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Check =( props )=> {
  //   props.okey = true;
  const check = props.okey;
  return (
    <View style={{}}>
      <FlatList
        data={props.imageData}
        // {chec}

        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={props.okey ? true : false}
        renderItem={({ item }) =>
        
          props.okey ? (
            <View
              style={{
                borderWidth: 1,
                margin: 5,

                borderColor: "#DBDBDB",
                width: 170,

                borderRadius: 14,
                height: 270,
                alignItems: "center",
                alignSelf:'center'
              }}
            >
              <View style={{}}>
                <TouchableOpacity onPress={() => props.Next("MainPurchasing",{
                    Imagepath: item.title_image,
                  })}>
                  <Image
                    style={{
                      height: 220,

                      borderTopLeftRadius: 14,
                      borderTopRightRadius: 14,

                      width: 169,
                      // marginRight: 4,uylvh. bi
                    }}
                    source={{uri:  item.title_image}}
                  />
                </TouchableOpacity>
              </View>
              {/* <View style={{ height: 4, backgroundColor: "#112735" }} /> */}
              <View style={{}}>
                {/* </View> */}
                <View
                  style={{
                    marginTop: -4,
                    width: 170,
                    height: 50,
                    paddingTop: "5%",
                    // borderRadius: 30,
                    borderBottomEndRadius: 14,
                    borderBottomLeftRadius: 14,
                    // marginLeft: 5,
                    paddingLeft: "8%",
                    backgroundColor: "#112735",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      height:14,
                      fontSize: 10,
                      color: "#C7C7C7",
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        textDecorationLine: "line-through",
                        fontSize: 13,
                        marginRight: 4,
                        color: "#C7C7C7",
                      }}
                    >
                      {item.offrate}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#fff",
                        fontWeight: "bold",
                        marginRight: 4,
                      }}
                    >
                      {item.selling_price}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "800",
                        color: "red",
                        marginTop: 3,
                      }}
                    >
                      {item.group_price}
                    </Text>
                
                  </View>
                </View>
              </View>
            </View>
          ) : (
            // Second flatlist
            <TouchableOpacity
              style={
                {
                
                }
              }
            >
              <View
                style={{
                  borderWidth: 1,
                  //   padding: 5,

                  borderColor: "#DBDBDB",
                  width: 237,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 8,
                  height: 98,
                  margin: 5,
                }}
              >
                <View
                  style={{
                    width: 76,

                    height: 96,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      height: 96,

                      borderTopLeftRadius: 7,

                      borderBottomLeftRadius: 7,

                      width: 76,
                    }}
                    source={item.image1}
                  ></Image>

                  <View
                    style={{
                      marginTop: 4,
                      marginLeft: 4,
                      width: 153,
                      height: 98,
                      // alignItems: "center",
                      // alignSelf: "center",
                      // marginLeft: 5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                        }}
                      >
                        {item.itemtitle}
                      </Text>
                      <TouchableOpacity>
                        <AntDesign
                          style={{ marginRight: 5 }}
                          name="hearto"
                          size={21}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: 125,
                        height: 35,

                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 21,
                          flexDirection: "row",
                          borderRadius: 21,
                          borderWidth: 1,
                          borderColor: "lightgrey",
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: 4,
                            marginTop: 2,
                            fontSize: 12,
                          }}
                        >
                          {item.ratingpoint}
                        </Text>
                        <AntDesign
                          name="star"
                          size={6}
                          style={{
                            color: "#FDCC0D",
                            alignSelf: "center",
                          }}
                        />
                        <View
                          style={{
                            borderWidth: 0.5,
                            height: 20,
                            marginLeft: 3,

                            borderRightColor: "lightgrey",
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 12,
                            marginLeft: 4,
                            alignSelf: "center",
                          }}
                        >
                          {item.ratingpeople}
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: 25,
                        }}
                      >
                        <Image source={item.image2} />
                      </View>
                      <View
                        style={{
                          marginLeft: -10,
                          borderColor: "white",
                          borderWidth: 1,
                          borderRadius: 20,
                        }}
                      >
                        <Image source={item.image3} />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        // alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          textDecorationLine: "line-through",
                          fontSize: 15,
                          marginRight: 4,
                          color: "#A5A5A5",
                        }}
                      >
                        {item.offrate}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "black",
                          fontWeight: "bold",
                          marginRight: 4,
                        }}
                      >
                        {item.rate}
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: "800",
                          color: "red",
                          marginTop: 3,
                        }}
                      >
                        {item.saleoffpercent}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};
export default Check;
