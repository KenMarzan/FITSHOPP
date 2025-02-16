import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
function PersonalInfo() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Personallll Info</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default PersonalInfo;
