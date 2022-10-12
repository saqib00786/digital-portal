import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  billData,
  jobData,
  forcesData,
  educationData,
} from "../../../res/data";
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_LIGHT_BLUE,
} from "../../../res/drawables";

const General = (props) => {
  const { title } = props.route.params;
  const [newArr, setArr] = useState([]);
  useEffect(() => {
    returnData();
  }, []);

  const returnData = () => {
    let arr = [];
    if (title == "Education") {
      arr = educationData.map(function (d) {
        console.log(d);
        return d;
      });
    } else if (title == "Forces") {
      arr = forcesData.map(function (d) {
        console.log(d);
        return d;
      });
    } else if (title == "Bill") {
      arr = billData.map(function (d) {
        console.log(d);
        return d;
      });
    } else if (title == "Job") {
      arr = jobData.map(function (d) {
        console.log(d);
        return d;
      });
    } else {
      return 0;
    }
    setArr(arr);
  };

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
        Welcome To {title} Page.
      </Text>
      <FlatList
        data={newArr}
        //numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default General;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    marginTop: "7%",
  },
});
