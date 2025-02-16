import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import ChatNav from "../../components/ChatNav";

const avatar = require("../../assets/rengoku.jpeg");
const ChatScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ChatNav navigation={navigation} />

        <ScrollView
          style={styles.messages}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          <View style={styles.message}>
            <View style={styles.borderSt}>
              <Image source={avatar} style={styles.avatar} />
            </View>

            <View style={styles.messageText}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 16,  color: "white"  }}>
                    Ina was here
                  </Text>
                </View>
                <View>
                  <Text  style={{ fontWeight: "bold", fontSize: 12,  color: "gray", }}>
                    Jan 21
                  </Text>
                </View>
              </View>

              <Text style={{   color: "gray", marginTop: 6  }}>Hello there</Text>
            </View>
            <View>
              <Text   style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>></Text>
            </View>
          </View>

          
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  messages: {
    flex: 1,
    backgroundColor: "black", // Example background color
   
    marginTop: 10,
  },
  message: {
    alignSelf: "flex-start", // Align messages to left
    flexDirection: "row",
    width: "100%",
    height: 90,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    
  },
  text: {
    color: "white", // Ensure text is visible
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 2,
  },
  borderSt:{
    borderWidth: 1,
    borderColor: "gray",
    
    borderRadius: 30,
  },
  messageText: {
    width: "75%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default ChatScreen;
