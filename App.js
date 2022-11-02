import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from 'react-native-paper'

export default function App() {
  return (
      <Provider>
        <Navigation />
      </Provider>
  );
}
