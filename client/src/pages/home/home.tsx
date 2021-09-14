import { memo } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./home.module.scss";
import HomeHeader from "src/components/HomeHeader";

const Index = () => {
  return (
    <View className="index">
      <HomeHeader title="首页标题" showLogo={true} />
    </View>
  );
};
export default memo(Index);
