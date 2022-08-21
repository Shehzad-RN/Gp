import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";

const CategoryIMageCimponents = props => {
  return (
    <View>
      <FlatList
        numColumns={3}
        data={props.WomanTopData}
        // horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={{ marginLeft: 5, marginTop: 10 }}>
              <Image source={item.imagePath} />
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 12, alignItems: "center" }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryIMageCimponents;
