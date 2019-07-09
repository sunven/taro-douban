import Taro, { Component } from "@tarojs/taro";
import { View, AtList, AtListItem } from "@tarojs/components";
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
        <AtList>
          <AtListItem
            title="标题文字"
            note="描述信息"
            arrow="right"
            iconInfo={{ size: 25, color: "#78A4FA", value: "calendar" }}
          />
          <AtListItem
            title="标题文字"
            note="描述信息"
            extraText="详细信息"
            arrow="right"
            iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
          />
        </AtList>
      </View>
    );
  }
}
