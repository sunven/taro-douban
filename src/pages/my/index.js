import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAvatar, AtList, AtListItem } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <AtAvatar size="large" circle image="https://jdc.jd.com/img/200" />
        <AtList>
          <AtListItem
            title="项目地址"
            arrow="right"
            iconInfo={{ size: 25, color: "#78A4FA", value: "calendar" }}
          />
          <AtListItem
            title="Taro技术群"
            arrow="right"
            iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
          />
          <AtListItem
            title="微信号"
            arrow="right"
            iconInfo={{ size: 25, color: "#78A4FA", value: "calendar" }}
          />
          <AtListItem
            title="公众号"
            arrow="right"
            iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
          />
          <AtListItem
            title="API文档"
            arrow="right"
            iconInfo={{ size: 25, color: "#78A4FA", value: "calendar" }}
          />
        </AtList>
      </View>
    );
  }
}
