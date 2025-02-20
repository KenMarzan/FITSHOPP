import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

function PersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullNames, setFullNames] = useState([]); // Store both first & last names
  const [errorMessage, setErrorMessage] = useState(""); // Store error message

  const submitName = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage("Please fill out both fields");
      return; // Stop execution if fields are empty
    }

    axios
      .post("http://192.168.120.203:5000/api/save-name", {
        firstName,
        lastName,
      })
      .then((response) => {
        alert(response.data.message);
        fetchNames(); // Refresh the list
        setFirstName(""); // Clear input
        setLastName(""); // Clear input
        setErrorMessage("");
      })
      .catch((error) => console.error("Error:", error));
  };

  const fetchNames = () => {
    axios
      .get("http://192.168.120.203:5000/api/names")
      .then((response) => setFullNames(response.data.names))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchNames();
  }, []);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(""); // Clear error after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timeout if component re-renders
    }
  }, [errorMessage]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.background}>
        <Text style={style.textColor}>What's your name?</Text>
        <View style={style.inputBox}>
          <TextInput
            style={style.textInputStyle}
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
              setErrorMessage(""); // Clear error when typing
            }}
            placeholder="First name"
          />
        </View>

        <View style={style.inputBox}>
          <TextInput
            style={style.textInputStyle}
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
              setErrorMessage("");
            }}
            placeholder="Last name"
          />

          <TouchableOpacity style={style.buttonBorder} onPress={submitName}>
            <Text style={style.textColorButton}>Continue →</Text>
          </TouchableOpacity>
        </View>

        {errorMessage ? (
          <Text style={style.errorMessages}>{errorMessage}</Text>
        ) : null}

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, marginTop: 20, color: "white" }}>
            Saved Names:
          </Text>
          <FlatList
            data={fullNames}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={{ fontSize: 16, color: "white" }}>
                {item.firstName} {item.lastName}
              </Text>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default PersonalInfo;

const style = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
    width: "auto",
    height: "100%",
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  textColor: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 800,
    marginBottom: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "##D3D3D3",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
  },
  buttonBorder: {
    width: "100%",
    height: 50,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 30,
    backgroundColor: "orange",
    marginTop: 20,
  },
  textColorButton: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
  },
  errorMessages: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    width: 200,
    height: 50,
    margin: "auto",
    backgroundColor: "red",
  },
  inputBox: {
    padding: 5,
  },
});
