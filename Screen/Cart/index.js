import React from 'react';
import { View, StyleSheet, Text, ScrollView, Modal, TouchableOpacity, Pressable, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Progress bar
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

// Icons
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// components
import CartProductList from '../../Components/CartProductList';
import CartPriceDetail from '../../Components/CartPriceDetail';
import API from '../../api/_api';

import RazorpayCheckout from 'react-native-razorpay';
import LOGO from '../../Assets/icon.png';
import { handleOrdersInProcessing } from '../../Redux/dataReducer';

const CartPage = ({ navigation, route }) => {
    // get data from redux
    const isUser = useSelector(state => state?.auth.user);
    const individual_buying_cart = useSelector(state => state.root.data?.individual_buying_cart);
    const group_buying_cart = useSelector(state => state.root.data?.group_buying_cart);
    const group_joining_product = useSelector(state => state.root.data?.group_joining_product);
    const cart_type = useSelector(state => state.root.data?.cart_type);

    let cart = cart_type === 0 && [] || cart_type === 1 && individual_buying_cart || cart_type === 2 && [group_buying_cart] || cart_type === 3 && group_joining_product

    // getting userLog through which screen user jump into this screen
    const { userLog } = route.params;

    React.useEffect(() => {
        /* 
            * !userLog
            ? no condition will be check
            * userLog
            ? if user not logged in then jump to login page 
        */

        let userData = Object.keys(isUser).length !== 0;
        if (!userData && userLog) {
            navigation.navigate("Login1", { userLog })
        }
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
            {/* Header */}
            <CartHeader nav={navigation} />

            {cart?.length === 0 ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#4A4A4A' }}>No Product In Cart</Text>
                </View>
                :
                <>
                    {/* Progress bar */}
                    < Progressbar cart={cart} user={isUser} nav={navigation} type={cart_type} />
                </>
            }

        </View>
    );
}

const CartHeader = ({ nav }) => {
    return (
        <View style={headerStyles.cart_header}>
            <Octicons
                onPress={() => nav.goBack()}
                style={headerStyles.goBackIcon}
                name="chevron-left"
                size={30}
                color={"black"}
            />
            <Text style={headerStyles.header_text}>Cart</Text>
            <AntDesign
                onPress={() => nav.navigate('HomePage')}
                name="home"
                size={24}
                color="black"
            />
        </View>
    )
}

const Progressbar = ({ cart, user, nav, type }) => {
    let dispatch = useDispatch();

    const token = useSelector(state => state.auth?.token);

    const [visbleAddress, setVisbleAddress] = React.useState(false);
    const [addressData, setAddressData] = React.useState(null);

    const [_totalPrice, setTotalPrice] = React.useState(0);
    // Constants
    let DELIVERY_CHARGES = 0, SPECIAL_OFFER = 0;

    //? Total
    let TOTALPRICE = _totalPrice + DELIVERY_CHARGES + SPECIAL_OFFER;

    React.useEffect(() => {
        //? All products price calculation
        let price = 0;
        cart.forEach(element => {
            price += Number(element.product_price)
        });
        setTotalPrice(price);
    }, [cart]);

    //? RazorPay Method
    const handleRazorPayments = () => {
        let INR = TOTALPRICE * 100; // Convert to rupee
        if (user === '') {
            nav.navigate('LOgin', { userLog: true });
            return false
        }
        try {
            var options = {
                description: 'Online Payment',
                image: LOGO,
                currency: 'INR',
                key: 'rzp_live_glVHpLyDzGM6TD',
                amount: INR,
                name: 'Groupick',
                prefill: {
                    email: `${user?.mobile}@groupick.in`,
                    contact: user?.mobile,
                    name: user?.name
                },
                theme: { color: '#53a20e' }
            }
            RazorpayCheckout.open(options).then((data) => {
                // handle success
                alert('Order Successful');
                dispatch(handleOrdersInProcessing(cart))
                nav.navigate('Order')
            }).catch((error) => {
                // handle failure
                console.log(`Error: ${error.code} | ${error.description}`);
            });
        } catch (error) {
            console.log('Homepage/handleRazorPayments', error.message);
        }
    }

    const saveAdress = () => {
        if (addressData === null) {
            alert("Address can't be empty");
            return false
        }
        // Post Address
        try {
            API({
                url: 'https://api.groupick.in/api/v1/addresses/',
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    mobile: addressData?.phoneNumber,
                    street: addressData?.town,
                    city: addressData?.city,
                    state: addressData?.state,
                    country: addressData?.country,
                    pincode: addressData?.pinCode,
                    landmark: addressData?.landmark
                }
            }).then(res => console.log(res.data)).catch(error=> console.log(error.message))

        } catch (error) {
            alert('something went wrong check again')
        }
    }

    const postOrderDetail = () => {
        let whichType = type === 1 && 'individual' || type === 1 && 'group';
        try {
            API({
                url: 'https://api.groupick.in/api/v1/orders/initiate/',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    payment_mode: 'Online',
                    purchase_mode: whichType,
                    is_promoter: user?.id,
                    street: addressData?.town,
                    city: addressData?.city,
                    state: addressData?.state,
                    country: addressData?.country,
                    pincode: addressData?.pinCode,
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log("cart/index/postOrderDetail/catch",err))
        } catch (error){
            console.log("cart/index/postOrderDetail", error.message);
            alert('something went wrong check again, check product detail')
            return false
        }
    }

    const handlePayments = () => {
        // saveAdress();
        // handleRazorPayments();
        // dispatch(handleOrdersInProcessing(cart));
        postOrderDetail()
        // nav.navigate('Order')
    }

    return (
        <View style={styles.progressbar}>
            <ProgressSteps
                activeStepIconBorderColor={'#FF4D00'}
            >
                <ProgressStep label="Cart" total={TOTALPRICE}>
                    <ScrollView nestedScrollEnabled={true}>
                        <View style={styles.cart_section}>
                            {/* No of item & delete btn */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 5 }}>Item: {cart?.length}</Text>
                            </View>
                            <View>
                                {/* Cart Product List */}
                                <CartProductList cart={cart} type={type} nav={nav} />
                            </View>
                        </View>

                        {/* Price Detail */}
                        <CartPriceDetail price={[TOTALPRICE, _totalPrice, DELIVERY_CHARGES, SPECIAL_OFFER]} />
                        <View style={{ height: 50 }} />
                    </ScrollView>
                </ProgressStep>

                <ProgressStep label="Address" total={TOTALPRICE}>
                    <View style={styles.address_container}>
                        <Pressable
                            onPress={() => setVisbleAddress(true)}
                            style={{
                                backgroundColor: '#fff',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                position: 'relative'
                            }}>
                            <AntDesign name='plussquare' size={25} color={'#FF4D00'} />
                            <Text style={{ color: '#112735', fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Add Address</Text>
                            <Entypo
                                name='chevron-thin-right' size={25} color={'#BCBCBC'}
                                style={{
                                    position: 'absolute',
                                    right: 10
                                }}
                            />
                        </Pressable>

                        <View>
                            <Text style={{
                                color: '#112735',
                                fontSize: 16,
                                fontWeight: 'bold',
                                paddingHorizontal: 20,
                                paddingVertical: 10
                            }}>DEFAULT ADDRESS</Text>
                            <View style={styles.default_address}>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            textTransform: 'capitalize',
                                            color: "#5F5F5F",
                                            fontWeight: "bold",
                                            marginBottom: 10
                                        }}
                                    >{addressData?.name || user?.name}</Text>

                                    {addressData !== null && <>
                                        <Text>{addressData?.address}</Text>
                                        <Text>{addressData?.pinCode}</Text>
                                        <Text>{addressData?.town}</Text>
                                        <Text>{addressData?.landmark}</Text>
                                        <Text>{addressData?.city}</Text>
                                        <Text>{addressData?.state}</Text>
                                    </>}
                                    <Text
                                        style={{
                                            marginTop: 20
                                        }}
                                    >Mobile: +91 {addressData?.phoneNumber || user?.mobile}</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                                backgroundColor: '#fff',
                                marginTop: 5
                            }}>
                                <Pressable
                                    onPress={() => setVisbleAddress(true)}
                                    style={{
                                        width: '50%',
                                        height: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRightWidth: 2,
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text style={{
                                        color: '#FF4D00',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>Edit</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => setAddressData('')}
                                    style={{
                                        width: '50%',
                                        height: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text style={{
                                        color: '#FF4D00',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>Remove</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </ProgressStep>

                <ProgressStep label="Summary" total={TOTALPRICE} paymentMethod={handlePayments}>
                    <ScrollView nestedScrollEnabled={true}>
                        <View style={styles.cart_section}>
                            {/* No of item & delete btn */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 5 }}>Item: {cart?.length}</Text>
                                <AntDesign name={'delete'} size={20} color={'#000'} />
                            </View>
                            <View>
                                {/* Cart Product List */}
                                <CartProductList cart={cart} type={type} nav={nav} />
                            </View>
                        </View>

                        {/* Address */}
                        <View
                            style={{
                                width: "100%",
                                backgroundColor: "#fff",
                                height: 119,
                                marginTop: 10
                            }}
                        >
                            <View
                                style={{ width: "90%", alignSelf: "center", marginTop: 10 }}
                            >
                                <Text>{addressData?.name || user?.name}</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginTop: 15,
                                    }}
                                >
                                    <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
                                        {addressData?.address}, {addressData?.city} {"\n"} {addressData?.landmark}
                                        {addressData?.town} - {addressData?.pinCode}, {addressData?.state}, {"\n"} Mobile: {addressData?.phoneNumber}
                                    </Text>
                                    <TouchableOpacity onPress={() => setVisbleAddress(true)}>
                                        <SimpleLineIcons
                                            name="arrow-right"
                                            size={20}
                                            color={"black"}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        {/* Price Detail */}
                        <CartPriceDetail price={[TOTALPRICE, _totalPrice, DELIVERY_CHARGES, SPECIAL_OFFER]} />
                        <View style={{ height: 50 }} />
                    </ScrollView>
                </ProgressStep>

            </ProgressSteps>
            {visbleAddress && <AddressModal
                visbleAddress={visbleAddress}
                setVisbleAddress={setVisbleAddress}
                setAddressData={setAddressData}
            />}
        </View>
    )
}

const AddressModal = ({ visbleAddress, setVisbleAddress, setAddressData }) => {
    const [pinCode, setPinCode] = React.useState(0);
    const [address, setAddress] = React.useState('');
    const [town, setTown] = React.useState('');
    const [landmark, setLandmark] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');

    const [indexofModal, setindexofModal] = React.useState();
    const ModalData = ["Home", "Work", "Other"];

    const handleAddress = () => {
        let _address = {
            pinCode, address, town, landmark, city, state, saveAs: ModalData[indexofModal]
        }
        for (const key in _address) {
            if (_address[key] === '') {
                alert('Empty Field')
                return false
            }
        }
        setAddressData(_address);
        setVisbleAddress(false);
    }

    return (
        <Modal
            // Moda
            visible={visbleAddress}
            animationType="slide"
            onRequestClose={() => console.log("no warning")}
            transparent
        >
            <ScrollView>
                <View
                    style={{
                        marginTop: 100,
                        backgroundColor: "#fff",
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        width: "90%",
                        alignSelf: "center",
                        marginVertical: 10,
                        paddingVertical: 20
                    }}
                >
                    <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
                            ADD NEW ADDRESS
                        </Text>

                        {/* ADDRESS */}
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "600",
                                color: "#181818",
                                marginTop: 10,
                            }}
                        >
                            ADDRESS
                        </Text>
                        <View
                            style={{
                                marginTop: 5,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    width: 140,
                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Pin Code*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setPinCode}
                                />
                            </View>
                            <View
                                style={{
                                    width: 140,
                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Address*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setAddress}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                marginTop: 8,
                                flexDirection: "row",
                                // justifyContent: "space-evenly",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    // height: 44,
                                    width: 140,
                                    // borderWidth: 1,
                                    // borderRadius: 5,

                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Locality/Town*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setTown}
                                />
                            </View>
                            <View
                                style={{
                                    // height: 44,
                                    width: 140,
                                    // borderWidth: 1,
                                    // borderRadius: 5,

                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Landmark*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setLandmark}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                marginTop: 8,
                                flexDirection: "row",
                                // justifyContent: "space-evenly",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    // height: 44,
                                    width: 140,
                                    // borderWidth: 1,
                                    // borderRadius: 5,

                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='City/Distict*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setCity}
                                />
                            </View>
                            <View
                                style={{
                                    width: 140,
                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='State*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setState}
                                />
                            </View>
                        </View>
                        <Text
                            style={{
                                marginTop: 15,
                                color: "#181818",
                                fontSize: 13,
                                fontWeight: "600",
                            }}
                        >
                            SAVE ADDRESS AS
                        </Text>

                        <Pressable
                            onPress={handleAddress}
                            style={{
                                backgroundColor: '#FF4D00',
                                borderRadius: 5,
                                height: 50,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}
                        >
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 18
                            }}>ADD ADDRESS</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    progressbar: {
        flex: 1,
    },

    // Cart Section
    cart_section: {
        backgroundColor: '#fff',
        paddingVertical: 5
    },

    // Address Section
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        fontSize: 14,
        color: "#333",
        height: 44,
        marginTop: 14
    },
    default_address: {
        backgroundColor: '#fff',
        marginTop: 5,
        padding: 15
    }
})

const headerStyles = StyleSheet.create({
    cart_header: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    goBackIcon: {
        backgroundColor: '#F6F6F6',
        height: 42,
        width: 44,
        borderRadius: 13,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    header_text: {
        color: '#112735',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default CartPage;


// Name and phone
/**
 *  <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "600",
                                color: "#181818",
                                marginTop: 20,
                            }}
                        >
                            CONTACT DETAILS
                        </Text>
                        <View
                            style={{
                                marginTop: 8,
                                flexDirection: "row",
                                // justifyContent: "space-evenly",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    // height: 44,
                                    width: 140,
                                    // borderWidth: 1,
                                    // borderRadius: 5,

                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Name*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setName}
                                />
                            </View>
                            <View
                                style={{
                                    // height: 44,
                                    width: 140,
                                    // borderWidth: 1,
                                    // borderRadius: 5,

                                    justifyContent: "center",
                                    borderColor: "#C4C4C4",
                                    marginTop: -10,
                                }}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Phone no*'
                                    placeholderTextColor={'#333'}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>
                        
                        
                         <FlatList
                            data={ModalData}
                            keyExtractor={(_, i) => i.toString()}
                            horizontal
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        marginTop: 10,
                                        width: 81,
                                        height: 31,
                                        borderWidth: 1,
                                        marginLeft: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderColor:
                                            indexofModal == index ? "#FF6F32" : "#C4C4C4",
                                    }}
                                >
                                    <TouchableOpacity onPress={() => setindexofModal(index)}>
                                        <Text
                                            style={{
                                                color: indexofModal == index ? "#FF6F32" : "#C4C4C4",
                                            }}
                                        >
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                        */ 