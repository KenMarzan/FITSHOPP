import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/screens/Home";
import ChatScreen from "./app/screens/ChatScreen";
import PersonalInfo from "./app/screens/PersonalInfo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Personal" component={PersonalInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
