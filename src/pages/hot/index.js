import Taro, { Component } from "@tarojs/taro";
import { View ,Image} from "@tarojs/components";
import { AtAvatar, AtList, AtListItem } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "影院热映电影"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="at-row">
          <View className="at-col at-col-4">
            <Image src="http://localhost:8002/view/photo/s_ratio_poster/public/p2561172733.jpg"></Image>
          </View>
          <View className="at-col at-col-6">
            <View>
              扫毒而天地对决
            </View>
            <View>
              8.0
            </View>
            <View>
              a
            </View>
          </View>
          <View className="at-col at-col-2"><View className='at-icon at-icon-settings'></View></View>
        </View>
      </View>
    );
  }
}
