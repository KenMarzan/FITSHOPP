import React, { useState, useRef } from "react";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  TextInput,
} from "react-native";

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useFonts, Roboto_100Thin } from "@expo-google-fonts/roboto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import CameraBox from "../components/CameraBox";
import CameraControls from "../components/CameraControls";
import History from "../components/History";
import HistoryScroll from "../components/HistoryScroll";
import SendMessages from "../components/SendMessages";
import ChatBox from "../components/ChatBox";
import Modals from "../components/Modals";
import Emojis from "../components/Emojis";

import { PanResponder } from "react-native";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
  });

  // Nav bar
  const navbarIcon = require("../assets/rengoku.jpeg");

  // images

  const [imageHistory, setImageHistory] = useState<string[]>([]);
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const historyHeight = useRef(new Animated.Value(0)).current;

  const [emoji, setEmoji] = useState<string | null>(null); // State for the emoji to animate
  const [floatingEmojis, setFloatingEmojis] = useState<string[]>([]); // State for multiple floating emojis
  const emojiAnim = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -120) {
          // Detect right-to-left swipe
          navigation.navigate("Chat"); // Navigate to ChatScreen
        }
      },
    })
  ).current;

  const openPhotoLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Photo library permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setImageHistory((prevHistory) => [...prevHistory, result.assets[0].uri]);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setImageHistory((prevHistory) => [...prevHistory, result.assets[0].uri]);
    }
  };

  const toggleHistory = () => {
    Animated.timing(historyHeight, {
      toValue: historyVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setHistoryVisible(!historyVisible);
  };

  const openImageInModal = (uri: string) => {
    setSelectedImage(uri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  //for comment section
  const animateEmoji = (emoji: string) => {
    setEmoji(emoji);

    // Reset animation before triggering new animation
    emojiAnim.setValue(0);

    // Animate emoji: opacity from 0 to 1, and move it upwards
    Animated.timing(emojiAnim, {
      toValue: 1, // 1 for full opacity
      duration: 1000, // Duration of 1 second
      useNativeDriver: true,
    }).start();

    // Make the emoji disappear after 1 second by animating opacity back to 0
    setTimeout(() => {
      Animated.timing(emojiAnim, {
        toValue: 0, // Fade it out
        duration: 1000, // Duration of 1 second
        useNativeDriver: true,
      }).start();
    }, 1000);
  };

  //for camera
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState<CameraType>("back");

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageHistory((prevHistory) => [...prevHistory, photo.uri]);
    }
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer} {...panResponder.panHandlers}>
        <Navbar navigation={navigation} />

        {/* Main ScrollView containing all siblings */}
        <ScrollView style={styles.mainScroll}>
          {/* Main Content */}

          <View style={styles.mainContent}>
            {/**  This is the camera*/}
            <View style={[styles.image, { overflow: "hidden" }]}>
              <CameraBox facing={facing} cameraRef={cameraRef} />
            </View>
            {/** camera navigation ito yung tatlong box*/}
            <CameraControls
              openPhotoLibrary={openPhotoLibrary}
              takePicture={takePicture}
              toggleCameraFacing={toggleCameraFacing}
            />

            {/* History button na toggleable */}
            <History
              toggleHistory={toggleHistory}
              imageHistory={imageHistory}
            />
          </View>

          {/* History Container (sibling of main content) */}
          <Animated.View
            style={[
              styles.historyContainer,
              {
                height: historyHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 800], // Adjust height as needed
                }),
              },
            ]}
          >
            <HistoryScroll
              imageHistory={imageHistory}
              openImageInModal={openImageInModal}
              navbarIcon={navbarIcon}
            />

            <View style={styles.textControls}>
              <ChatBox animateEmoji={animateEmoji} />
              <SendMessages openCamera={openCamera} />
            </View>

            <Emojis emoji={emoji} emojiAnim={emojiAnim} />
          </Animated.View>
        </ScrollView>

        {/* Modal */}
        <Modals
          modalVisible={modalVisible}
          selectedImage={selectedImage}
          closeModal={closeModal}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },

  mainScroll: {
    flex: 1,
    width: "100%",
  },
  mainContent: {
    paddingBottom: 20,
    borderWidth: 1,
  },
  image: {
    // width: 410,
    // height: 410,

    // position: "relative",
    // transform: [{ translateX: 100 }],

    width: "auto",
    height: 410,
    margin: "auto",
    marginTop: 60,
    borderRadius: 60,
    borderWidth: 1,
  },

  historyContainer: {
    width: "100%",
    backgroundColor: "black",
    overflow: "hidden",
  },

  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    width: 410,
    height: 410,
  },

  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  avatarIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  textControls: {
    width: 410,
    margin: "auto",
  },
});

export default Home;
