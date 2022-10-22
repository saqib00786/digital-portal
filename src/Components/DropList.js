import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SelectList from "react-native-dropdown-select-list";

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
                onSelect={() => { onSelect() }}
            />
        </View>
    )
}

export default DropList

const styles = StyleSheet.create({
    viewDropDown: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        padding: 2
    },
    textDropDown: { fontSize: 25, fontFamily: "serif", marginTop: 5 },
    imageDropDown: { width: 45, height: 45 },
})