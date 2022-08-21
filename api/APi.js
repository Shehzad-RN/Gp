import React, { useState } from "react";
import { View ,Text,Image} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
 const Api=()=>{
const [Data,setData]=useState('')
 const Product = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.groupick.in/api/v1/products/?category&seller&ordering=id&search",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setData (result.results))
        
      .catch(error => console.log("error", error));
  };
     React. useEffect(() => {
Product()
  }, []);



return(

    <SafeAreaView>

    <View  style={{width:'90%',alignSelf:'center'}}>
    <Text>vjhvbg</Text>
    <FlatList 
    data={Data}
    renderItem={({item})=>
    // console.log(ite)
    (
        <View>
            <Image style={{width:50,height:50}}
             source={{uri:item.title_image}}
            
            />
            </View>
    )     
    }
    
    
    />
</View>
    </SafeAreaView>
    )
 }
 export default Api;