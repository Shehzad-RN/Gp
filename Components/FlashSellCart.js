import React from 'react';
import { FlatList } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const FlashSellCart = () => {
    const product = useSelector(state => state.root.data?.flash_sell)[0];
    let isEmpty = product?.length !== 0;
    return (
        <View>
            <FlatList
                data={product}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) => {
                    let DISCOUNT_PER = Number(100 - (item?.flash_sale_price * 100 / item?.mrp)).toFixed(0);
                    let imageUri = item?.images[0].file;
                    console.log(imageUri);
                    return (
                        <View style={styles.main}>
                            <Image
                                source={isEmpty ? { uri: `https://api.groupick.in/api/v1/${imageUri}` } : require('../Assets/splash.png')}
                                style={styles.productImage}
                            />
                            <View style={styles.info}>
                                <Text style={styles.title}>{item?.brand}</Text>
                                <View style={styles.pricing}>
                                    <Text style={styles.mrp}>₹ {item?.mrp}</Text>
                                    <Text style={styles.price}>₹ {item?.flash_sale_price}</Text>
                                    <Text style={styles.discount}>{DISCOUNT_PER}% Off</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 216,
        width: 183,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 9,
        margin: 10,
        justifyContent: 'space-around'
    },
    productImage: {
        width: 181,
        height: 160,
        resizeMode: 'cover',
        borderTopRightRadius: 9,
        borderTopLeftRadius: 9,
    },
    info: {
        backgroundColor: "#112735",
        height: 56,
        padding: 10,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 9,
    },
    title: {
        color: "#C7C7C7",
        fontSize: 11
    },
    pricing: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mrp: {
        fontSize: 13,
        color: "#C7C7C7",
        marginRight: 5,
        textDecorationLine: "line-through",
    },
    price: {
        fontSize: 13,
        color: "#FFFFFF",
        marginRight: 10
    },
    discount: {
        fontSize: 9,
        color: "#FF6E6E"
    }
})

export default FlashSellCart;
