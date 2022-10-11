import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { jobData } from "../../../res/data";
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_LIGHT_BLUE,
} from "../../../res/drawables";

const Job = (props) => {
  let arr = jobData.map(function (d) {
    console.log(d);
    return d;
  });

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: COLOR_LIGHT_BLUE,
        margin: 4,
        padding: 15,
        marginTop: 18,
        width: "98%",
        borderRadius: 15,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("WebViewScreen", { link: item.uri })
        }
        //style={{ backgroundColor: "white", margin: -7, borderRadius: 10 }}
      >
        <Image
          source={item.img}
          style={{ width: 70, height: 70, alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "serif",
            color: COLOR_BLACK,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          {item.services}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "sans-serif-light",
          fontSize: 18,
          fontWeight: "bold",
          color: COLOR_BLUE,
          alignSelf: "center",
        }}
      >
        WELCOME TO JOB PAGE.
      </Text>
      <FlatList
        data={arr}
        //numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Job;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    marginTop: "7%",
  },
});
