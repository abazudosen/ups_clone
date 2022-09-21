import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  useNavigation,
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Button } from "@rneui/themed";

import { TabParamList } from "../Nav/TabNav";
import { StackParamList } from "../Nav/RootNav";
import useOrders from "../hooks/useOrders";
import OrderCard from "../components/OrderCard";

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "OrdersScreen">,
  NativeStackNavigationProp<StackParamList>
>;

const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  console.log(orders)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#eb6a7c" : color, fontSize: 10 }}>
          Orders
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#eb6a7c" }}>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View>
        <Button
          titleStyle={{ color: "gray", fontWeight: "400" }}
          color="pink"
          style={tw("py-2 px-5")}
          onPress={() => setAscending(!ascending)}
        >
          {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order) => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
