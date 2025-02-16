import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ChatNav = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={styles.navText}>{"<"}</Text>
      </Pressable>
      <View>
        <Text style={styles.navText}>Messages</Text>
        <Text style={styles.navText}>Online</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: "65%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  navText: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
});

export default ChatNav;
