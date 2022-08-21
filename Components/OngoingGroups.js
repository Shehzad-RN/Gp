import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity, Modal } from 'react-native';

// Vector Icon
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const OngoingGroups = ({ user, GROUP, PRODUCT_ID, setJoinGroup, join_group, OpenPurching, show, setGroupId }) => {
    const [__group, setGroup] = useState([]);

    let USER_ICON = GROUP?.image ? { uri: GROUP?.image } : require('../Assets/IMages/GropIMage/group_detail.png')
    const handleGroupSeletion = (id, own) => {
        if (!own) {
            setJoinGroup(!join_group);
            setGroupId(id);
        }
    }
    useEffect(() => {
        let _groups = [];
        GROUP?.forEach(element => {
            if (element?.product?.id === PRODUCT_ID) {
                let isMatch = element.user.id === user?.id;
                element["own"] = isMatch;
                _groups.push(element);
            }
        });
        setGroup(_groups);
    }, []);

    return (
        <>
            {__group?.length !== 0 &&
                <View
                    style={{
                        paddingVertical: 10,
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            borderColor: "lightgrey",
                            borderWidth: 1,
                            borderRadius: 10,
                            width: "90%",
                            padding: 12,
                            paddingTop: 8,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                }}
                            >
                                Ongoing Groups ({__group?.length})
                            </Text>

                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    // width: 1,
                                }}
                                onPress={show}
                            >
                                <Text
                                    style={{
                                        fontSize: 13,
                                        color: "grey",
                                    }}
                                >
                                    View All
                                </Text>
                                <Ionicons
                                    style={{
                                        // fontSize: 14,
                                        color: "grey",
                                    }}
                                    name="ios-arrow-forward-circle"
                                    size={19}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 12,
                                color: "#FF6600",
                                marginBottom: 10
                            }}
                        >
                            You can join group and buy this item
                        </Text>

                        <View>
                            <FlatList
                                data={__group.slice(0, 2)}
                                key={(_, i) => i.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: 'space-between',
                                                alignItems: "center",
                                                height: 50,
                                            }}
                                        >

                                            {/* Image and Name */}
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}>
                                                <Image
                                                    source={USER_ICON}
                                                    style={styles.user_icon}
                                                />
                                                <Text style={{ fontSize: 11, color: "grey", marginLeft: 2 }}>
                                                    {item?.name}
                                                </Text>
                                            </View>

                                            {/* Members and Button */}
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}>
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 13,
                                                        }}
                                                    >
                                                        1/2 members
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 11,
                                                            color: "grey",
                                                        }}
                                                    >
                                                        Time:
                                                        {item.time}
                                                    </Text>
                                                </View>
                                                <TouchableOpacity onPress={() => handleGroupSeletion(item?.id, item?.own)}>
                                                    <View
                                                        style={{
                                                            height: 38,
                                                            width: 65,
                                                            borderRadius: 12,
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderWidth: 1,
                                                            borderColor: '#112735',
                                                            backgroundColor: item?.own ? "transparent" : "#112735",
                                                        }}
                                                    >
                                                        <Text
                                                            style={{
                                                                color: item?.own ? "#000" : "white",
                                                            }}
                                                        >
                                                            {item?.own ? 'Me' : 'Join'}
                                                        </Text>
                                                    </View>
                                                    <JoinGroupModal
                                                        data={item}
                                                        join_group={join_group}
                                                        OpenPurching={OpenPurching}
                                                        userImg={USER_ICON}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </View>}
        </>
    );
}

const JoinGroupModal = ({ data, userImg, join_group, OpenPurching }) => {
    const hndleOpenPurchasing = () => {
        OpenPurching({ data, userImg });
    }
    return (
        <Modal visible={join_group} transparent>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22,
                }}
            >
                <View
                    style={{
                        margin: 10,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: "90%",
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        height: 200,
                        width: 302,
                    }}
                >
                    <Text>{data?.name}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "90%",
                            marginTop: 10,
                        }}
                    >
                        <Text>1/2 Members</Text>
                        <Text style={{ color: "#FF4D00" }}>Time: 08: 45: 17</Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: "row" }}>
                        <Image style={styles.user_icon} source={userImg} />
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                alignItems: "center",
                                borderWidth: 1,
                                justifyContent: "center",
                                marginLeft: 10,
                                borderRadius: 25,
                                borderColor: "#BFBFBF",
                            }}
                        >
                            <AntDesign name="question" size={24} color="#BFBFBF" />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            width: "90%",
                            height: 38,
                            alignSelf: "center",
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 10,
                            backgroundColor: "#112735",
                            borderColor: "#112735",
                            borderRadius: 20,
                        }}
                        onPress={hndleOpenPurchasing}
                    >
                        <View>
                            <Text style={{ color: "#fff", fontSize: 15 }}>Join</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    user_icon: {
        width: 53,
        height: 53,
        borderWidth: 1,
    }

})

export default OngoingGroups;
