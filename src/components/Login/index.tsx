import { memo, useEffect } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

const Login = () => {
  useEffect(() => {
    Taro.cloud
      .callFunction({
        // 要调用的云函数名称
        name: "add",
        // 传递给云函数的event参数
        data: {
          x: 1,
          y: 2
        }
      })
      .then(res => {
        // output: res.result === 3
      })
      .catch(err => {
        // handle error
      });
  }, []);
  return <View>2222</View>;
};

export default memo(Login);
