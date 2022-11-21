import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { data } from "../../../res/data";
import {
  COLOR_WHITE,
  PAK_GOVT_GREEN_COLOR,
  PAK_GOVT_YELLOW_COLOR
} from "../../../res/drawables";
import NetInfo from "@react-native-community/netinfo";

const { height, width } = Dimensions.get("window");

const Main = (props) => {
  useEffect(() => {
    connectionChecking();
  }, []);

  const connectionChecking = () => {
    return NetInfo.addEventListener((state) => {
      console.log("Connection type Main:", state.type);
      console.log("Is connected?", state.isConnected);

      if (state.isConnected === true) {
        if (props.navigation.canGoBack()) {
          props.navigation.goBack();
          return;
        }
      } else {
        props.navigation.navigate("NetworkErrorScreen");
      }
    });
  };
  let arr = data.map(function (d) {
    console.log(d);
    return d;
  });

  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.imgbg}
      borderRadius={10}
      style={styles.renderItemView}
    >
      <TouchableOpacity
        // style={{backgroundColor : 'blue'}}
        onPress={() =>
          props.navigation.navigate(item.screen, { title: item.source })
        }
        //onPress={() => props.navigation.navigate(item.source)}
        //style={{ backgroundColor: "white", margin: -7, borderRadius: 10 }}
      >
        {/*<Image source={item.img} style={styles.renderItemImage} />*/}
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          style={styles.gradientContainer}
        >
          <Text style={styles.renderItemText}>{item.source}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.topHeading1}>Welcome To</Text>
        <Text style={styles.topHeading2}>DIGITAL SERVICES PORTAL</Text>
      </View>
      <FlatList
        style={{ margin: 12 }}
        data={arr}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: "space-between",
    //margin: 10,
    // marginTop: "7%",
  },
  renderItemView: {
    //backgroundColor: COLOR_LIGHT_BLUE,
    margin: 4,
    marginTop: 16,
    marginBottom: 4,
    //padding: 15,
    width: width / 3.4,
    borderRadius: 10,
    height: 140,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  renderItemImage: {
    width: 70,
    height: 70,
    alignSelf: "center",
  },
  renderItemText: {
    fontSize: 13,
    //fontFamily: "serif",
    color: COLOR_WHITE,
    margin: 4,
    marginBottom: 8,
  },
  topHeading1: {
    fontFamily: "sans-serif",
    fontSize: 15,
    color: PAK_GOVT_YELLOW_COLOR,
  },
  topHeading2: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    color:PAK_GOVT_YELLOW_COLOR,
  },
  gradientContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textHeader: {
    paddingLeft: "5%",
    backgroundColor: PAK_GOVT_GREEN_COLOR,
    height: '15%',
    justifyContent:'center',
    paddingTop:'8%'
  },
});
