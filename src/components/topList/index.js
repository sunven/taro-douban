import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import urlTransfer from "../../utils/urlTransfer";
import "./index.scss";

export default class TopList extends Component {
  static defaultProps = {
    title: "",
    url: "",
    data: []
  };
  atListItemOnClick(url) {
    Taro.navigateTo({
      url: url
    });
  }
  render() {
    const { title, url, data } = this.props;
    return (
      <View className="com-toplist">
        <AtList>
          <AtListItem
            title={title}
            onClick={this.atListItemOnClick.bind(this, url)}
            arrow="right"
          />
        </AtList>
        <View className="at-row at-row--wrap">
          {data.map((item, index) => {
            return (
              <View key={index} className="at-col at-col-4">
                <Image className="img" src={urlTransfer(item.images.small)} />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
