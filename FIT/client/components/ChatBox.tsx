import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
function Chatbox({ animateEmoji }) {
  return (
    <View style={styles.chatbox}>
      <View>
        <Text>Send message...</Text>
      </View>

      <TextInput style={styles.input} placeholder="" multiline />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 110,
        }}
      >
        <TouchableOpacity onPress={() => animateEmoji("😊")}>
          <Text style={{ fontSize: 30 }}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => animateEmoji("🔥")}>
          <Text style={{ fontSize: 30 }}>🔥</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => animateEmoji("💬")}>
          <Text style={{ fontSize: 30 }}>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatbox: {
    width: 380,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 200,
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    bottom: 60,
    position: "absolute",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "70%",
    marginLeft: "-120",
    alignItems: "center",
  },
});

export default Chatbox;
