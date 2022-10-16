import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = (props) => {
  const { selected } = props.route.params;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: selected }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="#2294f2"
            size="large"
            style={{
              flex: 1,
              alignSelf: "center",
              justifyContent: "center",
              marginBottom: "55%",
            }}
          />
        )}
      />
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
