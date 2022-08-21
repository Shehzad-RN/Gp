import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import { Entypo } from 
"@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import LargeBtn from "../Components/LargeBtn";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {useSelector} from 'react-redux'
const Address = (navigation) => {
  const Token = useSelector(state => state.counter.token);
  const username2=useSelector(state=>state.counter.username)
  const phonen2=useSelector(state=>state.counter.phoneNumber)
  
  const [visbleAddress, setvisbleAddress] = useState(false);
  const [indexofModal, setindexofModal] = useState();
  const ModalData = ["Home", "Work", "Other"];
  const [Phone, SetPhoneNumber] = useState("");
  const [username, SetUserName] = useState("");
  const [Pin, SetPinCode] = useState("");
  const [street, setstreet] = useState("");
  const [Country, setCountry] = useState("");
  const [landmark, setlandmark] = useState("");
  const [addresses, SetAddress] = useState("");
  const [State, SetState] = useState();

  const updateAddress = () => {

    var formdata = new FormData();
  
    formdata.append("street",street);
    formdata.append("city", Country);
    formdata.append("mobile", Phone);
    formdata.append("state", State);
    formdata.append("country", "India");
    formdata.append("pincode", Pin);
    formdata.append("landmark", landmark);

    var requestOptions = {
      method: "Post",
      body: formdata,
      redirect: "follow",
          headers: {
         
          'Authorization': 'Bearer ' +Token,
          
        }
   
    };

    fetch("https://groupick.lyteinfotech.com/api/v1/addresses/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  };

  const onchangeName = val => {
    SetUserName(val);
  };
  const onchangePhone = val => {
    SetPhoneNumber(val);
  };
  const onchangePin = val => {
    SetPinCode(val);
  };
  const Address = val => {
    SetAddress(val);
  };
  const Locality = val => {
    setstreet(val);
  };
  const Landmark = val => {
    setlandmark(val);
  };
  const City = val => {
    setCountry(val);
  };
  const Statee = val => {
    SetState(val);
  };

  const ClickAddAddress = () => {
  
    if (username.toString().toLowerCase() == 0) {
      alert("please enter username");
      return;
    }
    else if (Phone.toString().toLowerCase() == 0) {
      alert("Please enter Phone Number");
      return;
    } else if (Pin.toString().toLowerCase() == 0) {
      alert("please enter Pin");
      return;
    } else if (Address.toString().toLowerCase() == 0) {
      alert("Please enter Address");
      return;
    } else if (street.toString().toLowerCase() == 0) {
      alert("Please enter street");
      return;
    } else if (Landmark.toString().toLowerCase() == 0) {
      alert("Please enter Landmark");
      return;
    } else if (Country.toString().toLowerCase() == 0) {
      alert("Please enter Country");
      return;
    } else if (State.toString().toLowerCase() == 0) {
      alert("Please enter State");
      return;
    } else {
      updateAddress();
      setvisbleAddress(false);
   
    }
  };

  
React.useEffect(()=>{
console.log(username2);
},[])
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={{ width: "100%", backgroundColor: "#fff" }}>
        <View
          style={{
            width: "94%",

            alignSelf: "center",
            height: 47,
            // justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => props.navigation.pop()}
            >
              <Entypo name="arrow-long-left" size={24} color="black" />

              <Text
                style={{
                  fontSize: 13,
                  marginTop: 2,
                  marginLeft: 5,
                  color: "#838383",
                  fontSize: 13,
                }}
              >
                ADDRESS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            backgroundColor: "#fff",
          }}
        >
          <View style={{ height: 40 }}>
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
                // justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", width: "100%" }}
                onPress={() => setvisbleAddress(true)}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: "#FF4D00",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      justifyContent: "center",
                      alignSelf: "center",
                      marginTop: "-25%",
                      color: "#fff",
                      // justifyContent: "center",
                    }}
                  >
                    +
                  </Text>
                </View>

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    justifyContent: "center",
                    marginTop: -3.9,
                    marginLeft: 5,
                  }}
                >
                  Add Address
                </Text>
                <View style={{ width: "55%" }} />
                <SimpleLineIcons name="arrow-right" size={23} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 70,
            // backgroundColor: "pink",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#112735" }}>
              DAFULT ADDRESS
            </Text>
          </View>
        </View>
        <View style={{ height: 237.5, width: "100%", backgroundColor: "#fff" }}>
          <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
            <Text
              style={{ fontSize: 14, color: "#5F5F5F", fontWeight: "bold" }}
            >
             {username?username:username2}
            </Text>
            <Text style={{ fontSize: 14, color: "#A9A9A9", marginTop: 15 }}>
              Poultry farm road Tezpur
            </Text>
            <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
              Kalibari (Sonitpur)
            </Text>
            <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
              Sonitpur - 784001
            </Text>
            <Text style={{ fontSize: 14, color: "#A9A9A9" }}>Assam</Text>
            <Text style={{ fontSize: 14, color: "#A9A9A9", marginTop: 20 }}>
              Mobile:{Phone?Phone: phonen2}
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              borderBottomWidth: 2,
              borderColor: "#CECECE",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              // alignItems: "center",
              // justifyContent: "center",

              height: 50,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#FF4D00" }}>EDIT</Text>
            </TouchableOpacity>
            <View
              style={{ borderEndWidth: 2, height: 30, borderColor: "#CECECE" }}
            />
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#FF4D00" }}>REMOVE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 2, borderColor: "#CECECE" }} />
        </View>
      </ScrollView>
      <Modal
        // Moda
        visible={visbleAddress}
        animationType="slide"
        onRequestClose={() => console.log("no warning")}
        presentationStyle="FormSheet"
        transparent
      >
        <ScrollView style={{ height: 790 }}>
          <View
            style={{
              marginTop: 110,
              backgroundColor: "white",
              borderRadius: 20,

              shadowColor: "#000",

              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,

              width: "90%",
              // height: 670,
              alignSelf: "center",
            }}
          >
            <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
                ADD NEW ADDRESS
              </Text>
              <Text
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
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="Name*"
                    onChangeText={val => onchangeName(val)}
                  />
                </View>
                <View
                  style={{
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="Phone no*"
                    keyboardType="numeric"
                    onChangeText={val => onchangePhone(val)}
                  />
                </View>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: "#181818",
                  marginTop: 20,
                }}
              >
                ADDRESS
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
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="Pin Code*"
                    keyboardType="numeric"
                    onChangeText={val => onchangePin(val)}
                  />
                </View>
                <View
                  style={{
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="Address*"
                    // keyboardType="numeric"
                    onChangeText={val => Address(val)}
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
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="Locality/Town*"
                    onChangeText={val => Locality(val)}
                  />
                </View>
                <View
                  style={{
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="Landmark*"
                    keyboardType="numeric"
                    onChangeText={val => Landmark(val)}
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
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,

                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="City/District*"
                    onChangeText={val => City(val)}
                  />
                </View>
                <View
                  style={{
                    height: 44,
                    width: 140,
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: "center",
                    borderColor: "#C4C4C4",
                  }}
                >
                  <TextInput
                    style={{ marginLeft: 5 }}
                    placeholder="State*"
                    keyboardType="numeric"
                    onChangeText={val => Statee(val)}
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
              <FlatList
                data={ModalData}
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
              <LargeBtn
                buttonTitle={"ADD ADDRESS"}
                Bakbround={"#FF4D00"}
                txtcolor={"#fff"}
                borderc="#FF4D00"
                onPress={() => ClickAddAddress()}
              />
              <View style={{ marginTop: 10 }} />
            </View>
          </View>
          <View style={{ height: 4, marginTop: 5 }} />
        </ScrollView>
      </Modal>
    </View>
  );
};

export default Address;
