import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

import CustomerScreen from "../screens/CustomerScreen";
import OrdersScreen from "../screens/OrdersScreen";

export type TabParamList = {
  CustomerScreen: undefined;
  OrdersScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNav = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59c1cc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "CustomerScreen") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#59c1cc" : "gray"}
              />
            );
          } else if (route.name === "OrdersScreen") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "#eb6a7c" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="CustomerScreen" component={CustomerScreen} />
      <Tab.Screen name="OrdersScreen" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
