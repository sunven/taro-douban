import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtList, AtListItem, AtRate } from "taro-ui";
import api from "../../utils/api";
import urlTransfer from "../../utils/urlTransfer";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: []
    };
  }
  config = {
    navigationBarTitleText: "影院热映电影"
  };

  componentWillMount() {
    api.get("nowplaying").then(res => {
      this.setState({ data: res.data.entries.slice(0, 20) });
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { data } = this.state;
    return (
      <View className="index">
        {data.map((item, index) => {
          return (
            <View key={index} className="at-row nowplaying-view">
              <View className="at-col at-col-4">
                <Image
                  className="nowplaying-view-img"
                  src={urlTransfer(item.images.small)}
                />
              </View>
              <View className="at-col at-col-6">
                <View>{item.title}</View>
                <View className="nowplaying-view-rate">
                  <View className="at-row">
                    <View className="at-col">
                      <AtRate value={3.1} />
                    </View>
                    <View className="at-col" style="font-size:14px">
                      {item.rating}
                    </View>
                  </View>
                </View>
                <View className="nowplaying-view-desc">
                  扫毒而天地对扫毒而天地对决扫毒而天地对决
                </View>
              </View>
              <View className="at-col at-col-2 nowplaying-view-star">
                <View className="at-icon at-icon-star" />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
