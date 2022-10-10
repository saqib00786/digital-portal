import { StyleSheet, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = (props) => {
  const { link } = props.route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: link }} />
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
