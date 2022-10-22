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
import DropList from '../../Components/DropList'

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

  const nav = (selected) => {
    props.navigation.navigate("WebViewScreen", { selected })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <DropList
          title={"ARMY"}
          logo={ARMY_LOGO}
          setSelected={setSelected}
          data={arr}
          onSelect={() => nav(selected)}
        />
        <DropList
          title={"PAF"}
          logo={AIRFORCE_LOGO}
          setSelected={setSelected}
          data={arr1}
          onSelect={() => nav(selected)}
        />
        <DropList
          title={"NAVY"}
          logo={NAVY_LOGO}
          setSelected={setSelected}
          data={arr2}
          onSelect={() => nav(selected)}
        />
        <DropList
          title={"POLICE"}
          logo={POLICE_LOGO}
          setSelected={setSelected}
          data={arr3}
          onSelect={() => nav(selected)}
        />
        <DropList
          title={"MOD"}
          logo={MOD_LOGO}
          setSelected={setSelected}
          data={arr4}
          onSelect={() => nav(selected)}
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
    padding: 2
  },
  textDropDown: { fontSize: 25, fontFamily: "serif", marginTop: 5 },
  imageDropDown: { width: 45, height: 45 },
});

export default DropDownDefence;
