import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNav from "./TabNav";
import ModalScreen from "../screens/ModalScreen";
import OrderScreen from '../screens/OrderScreen';

export type StackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: Order };
};

const Stack = createNativeStackNavigator<StackParamList>();

const RootNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNav} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyModal"
          component={ModalScreen}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="Order"
          component={OrderScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNav;
