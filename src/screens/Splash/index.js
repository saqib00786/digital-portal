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
      setTimeout(() => {
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
      <Text style={styles.text3}>IDEA SOFT</Text>
      <View style={styles.textBox}>
        <Text style={styles.text1}>DIGITAL SERVICES</Text>
        <Text style={styles.text2}>PAKISTAN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center"
  },
  text1: {
    color: COLOR_GRAY,
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  text2: {
    color: COLOR_BLUE,
    right: 0,
    alignSelf: 'flex-end',
    fontSize: 16,
    fontFamily: "sans-serif-light",
    fontWeight: "bold",

  },
  text3: {
    color: COLOR_BLUE,
    // right: 0,
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
  },
  textBox: {
    position: 'absolute',
    bottom: 0,
    margin: 30
  }
});
export default Splash;
