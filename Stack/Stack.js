import React from "react";
import {
  ActivityIndicator, View
} from "react-native";
import First from "../Screen/First";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Second from "../Screen/Second";
import LOgin from "../Screen/LOgin";

import Login1 from "../Screen/Login1";
import DetailsScreen from "../Screen/DetailsScreen";
import { AntDesign } from "@expo/vector-icons";
import Home from "../Screen/Home";
import Check from "../Screen/Check";
import CartScreen from "../Screen/CartScreen";
import Notification from "../Screen/Notification";
import Wishlist from "../Screen/Wishlist";
// import MainPurchasing from "../Screen/Mainpurchaseing";
import MainPurchasing from "../Screen/MainPurchaseing";
import FullIMageScreen from "../Screen/FullIMageScreen";
import HelpCenter from "../Screen/HelpCenter";
import Queries from "../Components/Queries";
import Pay from "../Components/Pay";
import Order from "../Screen/Order";
import ItemDetail from "../Components/ItemDetail";
import YourEraningScreen from "../Screen/YourEraningScreen";
import Setting from "../Screen/Setting";
import ProfileDetailScreen from "../Screen/ProfileDetailScreen";
import Address from "../Screen/Address";
import Pay1 from "../Components/Pay1";
import Offer from "../Components/Offer";
import Offer1 from "../Components/Offer1";
import Manage from "../Components/Mange";
import Manage1 from "../Components/Mange1";
import Other from "../Components/Other";
import Other1 from "../Components/Other1";
import Payment from "../Components/Payment";
import API from "../api/_api";
import SplashScreen from "../Screen/Splash";

import { NavigationContainer } from "@react-navigation/native";
import { handleBanner, handleBestBuys, handleCategories, handleFlashSell, handleProducts } from "../Redux/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import PrivacyPolicy from "../Screen/PrivacyPolicy";
import RefundPolicy from "../Screen/RefundPolicy";
import TermsAndCondition from "../Screen/TermsAndCondition";
import CreateGroup from "../Screen/CreateGroup";

const Stack1 = createNativeStackNavigator();

const Stack = () => {
  /*---------------------------------------------*/
  /*======== Fetch And Dispatch ===== */

  const dispatch = useDispatch();
  React.useEffect(() => {
    getProductsAndCategories();
  }, []);
  /*
   fetching products and category data
 */
  const getProductsAndCategories = async () => {
    try {
      // Store Product Data in Redux
      const products = await API.get('/products');
      dispatch(handleProducts(products.data));

    } catch (error) {
      // Throw error
      console.log('Stack/getProductsAndCategories', error.message);
    }
  }
  /*---------------------------------------------*/
  const isToken = useSelector(state => state.auth?.token);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [isToken])

  if (isLoading) {
    return <SplashScreen />
  }

  const AuthNavigator = () => {
    return (
      <Stack1.Navigator screenOptions=
        {{ headerShown: false }}>
        <Stack1.Screen name="First" component={First} />
        <Stack1.Screen name="Second" component={Second} />
        <Stack1.Screen name="LOgin" component={LOgin} />
        <Stack1.Screen name="Login1" component={Login1} />
      </Stack1.Navigator>
    )
  }

  const HomeStack = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${isToken}`,
      }
    }
    console.log(isToken);
    //? Fetch and store data respectively into Redux 
    React.useEffect(async () => {
      try {
        const banner = await API.get('campaign/filtered', headers)
        let bannerData = banner?.data?.campaigns[0]?.campaign_banners;
        dispatch(handleBanner(bannerData));
        
        const flashProduct = await API.get('flash-sale/filtered', headers)
        dispatch(handleFlashSell(flashProduct.data?.products));

        const bestBuys = await API.get('/best-buy/filtered', {
          headers: {
            Authorization: `Bearer ${isToken}`,
          },
        });
        dispatch(handleBestBuys(bestBuys.data));

        const get = await API.get(`/categories`);
        dispatch(handleCategories(get.data));

      } catch (error) {
        console.log('homeScreen/useEffect', error.message);
      }
    }, []);

    return (
      <Stack1.Navigator screenOptions=
        {{ headerShown: false }}>
        <Stack1.Screen name="Home" component={Home} />
        <Stack1.Screen name="MainPurchasing" component={MainPurchasing} />
        <Stack1.Screen name="CreateGroup" component={CreateGroup} />
        <Stack1.Screen name="Notification" component={Notification} />
        <Stack1.Screen name="FullIMageScreen" component={FullIMageScreen} />
        <Stack1.Screen name="Order" component={Order} />
        <Stack1.Screen name="ItemDetail" component={ItemDetail} />
        <Stack1.Screen name="Wishlist" component={Wishlist} />
        <Stack1.Screen name="HelpCenter" component={HelpCenter} />
        <Stack1.Screen name="Queries" component={Queries} />
        <Stack1.Screen name="Pay" component={Pay} />
        <Stack1.Screen name="Pay1" component={Pay1} />
        <Stack1.Screen name="Offer" component={Offer} />
        <Stack1.Screen name="Offer1" component={Offer1} />
        <Stack1.Screen name="Manage" component={Manage} />
        <Stack1.Screen name="Manage1" component={Manage1} />
        <Stack1.Screen name="Other" component={Other} />
        <Stack1.Screen name="Other1" component={Other1} />
        <Stack1.Screen name="Payment" component={Payment} />
        <Stack1.Screen name="YourEraningScreen" component={YourEraningScreen} />
        <Stack1.Screen name="Setting" component={Setting} />
        <Stack1.Screen
          name="ProfileDetailScreen"
          component={ProfileDetailScreen}
        />
        <Stack1.Screen name="Address" component={Address} />

        {/* x---------------------- x --------------------------x */}
        {/* 
         // !Note
          If user Logged In as a guest, while he/she will try to buy something 
          the below screens will help them to login as user.
        */}

        <Stack1.Screen name="LOgin" component={LOgin} />
        <Stack1.Screen name="Login1" component={Login1} />

        {/* x---------------------- x --------------------------x */}

        {/* Privacy Policy And Terms and Conditions */}
        <Stack1.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack1.Screen name="RefundPolicy" component={RefundPolicy} />
        <Stack1.Screen name="TermsAndConditions" component={TermsAndCondition} />


      </Stack1.Navigator>
    )
  }

  return (
    <NavigationContainer>
      {!isToken ? <AuthNavigator /> : <HomeStack />}
    </NavigationContainer>
  )
};

export default Stack;
