import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Icon
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartPriceDetail = ({ price }) => {
    const [TOTALPRICE, _totalPrice, DELIVERY_CHARGES, SPECIAL_OFFER] = price
    return (
        <View style={styles.price_detail_container}>
            <Text style={{ color: '#343434', fontSize: 16, fontWeight: 'bold' }}>Price Details</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={{ color: '#737373', fontSize: 15 }}>Product Charges</Text>
                <Text style={{ color: '#343434', fontSize: 15, fontWeight: 'bold' }}>₹ {_totalPrice}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={{ color: '#737373', fontSize: 15 }}>Delivery Charges</Text>
                <Text style={{ color: '#343434', fontSize: 15, fontWeight: 'bold' }}>₹ {DELIVERY_CHARGES}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 2 }}>
                <Text style={{ color: '#737373', fontSize: 15 }}>Special Offer <Ionicons name='information-circle-outline' size={16} color={'#343434'} /></Text>
                <Text style={{ color: '#343434', fontSize: 15, fontWeight: 'bold' }}>₹ {SPECIAL_OFFER}</Text>
            </View>

            {/* divider */}
            <View style={{ height: 1.5, backgroundColor: '#D6D6D6', marginVertical: 5, marginHorizontal: 5}} />
           
            {/* Total */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={{ color: '#343434', fontSize: 16, fontWeight: 'bold' }}>Order Total</Text>
                <Text style={{ color: '#343434', fontSize: 16, fontWeight: 'bold' }}>₹ {TOTALPRICE}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    price_detail_container: {
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 15,
    }
})

export default CartPriceDetail;
