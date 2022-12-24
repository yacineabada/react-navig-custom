import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

const InputStyle = ({ isPassword = false, label, setText }) => {
  const visibal = require("../../assets/eye.png");
  const notVisibal = require("../../assets/disable_eye.png");

  const [passwordVisibal, setPasswordVisibal] = useState(isPassword);

  return (
    <View style={{ marginTop: 30, flexDirection: "row" }}>
      <TextInput
        onChangeText={(text) => setText(text)}
        style={styles.container}
        placeholder={label}
        placeholderTextColor="rgba(205, 221, 251,0.7)"
        secureTextEntry={passwordVisibal}
      />

      {isPassword ? (
        <TouchableOpacity onPress={() => setPasswordVisibal(!passwordVisibal)}>
          <Image
            source={passwordVisibal ? visibal : notVisibal}
            style={{
              marginTop: 15,
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputStyle;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 250,
    height: 40,
    borderTopRightRadius: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
