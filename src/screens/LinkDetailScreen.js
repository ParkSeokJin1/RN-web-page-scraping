import React, { useCallback } from "react";
import Header from "../components/Header/Header";
import HeaderGroup from "../components/Header/HeaderGroup";
import HeaderTitle from "../components/Header/HeaderTitle";
import { View } from "react-native";
import HeaderIcon from "../components/Header/HeaderButton";
import Spacer from "../components/Spacer";
import { useNavigation, useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";

export const LinkDetailScreen = () => {
  const routes = useRoute();

  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <HeaderIcon onPress={onPressBack} iconName="arrow-back" />
          <Spacer space={12} horizontal />
          <HeaderTitle title="Link DETAIL" />
        </HeaderGroup>
      </Header>

      <WebView
        style={{ flex: 1 }}
        source={{ url: routes.params.item.link }}
      ></WebView>
    </View>
  );
};
