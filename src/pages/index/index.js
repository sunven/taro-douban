import Taro, { Component } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtSearchBar, AtList, AtListItem } from "taro-ui";
import api from "../../utils/api";
import urlTransfer from "../../utils/urlTransfer";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      topArr: [],
      hotArr: []
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };
  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick() {
    console.log("开始搜索");
  }
  atListItemOnClick(){
    Taro.navigateTo({
      url:'../hot/index'
    }).then(c=>{

    });
  }
  componentWillMount() {}

  componentDidMount() {
    api.get("nowplaying").then(res => {
      this.setState({ topArr: res.data.entries.slice(0, 3) });
      this.setState({ hotArr: res.data.entries.slice(0, 6) });
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { topArr, hotArr } = this.state;
    return (
      <View className="home__banner">
        <View>
          <AtSearchBar
            actionName="搜一下"
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        </View>
        <Swiper
          className="home__banner"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          {topArr.map((item, index) => {
            return (
              <SwiperItem key={index}>
                <Image src={urlTransfer(item.images.small)} />
              </SwiperItem>
            );
          })}
        </Swiper>
        {/* <View className="at-row">
          <View className="at-col panel-left">院线热映</View>
          <View className="at-col panel-right">全部></View>
        </View> */}
        <AtList>
          <AtListItem title="院线热映" onClick={this.atListItemOnClick.bind(this)} arrow="right" />
        </AtList>
        <View className="at-row at-row--wrap">
          {hotArr.map((item, index) => {
            return (
              <View key={index} className="at-col at-col-4">
                <Image src={urlTransfer(item.images.small)} />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
