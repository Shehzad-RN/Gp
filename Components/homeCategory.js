import React from 'react';
import { View, StyleSheet, Image, FlatList, Pressable, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const HomeCategory = ({nav}) => {
    const categories = useSelector(state => state.root.data?.categories?.slice(1, 17));
    const [sIndex, setSIndex] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = React.useState([]);
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
                    _titles.push({ name: element1?.name, icon: element1?.icon });
                } else {
                    let elementInfo = [element1?.name, { name: element1?.name, icon: element1?.icon }]
                    _categoriesToShow.push(elementInfo);
                    _titles.push({ name: element1?.name, icon: element1?.icon });
                }
            })
        };

        return [_titles, _categoriesToShow]
    }
    const handleSelection = (subcategories, index) => {
        try {
            const get = categoryTree(subcategories);
            setSelectedCategory(get);
            setSIndex(index);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <View>
            {
                !categories.length ? <ActivityIndicator color='#000' /> :
                    <View>
                        <View style={styles.category}>
                            <FlatList
                                data={categories}
                                contentContainerStyle={styles.categoryList}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                keyExtractor={(_, i) => i.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {item?.parent === null &&
                                                <Pressable style={[styles.parentCategory, sIndex === index && styles.circleBorder]}
                                                    onPress={() => handleSelection(item?.subcategories, index)}
                                                >
                                                    <Image
                                                        source={{ uri: item?.icon }}
                                                        style={styles.icon}
                                                    />
                                                    <Text style={styles.name}>{item?.name}</Text>
                                                </Pressable>
                                            }
                                        </React.Fragment>
                                    )
                                }}
                            />
                        </View>
                        {selectedCategory.length !== 0 &&
                            <View style={styles.subCtgCont}>
                                <ScrollView contentContainerStyle={styles.scrollbar}>
                                    {selectedCategory[0].slice(0, 7)?.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Pressable style={styles.sub_category} >
                                                    <Image
                                                        source={{ uri: item?.icon }}
                                                        style={styles.subCtgIcon}
                                                    />
                                                    <Text style={styles.name}>{item?.name}</Text>
                                                </Pressable>
                                                {index === 6 &&
                                                    <View style={styles.view_all}>
                                                        <Pressable style={styles.view_all_btn} onPress={() => nav.navigate('Category')} >
                                                            <Text style={styles.view_all_text}>View All</Text>
                                                        </Pressable>
                                                    </View>
                                                }
                                            </React.Fragment>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        }
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    category: {
        height: 100,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
        elevation: 5
    },
    categoryList: {
        padding: 10,
    },
    parentCategory: {
        alignItems: 'center',
        width: 70,
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 100
    },
    circleBorder: {
        width: 60,
        height: 60,
        padding: 1.2,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#112735'
    },
    name: {
        fontSize: 13,
        color: '#4A4A4A',
        textAlign: 'center'
    },
    subCtgCont: {
        height: 150,
        width: '100%',
        backgroundColor: '#fff',
        elevation: 3,
        paddingVertical: 10
    },
    scrollbar: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    subCtgIcon: {
        width: '70%',
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1
    },
    sub_category: {
        width: '25%',
        marginTop: 2,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    view_all: {
        width: '25%',
    },
    view_all_btn: {
        marginTop: 2,
        width: '75%',
        height: 50,
        backgroundColor: '#112735',
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    view_all_text: {
        color: '#FFC097',
        textAlign: 'center',
    }
})

export default HomeCategory;
