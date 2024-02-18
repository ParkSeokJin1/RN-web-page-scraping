import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkListScreen } from "../screens/LinkListScreen";
import { LinkDetailScreen } from "../screens/LinkDetailScreen";

const Stack = createNativeStackNavigator();

//Link Screen 2개 만 묶어놓은 네비게이션
export const LinkStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LinkList"
      screenOptions={{
        presentation: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen name="LinkList" component={LinkListScreen} />
      <Stack.Screen name="LinkDetail" component={LinkDetailScreen} />
    </Stack.Navigator>
  );
};
