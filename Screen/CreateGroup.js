import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, Pressable, ScrollView } from 'react-native';
import LOGO from '../Assets/icon.png';

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign1 from "react-native-vector-icons/AntDesign";

import API from '../api/_api';
import { useDispatch, useSelector } from 'react-redux';
import { handleCartType, handleGroupBuyingCart } from '../Redux/dataReducer';
import CartPriceDetail from '../Components/CartPriceDetail';
import CartProductList from '../Components/CartProductList';

const CreateGroup = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const authToken = useSelector(state => state.auth?.token);
    const isUser = useSelector(state => state?.auth.user);
    const cart_type = useSelector(state => state.root.data?.cart_type);

    React.useEffect(() => {
        if (!isUser) {
            navigation.navigate("Login1", { userLog: true })
        }
    }, []);


    // State holds group info
    const [groupName, setGroupName] = React.useState('');
    const [groupDescription, setGroupDescription] = React.useState('');

    // Destructured product detail from params 
    const { productToBuy: detail, user } = route.params;

    //? Taxs
    const PRODUCT_CHARGES = detail?.product_price;
    const DELIVERY_CHARGES = 0;
    const SPECIAL_OFFER = 0;

    //? Total price
    const TOTALPRICE = PRODUCT_CHARGES + DELIVERY_CHARGES + SPECIAL_OFFER;

    // Just to fullfill product detail price component's param
    let _totalPrice = PRODUCT_CHARGES;

    const handleFormSubmit = () => {
        try {
            let isEmptyValue = groupName === '' || groupDescription === '';
            if (isEmptyValue) {
                alert('please fill empty field');
                return false
            }

            API({
                method: 'post',
                url: 'https://api.groupick.in/api/v1/groups/add',
                headers: { Authorization: `Bearer ${authToken}` },
                data: {
                    name: groupName,
                    description: groupDescription,
                    product_id: detail?.id,
                    user_id: isUser?.id
                }
            }).then(response => {
                // Store group product data into redux
                dispatch(handleGroupBuyingCart(detail));

                navigation.navigate('Cart', { userLog: false })
            }).catch(e => alert(e.message))


        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <ScrollView>
            <Pressable style={styles.header_create_group} onPress={()=> navigation.goBack()}>
                <Text style={styles.header_create_group_text}>X</Text>
            </Pressable>
            {/* Product List */}
            <CartProductList cart={[detail]} type={cart_type} nav={navigation} />

            {/* Price Detail */}
            <CartPriceDetail price={[TOTALPRICE, _totalPrice, DELIVERY_CHARGES, SPECIAL_OFFER]} />

            {/* Create Group Form */}
            <View style={styles.CreateGroupForm}>
                <Text style={styles.title}>Create Group</Text>
                <TextInput
                    style={styles.inputName}
                    placeholder='Enter Group Name'
                    value={groupName}
                    onChangeText={setGroupName}
                />
                <TextInput
                    style={styles.inputMessage}
                    placeholder='Write a message'
                    value={groupDescription}
                    onChangeText={setGroupDescription}
                />
                <Pressable style={styles.doneBtn} onPress={handleFormSubmit}>
                    <Text style={styles.btnText}>DONE</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    CreateGroupForm: {
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 5,
        padding: 20,
    },
    title: {
        fontSize: 18,
        color: '#000',
        marginVertical: 10
    },
    inputName: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#949494',
        borderRadius: 12,
        padding: 12
    },
    inputMessage: {
        height: 80,
        width: '100%',
        borderWidth: 1,
        borderColor: '#949494',
        borderRadius: 12,
        padding: 12,
        marginTop: 10
    },
    doneBtn: {
        backgroundColor: '#FF4D00',
        borderRadius: 33,
        width: 150,
        height: 40,
        elevation: 10,
        shadowColor: '#FF4D00',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    header_create_group: {
        height: 30,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    header_create_group_text: {
        alignSelf: 'flex-end',
        marginRight: 10,
        fontSize: 20
    }
})

export default CreateGroup;
