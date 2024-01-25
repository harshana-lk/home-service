import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../../../assets/images/login.png")}
        style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: "bold",
            color: Colors.BLACK,
            textAlign: "center",
          }}
        >
          Let's Find Professional Cleanig and Repair Service
        </Text>
        <Text
          style={{
            color: Colors.BLACK,
            textAlign: "center",
            marginTop: 10,
            fontSize: 17,
          }}
        >
          Best App to find services near you wich deliver oyu a perofessional
          service
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Let's Get Strated
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    marginTop: 70,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    height: "40%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    borderColor: Colors.BLACK,
    borderWidth: 2,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: Colors.BLACK,
    borderRadius: 99,
  },
});

export default Login;
