import React from "react";
import { Animated, Text } from "react-native";
import { StyleSheet } from "react-native";

function Emojis({ emoji, emojiAnim }) {
  return (
    emoji && (
      <Animated.View
        style={[
          styles.animatedEmoji,
          {
            transform: [
              {
                translateY: emojiAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -400], // Moves the emoji upwards
                }),
              },
            ],
            opacity: emojiAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [5, 0], // Fades out the emoji
            }),
          },
        ]}
      >
        <Text style={{ fontSize: 40 }}>{emoji}</Text>
      </Animated.View>
    )
  );
}

const styles = StyleSheet.create({
  animatedEmoji: {
    position: "absolute",
    bottom: 100,
    left: 185,
  },
});

export default Emojis;
