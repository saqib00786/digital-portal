import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "../screens/Splash";
import Main from "../screens/Main";
import { COLOR_BLUE, COLOR_WHITE } from "../../res/drawables";
import Job from "../screens/Job";
import Bill from "../screens/Bill";
import WebViewScreen from "../screens/WebViewScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitleStyle: {
              color: COLOR_WHITE,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: COLOR_BLUE,
            },
          }}
        />
        <Stack.Screen
          name="Job"
          component={Job}
          options={{
            headerTitleStyle: {
              color: COLOR_WHITE,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: COLOR_BLUE,
            },
            headerTintColor: COLOR_WHITE,
          }}
        />
        <Stack.Screen
          name="Bill"
          component={Bill}
          options={{
            headerTitleStyle: {
              color: COLOR_WHITE,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: COLOR_BLUE,
            },
            headerTintColor: COLOR_WHITE,
          }}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{
            headerTitleStyle: {
              color: COLOR_WHITE,
              fontFamily: "serif",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: COLOR_BLUE,
            },
            headerTintColor: COLOR_WHITE,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
