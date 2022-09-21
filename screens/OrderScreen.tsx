import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  useNavigation,
  RouteProp,
  useRoute,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { TabParamList } from "../Nav/TabNav";
import { StackParamList } from "../Nav/RootNav";
import DeliveryCard from "../components/DeliveryCard";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "OrdersScreen">,
  NativeStackNavigationProp<StackParamList>
>;

type OrderScreenRootProp = RouteProp<StackParamList, "Order">;

const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const {
    params: { order },
  } = useRoute<OrderScreenRootProp>();

  console.log("Order De", order);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#eb6a7c",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "Deliveries",
    });
  }, [order]);

  return <DeliveryCard order={order} fullWidth />;
};

export default OrderScreen;
