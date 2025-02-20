import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Image } from "react-native";
function History({ toggleHistory, imageHistory }) {
  return (
    <TouchableOpacity style={styles.historyButton} onPress={toggleHistory}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {imageHistory.length > 0 && (
          <Image
            source={{ uri: imageHistory[imageHistory.length - 1] }}
            style={styles.historyButtonImage}
          />
        )}
        <Text style={styles.historyButtonText}>Historyy</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  historyButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  historyButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  historyButtonImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});

export default History;
