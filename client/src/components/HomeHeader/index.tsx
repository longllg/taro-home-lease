import { memo, useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import "./index.module.scss";
import tabbar1 from "@/resources/logo.png";

interface SafeProp {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width?: number;
  height?: number;
}
interface Props {
  title: string;
  showLogo?: boolean;
}
const Header = (props: Props) => {
  const { title, showLogo = false } = props;
  const [sysmInfo, setSysmInfo] = useState<SafeProp>(); // 头部安全具体
  const [capsule, setCapsule] = useState<SafeProp>(); // 胶囊宽度
  useEffect(() => {
    setSysmInfo(Taro.getSystemInfoSync().safeArea);
    setCapsule(Taro.getMenuButtonBoundingClientRect());
  }, []);
  return (
    <View className="home-header">
      <View style={{ height: sysmInfo?.top + "px" }}></View>
      <View
        style={{ height: capsule?.height + "px" }}
        className="home-header-title"
      >
        {showLogo && <Image src={tabbar1} className="home-logo"></Image>}

        <Text>{title}</Text>
      </View>
    </View>
  );
};
export default memo(Header);
