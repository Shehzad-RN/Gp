import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Switch,
  Image,
  textinput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import CountryCode from "../Components/CountryCode";
import * as ImagePicker from "expo-image-picker";
import LargeBtn from "../Components/LargeBtn";
import { useDispatch } from "react-redux";
import { setHinitName } from "../Redux/counterSlice";
const ProfileDetailScreen = props => {
  const [Uploading, setUploading] = useState("");
  const imageData = useSelector(state => state.counter.PerfileIMage);
  const email = useSelector(state => state.counter.email);
  const Gender = useSelector(state => state.counter.Gender);
  const BirthDay = useSelector(state => state.counter.BirthDay);
  const Address = useSelector(state => state.counter.Address);
  const phoneNumber = useSelector(state => state.counter.phoneNumber);
  const HinitName = useSelector(state => state.counter.HinitName);
  // const [imageupload, setimageupload] = useState(true);
  const [usernamelabel, setUsernamelabel] = useState();
  const [HintName, setHintName] = useState();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setUploading(result.uri);

    if (!result.cancelled) {
      useDispatch(setProfileIMage(result.uri));
      setUploading(result.uri);
    }
  };
  const onchangeHint = val => {
    useDispatch(setHinitName(val));
    setHintName(val);
  };

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
                PROFILE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            height: 238,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => pickImage()}>
            {Uploading ? (
              <Image
                style={{ height: 188, width: 180 }}
                source={{ uri: Uploading }}
              />
            ) : (
              <Image
                style={{ height: 188, width: 180 }}
                source={
                  imageData
                    ? { uri: imageData }
                    : require("../Assets/IMages/Profile.png")
                }
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ width: "95%", alignSelf: "center" }}>
          <TextInput
            label={"Mobile Numbers"}
            mode="outlined"
            value={phoneNumber}
          />
          <TextInput
            style={{ marginTop: 8 }}
            label={"Full Name"}
            mode="outlined"
            value={"Rahul"}
          />
          <TextInput
            style={{ marginTop: 8 }}
            label={"Email"}
            mode="outlined"
            value={email}
          />
          <View
            style={{
              height: 47,
              borderWidth: 1,
              marginTop: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderColor: "#AEAEAE",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: Gender == "Female" ? "black" : "#AEAEAE",
                }}
              >
                Female
              </Text>
            </TouchableOpacity>
            <View
              style={{ borderEndWidth: 1, height: 46, borderColor: "#AEAEAE" }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: Gender == "Male" ? "black" : "#AEAEAE",
                }}
              >
                Male
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={{ marginTop: 8 }}
            label={"BirthDay"}
            mode="outlined"
            value={BirthDay}
          />
          <TextInput
            style={{ marginTop: 8 }}
            label={"Address"}
            mode="outlined"
            value={Address}
          />
          <Text style={{ marginTop: 8 }}>
            Alternative mobile number details
          </Text>
          <View style={{ marginTop: 10 }}>
            <CountryCode />
            <View style={{ width: "80%", alignSelf: "center", marginTop: 5 }}>
              <Text>The will help recover your account if needed</Text>
            </View>
          </View>
          <TextInput
            style={{ marginTop: 8 }}
            label={"Hint name"}
            mode="outlined"
            value={HinitName}
            onChangeText={val => onchangeHint(val)}
          />
          <View style={{ width: "80%", alignSelf: "center", marginTop: 5 }}>
            <Text>The will help recover your account if needed</Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                marginTop: 15,
                height: 47,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#122736" }}>
                CHANGE PASSWORD
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{ width: "95%", alignSelf: "center" }}
        onPress={() => props.navigation.pop()}
      >
        <View
          style={{
            borderWidth: 1,
            marginTop: 15,
            height: 54,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF4400",
            borderColor: "#FF4400",
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff" }}>SAVE DETAILS</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }} />
    </View>
  );
};

export default ProfileDetailScreen;
