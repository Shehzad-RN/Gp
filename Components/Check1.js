import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import API from "../api/_api";

// const imageData = [
//   {
//     image1: require("../Assets/IMages/image1.png"),
//     image2: require("../Assets/IMages/image2.png"),
//     ratingpoint: "4.5",
//     ratingpeople: "223",
//     itemtitle: "Rose Stripes Dress",
//     offrate: "₹ 999",
//     rate: "₹ 669",
//     saleoffpercent: "40% OFF",
//     image3: require("../Assets/IMages/image3.png"),
//   },
//   {
//     image1: require("../Assets/IMages/image4.png"),
//     image2: require("../Assets/IMages/image2.png"),
//     ratingpoint: "4.5",
//     ratingpeople: "223",
//     itemtitle: "Solid Fit And Flare Dress",
//     offrate: "₹ 999",
//     rate: "₹ 669",
//     saleoffpercent: "40% OFF",
//     image3: require("../Assets/IMages/image3.png"),
//   },
//   {
//     image1: require("../Assets/IMages/image5.png"),
//     image2: require("../Assets/IMages/image2.png"),
//     ratingpoint: "4.5",
//     ratingpeople: "223",
//     itemtitle: "Wine Solid Cut Outs Gown",
//     offrate: "₹ 999",
//     rate: "₹ 669",
//     saleoffpercent: "40% OFF",
//     image3: require("../Assets/IMages/image3.png"),
//   },
//   {
//     image1: require("../Assets/IMages/image6.png"),
//     image2: require("../Assets/IMages/image2.png"),
//     ratingpoint: "4.5",
//     ratingpeople: "223",
//     itemtitle: "Black Colorblocked Wrap Dress",
//     offrate: "₹ 999",
//     rate: "₹ 669",

//     saleoffpercent: "40% OFF",
//     image3: require("../Assets/IMages/image3.png"),
//   },
// ];

