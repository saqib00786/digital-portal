import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const WebViewScreen = (props) => {
  const { selected, title } = props.route.params;
  // const { title } = props.route.params;
  props.navigation.setOptions({ title: title });
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
      {/*  <View style={styles.adds}>
        <BannerAd
          unitId="ca-app-pub-1546920848155013/3956877179"
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View> */}
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  adds: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
});
