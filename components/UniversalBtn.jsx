import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const UniversalBtn = ({ text, bgColor, textColor, onPress }) => {
  return (
    <View>
      {/* <Button title={text} /> */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.button,
          { backgroundColor: bgColor ? bgColor : "#4180fe" },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor ? textColor : "#fff" }]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 6,
    paddingHorizontal: 22,
    alignItems: "center",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "semibold",
    letterSpacing: 2,
  },
});
export default UniversalBtn;
