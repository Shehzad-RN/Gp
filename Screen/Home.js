import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Category from "./ctg";
import profile from "./Profile";
import CartScreen from "./CartScreen";
import { BlurView } from "expo-blur";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NewScreen from "./NewScreen";
import Category1 from "../Assets/IMages/Svg/Category.svg";
import Shopbeg from "../Assets/IMages/Svg/Shopbeg.svg";
import MyProfile from "../Assets/IMages/Svg/MyProfile.svg";
import Homtn from "../Assets/IMages/Svg/Homtn.svg";
import NewBtn from "../Assets/IMages/Svg/NewBtn.svg";
import CartPage from "./Cart";

const Tab = createBottomTabNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default function Home() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarVisible: false,
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Homtn />,
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          //   tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            // <View style={{ backgroundColor: "black" }}>
            <Category1 />
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartPage}
        initialParams={{userLog: false}}
        options={{
          //   tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color }) => <Shopbeg fill={"#707070"} />,
          tabBarVisible: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          //   tabBarLabel: "",

          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            // <View style={{ backgroundColor: "black" }}>
            <NewBtn fill={"#707070"} />
            // </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          //   tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            // <View style={{ backgroundColor: "black" }}>
            <MyProfile />
            // </View>
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
