import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CustomerScreenNavigationProp } from "../screens/CustomerScreen";
import { StackParamList } from "../Nav/RootNav";
import { TabParamList } from "../Nav/TabNav";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "OrdersScreen">,
  NativeStackNavigationProp<StackParamList>
>;

type OrderCardProps = {
  item: Order;
};
const OrderCard = ({ item }: OrderCardProps) => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between items-center")}>
          <View style={tw("")}>
            <Icon
              name="truck-delivery"
              color="#eb6a7c"
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text style={[tw("text-gray-400"), { fontSize: 10 }]}>
              {item.carrier} - {item.trackingId}
            </Text>
            <Text style={tw("text-gray-500 text-xl")}>
              {item.trackingItems.customer.email}
            </Text>
          </View>

          <View style={tw("flex-row items-center")}>
            <Text style={[tw("text-sm"), { color: "#eb6a7c" }]}>
              {item.trackingItems.items.length} x
            </Text>
            <Icon style={tw("ml-2")} name="box" type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
