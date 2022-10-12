import React, { useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  BACKGROUND_COLOR,
  COLOR_BLUE,
  COLOR_GRAY,
  SPLASH_LOGO,
} from "../../../res/drawables";
import NetInfo from "@react-native-community/netinfo";

const Splash = (props) => {
  useEffect(() => {
    NetInfo.fetch().then((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setTimeout(function () {
        if (state.isConnected) {
          props.navigation.replace("Main");
        } else {
          props.navigation.navigate("NetworkErrorScreen");
        }
      }, 5000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={SPLASH_LOGO} style={styles.img} />
      <Text style={styles.text1}>DIGITAL SERVICES</Text>
      <Text style={styles.text2}>PAKISTAN.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_COLOR,
  },
  img: { width: 200, height: 200, resizeMode: "contain", alignSelf: "center" },
  text1: {
    color: COLOR_GRAY,
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "sans-serif-light",
    marginTop: 70,
    fontWeight: "700",
  },
  text2: {
    color: COLOR_BLUE,
    alignSelf: "flex-end",
    marginRight: 50,
    fontSize: 20,
    fontFamily: "sans-serif-light",
    fontWeight: "670",
  },
});
export default Splash;