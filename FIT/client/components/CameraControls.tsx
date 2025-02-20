import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

function CameraControls({ openPhotoLibrary, takePicture, toggleCameraFacing }) {
  return (
    <View style={styles.cameraNavs}>
      <TouchableOpacity
        style={[styles.cameraClicker, styles.cameraBorder]}
        onPress={openPhotoLibrary}
      >
        <Icon name="image" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.cameraButtonBorder}>
        <TouchableOpacity
          style={styles.cameraClicker}
          onPress={takePicture}
        ></TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.cameraClicker, styles.cameraBorder]}
        onPress={toggleCameraFacing}
      >
        <Icon name="sync-alt" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraNavs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 50,
    borderWidth: 1,
  },
  cameraClicker: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  cameraBorder: {
    backgroundColor: "black",
  },
  cameraButtonBorder: {
    borderWidth: 3,
    borderColor: "#FFD700",
    borderRadius: "50%",
  },
});

export default CameraControls;
