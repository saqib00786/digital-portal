import React, { useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  BACKGROUND_COLOR,
  COLOR_BLUE,
  COLOR_GRAY,
  SPLASH_LOGO,
} from "../../../res/drawables";

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("Main");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={SPLASH_LOGO} style={styles.img} />
      {/* <Text style={styles.text3}>IDEA SOFT</Text>
      <View style={styles.textBox}>
        <Text style={styles.text1}>DIGITAL SERVICES</Text>
        <Text style={styles.text2}>PAKISTAN</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
  },
  img: {
    width: '100%',
    height:'100%',
  
  },
  // text1: {
  //   color: COLOR_GRAY,
  //   alignSelf: "center",
  //   fontSize: 24,
  //   fontFamily: "sans-serif",
  //   fontWeight: "bold",
  // },
  // text2: {
  //   color: COLOR_BLUE,
  //   right: 0,
  //   alignSelf: "flex-end",
  //   fontSize: 16,
  //   fontFamily: "sans-serif-light",
  //   fontWeight: "bold",
  // },
  // text3: {
  //   color: COLOR_BLUE,
  //   // right: 0,
  //   alignSelf: "center",
  //   fontSize: 10,
  //   fontFamily: "sans-serif-light",
  //   fontWeight: "bold",
  // },
  // textBox: {
  //   position: "absolute",
  //   bottom: 0,
  //   margin: 30,
  // },
});
export default Splash;
