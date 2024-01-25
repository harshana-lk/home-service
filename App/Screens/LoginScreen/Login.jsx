import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/images/login.png")}
        style={styles.loginImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: 280,
    height: 450,
  },
});

export default Login;
