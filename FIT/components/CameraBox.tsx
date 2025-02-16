import React, { useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  CameraView,
  useCameraPermissions,
  CameraType,
  Camera,
} from "expo-camera";

function CameraBox({ facing, cameraRef }) {
  //for camera
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <CameraView
      style={styles.camera}
      facing={facing}
      ref={cameraRef}
    ></CameraView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    backgroundColor: "black",
  },
  camera: {
    width: 410,
    height: 410,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    top: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default CameraBox;
