import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CountryPicker from "react-native-country-picker-modal";
import { useSelector } from "react-redux";
const CountryCode = () => {
  const phoneNumber = useSelector(state => state.counter.phoneNumber);

  const [Country, setCountry] = useState({
    callingCode: ["92"],
    cca2: "PK",
    currency: ["PKR"],
    flag: "flag-pk",
    name: "Pakistan",
    region: "Asia",
    subregion: "Southern Asia",
  });
  const [CheckIMage, setCheckIMage] = useState(true);
  const [phoneNo, setPhoneNo] = useState("");

  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          flexDirection: "row",
          borderWidth: 1,
          height: 57,
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <CountryPicker
            placeholder={"+" + Country.callingCode}
            // placeholderTextColor="#fff"
            // image={require("../../Images/flag.png")}
            onSelect={country => setCountry(country)}
            // ios={true}
            withFlag={true}
            withCallingCode={true}
            withFilter={true}
            withAlphaFilter={true}
            withEmoji={true}
            country={true}
            // visible={false}
            // countryCode={true}
          />
        </View>
        <View style={{ borderEndWidth: 1, height: 22, marginLeft: 10 }} />
        <TextInput
          style={{ height: 56, width: "85%", marginLeft: 5 }}
          placeholder="Phone"
          multiline={true}
          keyboardType="numeric"
          value={phoneNumber}
        />
      </View>
    </SafeAreaView>
  );
};

export default CountryCode;
