import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import SelectList from "react-native-dropdown-select-list";
import {
  govtSecCustom,
  govtSecDriving,
  govtSecExciseTaxation,
  govtSecFBR,
  govtSecMOFA,
  govtSecNadra,
  govtSecPassport,
  govtSecVisa,
} from "../../../res/data";
import {
  CUSTOM_LOGO,
  DRIVING_LICENSE_LOGO,
  EXCISE_TAX_LOGO,
  FBR_LOGO,
  MOFA_LOGO,
  NADRA_LOGO,
  PASSPORT_LOGO,
  VISA_LOGO,
} from "../../../res/drawables";

const DropDownGovtSec = (props) => {
  const [selected, setSelected] = React.useState("");
  let arr = govtSecDriving.map(function (d) {
    console.log(d);
    return d;
  });
  let arr1 = govtSecExciseTaxation.map(function (d) {
    console.log(d);
    return d;
  });
  let arr2 = govtSecNadra.map(function (d) {
    console.log(d);
    return d;
  });
  let arr3 = govtSecPassport.map(function (d) {
    console.log(d);
    return d;
  });
  let arr4 = govtSecVisa.map(function (d) {
    console.log(d);
    return d;
  });
  let arr5 = govtSecMOFA.map(function (d) {
    console.log(d);
    return d;
  });
  let arr6 = govtSecFBR.map(function (d) {
    console.log(d);
    return d;
  });
  let arr7 = govtSecCustom.map(function (d) {
    console.log(d);
    return d;
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>Driving License</Text>
          <Image style={styles.imageDropDown} source={DRIVING_LICENSE_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>
            Excise,Tax & Narcotics Control Dept
          </Text>
          <Image style={styles.imageDropDown} source={EXCISE_TAX_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr1}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>Nadra</Text>
          <Image style={styles.imageDropDown} source={NADRA_LOGO} />
        </View>

        <SelectList
          setSelected={setSelected}
          data={arr2}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>Passport</Text>
          <Image style={styles.imageDropDown} source={PASSPORT_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr3}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>Pakistan Visa Application</Text>
          <Image style={styles.imageDropDown} source={VISA_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr4}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>MOFA</Text>
          <Image style={styles.imageDropDown} source={MOFA_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr5}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>FBR</Text>
          <Image style={styles.imageDropDown} source={FBR_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr6}
          onSelect={() =>
            props.navigation.navigate("WebViewScreen", { selected })
          }
        />
        <View style={styles.viewDropDown}>
          <Text style={styles.textDropDown}>Custom</Text>
          <Image style={styles.imageDropDown} source={CUSTOM_LOGO} />
        </View>
        <SelectList
          setSelected={setSelected}
          data={arr7}
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

export default DropDownGovtSec;
