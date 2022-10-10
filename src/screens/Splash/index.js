import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  BACKGROUND_COLOR,
  COLOR_BLUE,
  COLOR_GRAY,
  SPLASH_LOGO,
} from "../../../res/drawables";

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace("Main");
  }, 3000);
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
