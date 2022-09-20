export default {
  pages: ["pages/Index/index", "pages/Mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#636666",
    selectedColor: "#636666",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
        text: "首页",
        pagePath: "pages/Index/index",
        iconPath: "assets/img/home.png",
        selectedIconPath: "assets/img/homeActive.png"
      },
      // {
      //   text: "找资源",
      //   pagePath: "pages/ResourceIndex/index",
      //   iconPath: "assets/img/resource.png",
      //   selectedIconPath: "assets/img/resourceActive.png"
      // },
      {
        text: "我的",
        pagePath: "pages/Mine/index",
        iconPath: "assets/img/mine.png",
        selectedIconPath: "assets/img/mineActive.png"
      }
    ]
  },

  cloud: true
};
