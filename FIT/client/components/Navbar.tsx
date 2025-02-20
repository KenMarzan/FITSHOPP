import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const navbarIcon = require("../assets/rengoku.jpeg");

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <View style={styles.navbarContainer}>
        <Pressable onPress={() => navigation.navigate("Personal")}>
          <Image source={navbarIcon} style={styles.avatarIcon} />
        </Pressable>
      </View>
      <View style={[styles.navbarContainer, styles.navbar2nd]}>
        <Icon name="user" size={20} color="white"></Icon>
        <Text style={{ color: "white", marginLeft: 10, fontWeight: "bold" }}>
          7 friends
        </Text>
      </View>
      <View style={styles.navbarContainer}>
        {/* ✅ Fixed: Changed "Screen" to "Chat" */}
        <Icon
          name="comment"
          size={20}
          color="white"
          onPress={() => navigation.navigate("Chat")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  navbarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#444444",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar2nd: {
    width: 140,
    height: 40,
    backgroundColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  avatarIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Navbar;
