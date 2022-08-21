import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import { Feather } from "@expo/vector-icons";


const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: "1",
    image: require("../Assets/IMages/First.jpeg"),
  },
  {
    id: "2",
    image: require("../Assets/IMages/Second.jpeg"),
  },
  {
    id: "3",
    image: require("../Assets/IMages/Third.jpeg"),
  },
];
const Slide = ({ item, index }) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image source={item?.image}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          resizeMode: 'contain',
          flex: 1
        }}
      />
    </View>
  );
};

const First = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
          height: 60,
          backgroundColor: '#FAFFFB'
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
        </View>

        {/* Render buttons */}
        <View style={{}}>
          {currentSlideIndex == slides.length - 1 ? (
            <TouchableOpacity
              style={{
                width: "50%",
                height: 40,
                borderRadius: 16,
                backgroundColor: "#FF4400",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: 'center',
                marginBottom: 10
              }}
              onPress={() => navigation.replace("LOgin", { userLog: false })}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                {slides.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.indicator,
                      currentSlideIndex == index && {
                        backgroundColor: "#FF4400",
                        width: 20,
                      },


                    ]}
                  />
                ))}
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    // alignSelf: "flex-end",
                    // justifyContent: "flex-end",
                    backgroundColor: "#FF4400",
                    justifyContent: "center",
                    height: 30,
                    width: 50,
                    marginTop: -20,
                    borderRadius: 20,
                  }}
                  onPress={() => goToNextSlide()}
                >
                  <View>
                    <Feather
                      style={{ alignSelf: "center", justifyContent: "center" }}
                      name="arrow-right"
                      size={24}
                      color="white"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 20, backgroundColor: '#FAFFFB' }}>
      {/* <StatusBar backgroundColor="whites" /> */}
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item, index }) => <Slide item={item} index={index} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 8,
    width: 8,
    // borderRadius: 4,
    // borderWidth: 4,
    backgroundColor: "#D8D8D8",
    marginHorizontal: 3,
    borderRadius: 4,
  },
  //   btn: {
  //     flex: 1,
  //     // height: 15,

  //     borderRadius: 16,
  //     backgroundColor: "#E33054",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
});
export default First;
