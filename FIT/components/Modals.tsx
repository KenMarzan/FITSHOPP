import React from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
function Modals({ modalVisible, selectedImage, closeModal }) {
  return (
    modalVisible &&
    selectedImage && (
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.enlargedImage}
                />
                <Text> Helloooooo</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(8, 10, 11, 0.7)",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  enlargedImage: {
    width: 390,
    height: 390,
    borderRadius: 10,
  },
});

export default Modals;