const Check1 = props => {
  //   props.okey = true;
  const check = props.okey;
  return (
    <View style={{}}>
      <FlatList
        data={props.imageData}
        keyExtractor={(_, i) => i.toString()}
        numColumns={props.num}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          props.okey ? (
            <View
              style={{
                borderWidth: 1,
                margin: 5,

                borderColor: "#DBDBDB",
                width: 170,
                backgroundColor: "#FFFFFF",
                borderRadius: 14,
                height: 280,
              }}
            >
              <View style={{}}>
                <TouchableOpacity onPress={() => props.Next("MainPurchasing", { imagePath: item?.image1 })}>
                  <Image
                    style={{
                      height: 220,

                      borderTopLeftRadius: 14,
                      borderTopRightRadius: 14,

                      width: 169,
                      marginTop: -5,
                    }}
                    source={item.image1}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    position: "absolute",
                    width: 170,
                    height: 40,

                    alignItems: "flex-end",
                  }}
                >
                  {props.heart ? null : (
                    <TouchableOpacity>
                      <View
                        style={{
                          marginTop: 10,
                          height: 31,
                          marginRight: 10,
                          width: 31,
                          borderRadius: 31,
                          backgroundColor: "white",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AntDesign
                          style={{ color: "black" }}
                          name="hearto"
                          size={20}
                        />
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                <View
                  style={{
                    width: 170,
                    height: 30,
                    marginTop: -30,
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      marginLeft: 10,
                      width: 92,
                      height: 21,
                      flexDirection: "row",
                      borderRadius: 21,
                      backgroundColor: "lightgrey",
                      opacity: 0.8,
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
                      size={10}
                      style={{
                        color: "#FDCC0D",
                        alignSelf: "center",
                      }}
                    />
                    <View
                      style={{
                        borderWidth: 0.5,
                        height: 15,
                        marginLeft: 3,
                        alignSelf: "center",
                        justifyContent: "center",
                        borderRightColor: "black",
                      }}
                    />

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 4,
                          alignSelf: "center",
                        }}
                      >
                        {item.ratingpeople}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 2,
                          alignSelf: "center",
                        }}
                      >
                        sold
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ height: 4 }} />
              <View
                style={{
                  width: 170,
                  height: 35,
                  paddingTop: 1,
                  marginLeft: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "#A5A5A5",
                    paddingLeft: "3%",
                  }}
                >
                  {item.itemtitle}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    // height: 5,
                    paddingTop: "2%",
                    // marginLeft: 2,
                    // backgroundColor: "pink",
                    paddingLeft: "3%",
                  }}
                >
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      fontSize: 13,
                      marginRight: 4,
                      color: "#A5A5A5",
                    }}
                  >
                    {item.offrate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "black",
                      fontWeight: "bold",
                      marginRight: 4,
                    }}
                  >
                    {item.rate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "800",
                      color: "red",
                      marginTop: 3,
                    }}
                  >
                    {item.saleoffpercent}
                  </Text>
                  <View
                    style={{
                      marginLeft: 5,
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      style={{ height: 20, width: 20 }}
                      source={item.image2}
                    />
                    <Image
                      style={{ height: 20, width: 20, marginLeft: -8 }}
                      source={item.image3}
                    />
                  </View>
                </View>
              </View>
            </View>
          ) : (
            // Second flatlist
            <TouchableOpacity
              style={
                {
                  // width: 237,
                  // height: 98,
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
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
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

export const ImageCard = props => {
  let productData = props.imageData;

  const navigateToDetail = (variant, item) => {
    getVarintsProduct(variant, item)
      .then(data => {
        props.navigation.navigate("MainPurchasing", {
          productData: item,
          similarProducts: data,
        })
      })
      .catch(e => console.log(e.message))
  }

  const getVarintsProduct = async (variant, item) => {
    if (variant.length === 0) {
      return false
    }
    return new Promise(async (resolve, reject) => {
      try {
        let list = [];
        for (let index = 0; index < variant.length; index++) {
          const element = variant[index];
          if (item?.id !== element.id) {
            const get = await API.get(`/products/${element.id}`)
            list.push(get.data);
          }
        }
        resolve(list);
      } catch (error) {
        reject(error.message)
      }
    })
  }

  return (
    <View>
      <FlatList
        nestedScrollEnabled
        data={productData}
        keyExtractor={(_, i) => i.toString()}
        numColumns={props.num}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {

          return <ProductComp props={props} item={item} navigateToDetail={navigateToDetail} />
        }}
      />
    </View>
  );
};

const ProductComp = ({ item: data, navigateToDetail, props }) => {
  const [item, setItem] = React.useState(data);
  React.useEffect(async () => {
    try {
      if (data.variants[0]?.id === data.id) {
        if (item.variants.length > 1) {
          const product = await API.get(`/products/${data.variants[1]?.id}`)
          setItem(product?.data);
        }
      } else {
        const product = await API.get(`/products/${data.variants[0]?.id}`)
        setItem(product?.data);
      }
    } catch (error) {
      console.log('homepage/check1/productImg', error.message);
    }
  }, []);

  const percentOff = Number(100 - (item?.group_price * 100 / item?.mrp)).toFixed(0);
  return (
    <View
      style={{
        borderWidth: 1,
        margin: 5,
        borderColor: "#DBDBDB",
        width: 170,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        height: 280,
      }}
    >
      <View style={{}}>
        <TouchableOpacity onPress={() => navigateToDetail(item.variants, data)}>
          <Image
            style={{
              height: 220,

              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,

              width: 169,
              marginTop: -5,
            }}
            source={{ uri: item?.title_image || data?.title_image }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: 170,
            height: 40,

            alignItems: "flex-end",
          }}
        >
          {props.heart ? null : (
            <TouchableOpacity>
              <View
                style={{
                  marginTop: 10,
                  height: 31,
                  marginRight: 10,
                  width: 31,
                  borderRadius: 31,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  style={{ color: "black" }}
                  name="hearto"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            width: 170,
            height: 30,
            marginTop: -30,
            justifyContent: "center",
          }}
        >
          {/* Rating */}

          <View
            style={{
              marginLeft: 10,
              width: 92,
              height: 21,
              flexDirection: "row",
              justifyContent: 'center',
              borderRadius: 21,
              backgroundColor: "lightgrey",
              opacity: 0.8,
            }}
          >
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
              }}
            >
              Free Delivery
            </Text>
            {/* <Text
                      style={{
                        marginLeft: 4,
                        marginTop: 2,
                        fontSize: 12,
                      }}
                    >
                      4.5
                    </Text>
                    <AntDesign
                      name="star"
                      size={10}
                      style={{
                        color: "#FDCC0D",
                        alignSelf: "center",
                      }}
                    />
                    <View
                      style={{
                        borderWidth: 0.5,
                        height: 15,
                        marginLeft: 3,
                        alignSelf: "center",
                        justifyContent: "center",
                        borderRightColor: "black"
                      }}
                    />

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 4,
                          alignSelf: "center",
                        }}
                      >
                        223
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 2,
                          alignSelf: "center",
                        }}
                      >
                        sold
                      </Text>
                    </View> */}
          </View>
        </View>
      </View>
      <View style={{ height: 4 }} />
      <View
        style={{
          width: 170,
          height: 35,
          paddingTop: 1,
          marginLeft: 2,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: "#A5A5A5",
            paddingLeft: "3%",
          }}
          numberOfLines={1}
        >
          {item?.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: 'wrap',
            paddingHorizontal: 5,
            // height: 5,
            paddingTop: "2%",
          }}
        >
          <Text
            style={{
              textDecorationLine: "line-through",
              fontSize: 13,
              marginRight: 4,
              color: "#A5A5A5",
            }}
          >
            ₹{item?.mrp}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "black",
              fontWeight: "bold",
              marginRight: 4,
            }}
          >
            ₹{item?.group_price}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "800",
              color: "red",
              marginTop: 3,
            }}
          >
            {percentOff}% OFF
          </Text>
          <View
            style={{
              marginLeft: 5,
              flexDirection: "row",
            }}
          >
            <Image
              style={[styles.similarProduct,
              {
                borderWidth: 1,
                borderColor: '#fff',
              }
              ]}
              source={{ uri: item.title_image }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}


const ProductImg = ({ variant, item }) => {
  const [pImage, setImage] = React.useState();

  React.useEffect(async () => {
    try {
      if (variant[0]?.id === item.id) {
        if (variant.length > 1) {
          const product_image = await API.get(`/products/${variant[1]?.id}`)
          setImage(product_image?.data?.title_image);
        }
      } else {
        const product_image = await API.get(`/products/${variant[0]?.id}`)
        setImage(product_image?.data?.title_image);
      }
    } catch (error) {
      console.log('homepage/check1/productImg', error.message);
    }
  }, []);

  return (
    <Image
      style={{
        height: 220,

        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,

        width: 169,
        marginTop: -5,
      }}
      source={{ uri: pImage || item?.title_image }}
    />
  )
}

// const SimilarProductComponent = () => {

// }

const styles = StyleSheet.create({
  similarProduct: {
    height: 20, width: 20, borderRadius: 30,
  }
})
export default Check1;
