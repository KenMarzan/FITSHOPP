import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
function HistoryScroll({ imageHistory, openImageInModal, navbarIcon }) {
  return (
    <ScrollView style={styles.historyScroll}>
      <View style={styles.historyImagesContainer}>
        {imageHistory.map((uri, index) => (
          <TouchableOpacity key={index} onPress={() => openImageInModal(uri)}>
            <Image source={{ uri }} style={styles.historyImage} />

            <View
              style={{
                width: 125,
                height: 30,
                marginTop: 20,
                marginLeft: 145,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 300,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Image source={navbarIcon} style={styles.avatarIcon} />

                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Ina
                </Text>
                <Text style={{ color: "gray" }}>Jan 22</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatarIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  historyScroll: {
    width: "100%",
  },
  historyImagesContainer: {
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  historyImage: {
    width: 390,
    height: 390,
    marginBottom: 10,
    borderRadius: 40,
    marginLeft: 5,
    marginTop: 130,
    borderWidth: 1,
    borderColor: "gray",
  },
});
export default HistoryScroll;
