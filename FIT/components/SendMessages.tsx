import React from "react";
import { StyleSheet } from "react-native";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
function SendMessages({ openCamera }) {
  return (
    <View
      style={{
        width: 300,
        height: 50,
        borderRadius: 200,
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        marginLeft: 60,
        bottom: -10,
        position: "absolute",
      }}
    >
      <Icon name="th-large" size={30} color="white" />
      <View
        style={{
          borderWidth: 4,
          borderColor: "yellow",
          borderRadius: 50,
          padding: 3,
        }}
      >
        <TouchableOpacity
          style={styles.cameraSett}
          onPress={openCamera}
        ></TouchableOpacity>
      </View>

      <Icon name="upload" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  cameraSett: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "white",
    backgroundColor: "white",
  },
});

export default SendMessages;
