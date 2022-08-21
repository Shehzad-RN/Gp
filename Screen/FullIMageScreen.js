import React, { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { View, Text, Image, FlatList, Dimensions } from "react-native";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const FullIMageScreen = ({ props, route }) => {
  const { productImage } = route.params;
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  const [firstboder, setfirstboder] = useState(false);
  const [Second, setSecond] = useState(false);
  const [Third, setThird] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const Goback = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex >= 0) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != productImage.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        keyExtractor={(_, i) => i.toString()}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={productImage}
        renderItem={({ item }) => (
          <Image style={{
            height: height - 80,
            width: width,
            resizeMode: 'contain'
          }} source={{ uri: item.file }} />
        )}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          height: 50,
          width: 50,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          top: 280,
          marginLeft: 5,
        }}
        onPress={() => Goback()}
      >
        <View>
          <SimpleLineIcons name="arrow-left" size={23} color={"black"} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          height: 50,
          width: 50,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          top: 280,
          marginLeft: -5,
          right: 0,
        }}
        onPress={() => goToNextSlide()}
      >
        <View>
          <SimpleLineIcons name="arrow-right" size={23} color={"black"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FullIMageScreen;
