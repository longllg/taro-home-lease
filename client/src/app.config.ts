export default {
  pages: ["pages/home/home", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  cloud: true,
  tabBar: {
    color: "#fff",
    selectedColor: "#fff",
    borderStyle: "white",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "./resources/tabbar1.png",
        selectedIconPath: "./resources/tabbar1.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "分类",
        iconPath: "./resources/tabbar2.png",
        selectedIconPath: "./resources/tabbar2.png"
      }
    ]
  }
};
