import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SelectList from "react-native-dropdown-select-list";
import { PAK_GOVT_YELLOW_COLOR, COLOR_GRAY } from "../../res/drawables";

const DropList = ({ title, logo, data, onSelect, setSelected }) => {
  return (
    <View>
      <View style={styles.viewDropDown}>
        <Text style={styles.textDropDown}>{title}</Text>
        <Image style={styles.imageDropDown} source={logo} />
      </View>
      <SelectList
        setSelected={setSelected}
        data={data}
        boxStyles={{ borderColor: PAK_GOVT_YELLOW_COLOR }}
        dropdownStyles={{ borderColor: PAK_GOVT_YELLOW_COLOR }}
        placeholdeColor="red"
        inputStyles={{ color: COLOR_GRAY }}
        onSelect={() => {
          onSelect();

        }}
      />
    </View>
  );
};

export default DropList;

const styles = StyleSheet.create({
  viewDropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,

  },
  textDropDown: {
    fontSize: 15, alignSelf: "center",
    //fontFamily: "serif",
    //marginTop: "5%",
  },
  imageDropDown: { width: 30, height: 30 },
});
