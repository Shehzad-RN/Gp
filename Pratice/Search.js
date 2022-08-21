import React, { useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function App() {
  const dataList = useSelector(state => state.counter.data);
  console.log(dataList);

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = value => {
    // console.log(value);
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        console.log(Object.keys(item));
        return Object.keys(item).some(key =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <SafeAreaView>
      <View>
        {/* <a href="https://www.cluemediator.com">Clue Mediator</a> */}

        <TextInput
          style={{ marginLeft: 5 }}
          //   type="text"
          placeholder="Type to search..."
          value={searchText}
          //   onChange={value => handleChange(value)}
          onChangeText={value => handleChange(value)}
        />
        <View className="box-container">
          <FlatList
            data={data}
            renderItem={({ item, i }) => (
              <View
                key={i}
                // className="box"
                style={{ backgroundColor: item.color }}
              >
                <Text>Name:{item.name} </Text>
                <Text>Year:{item.year} </Text>
                {/*  */}
                {/* <br /> */}
                {/* <b>Year: </b> */}
                {/* {d.year} */}
                {/* <br /> */}
                <Text>Color:{item.color} </Text>
                {/* */}
                {/* <br /> */}
                {/* <b>Pantone value: </b> */}
                {/* {d.pantone_value} */}
              </View>
            )}
          />
          <View className="clearboth"></View>
          {data.length === 0 && <Text>No records found to display!</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
