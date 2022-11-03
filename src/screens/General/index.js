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
  props.navigation.setOptions({ title: title });
  const [newArr, setArr] = useState([]);
  useEffect(() => {
    returnData();
  }, []);


  const returnData = () => {
    let arr = [];
    switch (title) {
      case 'Education':
        arr = educationData.map(function (d) {
          console.log(d);
          return d;
        });
        break;
      case 'Utility Services':
        arr = utilityServicesData.map(function (d) {
          console.log(d);
          return d;
        });
        break;
      case 'Job':
        arr = jobData.map(function (d) {
          console.log(d);
          return d;
        });
        break;
      case 'Delivery Services':
        arr = deliveryServicesData.map(function (d) {
          console.log(d);
          return d;
        });
        break;
      case 'Govt. Initiatives':
        arr = govtInitiativesData.map(function (d) {
          console.log(d);
          return d;
        });
        break;
      default:
        return
    }
    setArr(arr)
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemView}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("WebViewScreen", {
            selected: item.uri,
            title: item.services,
          })
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
    alignItems:'center',
    // margin: 10,
    marginTop: "7%",
  },
  renderItemView: {
    // backgroundColor: COLOR_LIGHT_BLUE,
    borderWidth:1,
    borderColor:COLOR_LIGHT_BLUE,    
    margin: '4%',
    padding: '3%',
    // marginTop: 18,
    width: "42%",
    borderRadius: 15,
  },
  renderItemImage: { width: 70, height: 70, alignSelf: "center" },
  renderItemText: {
    fontSize: 12,
    // fontWeight: "bold",
    // fontFamily: "serif",
    color: COLOR_BLACK,
    alignSelf: "center",
    marginTop: '8%',
  },
  text: {
    fontFamily: "sans-serif-light",
    fontSize: 18,
    fontWeight: "bold",
    color: COLOR_BLUE,
    alignSelf: "center",
  },
});
