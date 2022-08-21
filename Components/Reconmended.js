import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ReconmendedData = [
  {
    title: "Flip-Flops Under",
    imagePath: require("../Assets/IMages/RecomandedProduct/Second.png"),

    price: "₹ 399",
  },
  {
    title: "Flip-Flops Under",

    imagePath: require("../Assets/IMages/RecomandedProduct/first.png"),
    price: "₹ 399",
  },
  {
    title: "Flip-Flops Under",

    imagePath: require("../Assets/IMages/RecomandedProduct/Third.png"),
    price: "₹ 399",
  },
  {
    title: "Flip-Flops Under",

    imagePath: require("../Assets/IMages/RecomandedProduct/Forth.png"),
    price: "₹ 399",
  },
];

const Reconmended = props => {
  console.log('props/recommended', props?.data);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={props.data}
          numColumns={2}
          renderItem={({ item, index }) => (
            <TouchableOpacity >
              <View
                style={{
                  marginTop: (index == 2) | (index == 3) ? 15 : 0,
                  marginLeft: 3,
                }}
              >
                <Image
                  style={{ height: 170, width: 179 }}
                  source={{uri: item?.images[0]?.file}}
                />
                <Text style={{ marginTop: -50, marginLeft: 10, color: "#fff" }}>
                  {item.name}
                </Text>
                <Text style={{ color: "#fff", marginLeft: 20 }}>
                  {item.best_buy_price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reconmended;
