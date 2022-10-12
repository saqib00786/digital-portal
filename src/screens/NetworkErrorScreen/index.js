import React from "react";
import { Image, StyleSheet, View, LottieView } from "react-native";
import { COLOR_WHITE } from "../../../res/drawables";
import Lottie from "lottie-react-native";

const NetworkErrorScreen = (props) => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require("../../animation/error_animation.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: COLOR_WHITE,
  },
  logo: {
    height: 150,
    width: 200,
  },
});
export default NetworkErrorScreen;
