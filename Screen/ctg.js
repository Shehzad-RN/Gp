import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Pressable
} from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';

const Category = () => {
    const categories = useSelector(state => state.root.data?.categories?.slice(1, 17));

    const [selectedId, setSelectedId] = React.useState(1);
    const [subCtg, setSubCtg] = React.useState([]);

    React.useEffect(async () => {
        try {
            const get = categoryTree(categories[0]?.subcategories);
            setSubCtg(get)
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const handleSelection = (id, subcategories) => {
        setSelectedId(id);
        try {
            const get = categoryTree(subcategories);
            setSubCtg(get);
        } catch (error) {
            console.log(error.message);
        }
    }

    const categoryTree = (subcategories) => {
        let _categoriesToShow = [];
        let _titles = [];
        if (subcategories.length !== 0) {
            // 1st Level
            subcategories.forEach(element1 => {
                // If length found then it will move on to check more its nested subcategory
                if (element1.subcategories.length !== 0) {
                    // 2nd level
                    element1.subcategories.forEach(element2 => {
                        if (element2.subcategories.length !== 0) {
                            // 3rd Level
                            let ele2 = element2.subcategories.slice(-2); // get last two child
                            ele2.forEach(element3 => {
                                if (element3.subcategories.length !== 0) {
                                   ele2.forEach(element4 => {
                                        if (element4.subcategories.length !== 0) {
                                            let elementInfo = [element1?.name, { name: element4?.name, icon: element4?.icon }]
                                            _categoriesToShow.push(elementInfo);
                                        } else {
                                            let elementInfo = [element1?.name, { name: element4?.name, icon: element4?.icon }]
                                            _categoriesToShow.push(elementInfo);
                                        }
                                    })
                                } else {
                                    let elementInfo = [element1?.name, { name: element3?.name, icon: element3?.icon }]
                                    _categoriesToShow.push(elementInfo);
                                }
                            });
                        } else {
                            let elementInfo = [element1?.name, { name: element2?.name, icon: element2?.icon }]
                            _categoriesToShow.push(elementInfo);
                        }
                    });
                    _titles.push(element1?.name);
                } else {
                    let elementInfo = [element1?.name, { name: element1?.name, icon: element1?.icon }]
                    _categoriesToShow.push(elementInfo);
                    _titles.push(element1?.name);
                }
            })
        };

        return [_titles, _categoriesToShow]
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Searchbar */}
            <View style={{ backgroundColor: "#fff" }}>
                <View
                    style={{
                        borderWidth: 1,
                        justifyContent: "center",
                        borderRadius: 40,
                        width: "90%",
                        alignSelf: "center",
                        backgroundColor: "#EDEDED",
                        marginBottom: 10,
                        borderColor: "#EDEDED",
                        height: 40,
                    }}
                >
                    <TextInput
                        style={{ marginLeft: 18 }}
                        placeholder="Search by product, brand & more..."
                    />
                </View>
            </View>
            {categories.length === 0 ?
                <ActivityIndicator color='#000' flex={1} />
                :
                <View style={styles.categories}>

                    {/* Parent Category List */}
                    <ScrollView style={styles.parentCategory} >
                        {categories?.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {/* hasParent equal to null */}
                                    {item?.parent === null &&
                                        <Pressable
                                            style={[styles.parentCategoryText, {
                                                backgroundColor: item?.id === selectedId ? '#fff' : 'transparent'
                                            }]}
                                            onPress={() => handleSelection(item?.id, item?.subcategories)}>
                                            <Text>{item?.name}</Text>
                                        </Pressable>
                                    }
                                </React.Fragment>
                            )
                        })}
                    </ScrollView>
                    {/* Sub Category And Their Child Category List */}
                    <ScrollView style={styles.childCategory}>
                        {subCtg[0]?.map((item, index) => {
                            return (
                                <View key={index} style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                                    <Pressable >
                                        <Text style={{ fontSize: 12, margin: 10 }}>{item}</Text>
                                    </Pressable>
                                    <View style={styles.subcategories}>
                                        {subCtg[1]?.map((subItem, subIndex) => {
                                            return (
                                                <React.Fragment key={subIndex}>
                                                    {/* check if category matched */}
                                                    {subItem[0] === item &&
                                                        <Pressable style={styles.subItem}>
                                                            <Image
                                                                style={styles.subItemIcon}
                                                                source={{ uri: subItem[1]?.icon }}
                                                            />
                                                            <Text style={{ fontSize: 12, textAlign: 'center' }}>{subItem[1]?.name}</Text>
                                                        </Pressable>
                                                    }
                                                </React.Fragment>
                                            )
                                        })}
                                    </View>
                                </View>
                            )
                        })}


                    </ScrollView>
                </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    categories: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    parentCategory: {
        width: '35%'
    },
    childCategory: {
        width: '65%',
        backgroundColor: '#fff',
    },

    parentCategoryText: {
        minHeight: 30,
        alignSelf: "center",
        width: "100%",
        marginTop: 10,
        marginLeft: 10,
    },
    subcategories: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    subItem: {
        width: 70,
        padding: 5,
        alignItems: 'center'
    },
    subItemIcon: {
        width: 50,
        height: 50,
        marginBottom: 5
    }
})

export default Category;
