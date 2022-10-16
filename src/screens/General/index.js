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
  jobData,
  educationData,
  deliveryServicesData,
  utilityServicesData,
  govtInitiativesData,
  defenceDataPAF,
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
    } else if (title == "Utility Services") {
      arr = utilityServicesData.map(function (d) {
        console.log(d);
        return d;
      });
    } else if (title == "Job") {
      arr = jobData.map(function (d) {
        console.log(d);
        return d;
      });
    } else if (title == "Delivery Services") {
      arr = deliveryServicesData.map(function (d) {
        console.log(d);
        return d;
      });
    } else if (title == "Govt. Initiatives") {
      arr = govtInitiativesData.map(function (d) {
        console.log(d);
        return d;
      });
    } else {
      return 0;
    }
    setArr(arr);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemView}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("WebViewScreen", { selected: item.uri })
        }
        //style={{ backgroundColor: "white", margin: -7, borderRadius: 10 }}
      >
        <Image source={item.img} style={styles.renderItemImage} />
        <Text style={styles.renderItemText}>{item.services}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To {title} Page.</Text>
      <FlatList
        data={newArr}
        numColumns={2}
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
  renderItemView: {
    backgroundColor: COLOR_LIGHT_BLUE,
    margin: 4,
    padding: 15,
    marginTop: 18,
    width: "48%",
    borderRadius: 15,
  },
  renderItemImage: { width: 70, height: 70, alignSelf: "center" },
  renderItemText: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "serif",
    color: COLOR_BLACK,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    fontFamily: "sans-serif-light",
    fontSize: 18,
    fontWeight: "bold",
    color: COLOR_BLUE,
    alignSelf: "center",
  },
});
