import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';
import { handleGroupBuyingCart, handleIndividualBuyingCart, handleJoiningGroup } from '../Redux/dataReducer';


const CartProductList = ({ cart, type, nav }) => {
    const [_cart, setCart] = React.useState(cart);
    const handleProductDelete = (index) => {
        let _delete = [..._cart];
        _delete.splice(index, 1);

        if (type === 1) alert('ind');
        else if (type === 2) alert('group');
        else if (type === 3) alert('join');
    }
    return (
        <View>
            {_cart?.map((item, index) => {
                let price = item?.product_price;
                let DISCOUNT_PER = Number(100 - (price * 100 / item?.mrp)).toFixed(0);
                console.log(typeof price, price, item?.selling_price, item?.group_price, type);
                return (
                    <View key={index}>
                        <View
                            style={{
                                backgroundColor: "#FFF8DA",
                                height: 139,
                                justifyContent: "center",
                            }}
                        >
                            <View
                                style={{
                                    width: "95%",
                                    alignSelf: "center",
                                    flexDirection: "row",
                                }}
                            >
                                <Image
                                    style={{ height: 114, width: 104, borderRadius: 8 }}
                                    source={{ uri: item?.title_image }}
                                />
                                <View style={{ marginLeft: 5 }}>
                                    <View style={{ flexDirection: "row", paddingRight: 40, marginLeft: 5 }}>
                                        <Text style={{ width: '80%' }}>{item?.name}</Text>
                                        <AntDesign name={'delete'} size={20} color={'#000'} onPress={() => handleProductDelete(index)} />
                                    </View>
                                    <View style={{ marginLeft: 5 }}>
                                        <Text>Free Delivery</Text>
                                        {item?.size && <Text>Size : {item?.size}</Text>}
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontWeight: "bold" }}>₹ {price}</Text>
                                            <View style={{ width: "3%" }} />
                                            {type === 2 && <Text style={{ textDecorationLine: "line-through" }}>
                                                ₹ {item?.mrp}
                                            </Text>}
                                            <View style={{ width: "3%" }} />
                                            <Text
                                                style={{
                                                    fontSize: 11,
                                                    color: "#FF0000",
                                                    marginTop: 2,
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {DISCOUNT_PER} % OFF
                                            </Text>
                                        </View>

                                        {/* <Text>Delivery by 22 Nov 2021</Text> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Selling Person */}
                        {/* <Text style={{ fontSize: 13, color: '#4A4A4A', margin: 10 }}>Sold by: Abhijit Das</Text> */}
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({})

export default CartProductList;
