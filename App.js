// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack/Stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
            <Stack />
        </Provider>
    </SafeAreaView>
  );
}

export default App;
