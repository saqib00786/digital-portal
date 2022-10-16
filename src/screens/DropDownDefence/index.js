import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import SelectList from "react-native-dropdown-select-list";
import {
  defenceDataARMY,
  defenceDataMOD,
  defenceDataNAVY,
  defenceDataPAF,
  defenceDataPOLICE,
} from "../../../res/data";
import {
  AIRFORCE_LOGO,
  ARMY_LOGO,
  MOD_LOGO,
  NAVY_LOGO,
  POLICE_LOGO,
} from "../../../res/drawables";

const DropDownDefence = (props) => {
  const [selected, setSelected] = React.useState("");

  let arr = defenceDataARMY.map(function (d) {
    console.log(d);
    return d;
  });
  let arr1 = defenceDataPAF.map(function (d) {
    console.log(d);
    return d;
  });
  let arr2 = defenceDataNAVY.map(function (d) {
    console.log(d);
    return d;
  });
  let arr3 = defenceDataPOLICE.map(function (d) {
    console.log(d);
    return d;
  });
  let arr4 = defenceDataMOD.map(function (d) {
    console.log(d);
    return d;
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>ARMY</Text>
          <Image style={styles.imageDropDown} source={ARMY_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>PAF</Text>
          <Image style={styles.imageDropDown} source={AIRFORCE_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr1}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>NAVY</Text>
          <Image style={styles.imageDropDown} source={NAVY_LOGO} />
        </View>

        <SelectList
          setSelected={setSelected}
          data={arr2}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>POLICE</Text>
          <Image style={styles.imageDropDown} source={POLICE_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr3}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>MOD</Text>
          <Image style={styles.imageDropDown} source={MOD_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr4}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  viewDropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textDropDown: { fontSize: 25, fontFamily: "serif", marginTop: 5 },
  imageDropDown: { width: 45, height: 45 },
});

export default DropDownDefence;
