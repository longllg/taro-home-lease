import React, { Component, memo } from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

import Login from "../../components/login";

const Index = () => {
  return <View className="index">这是我的</View>;
};
export default memo(Index);
