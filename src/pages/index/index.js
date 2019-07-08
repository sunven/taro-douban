import Taro, { Component } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import api from "../../utils/api";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      topArr: []
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {
  }

  componentDidMount() {
    api.get("nowplaying").then(res => {
      console.log(res.data.entries.slice(0, 3));
      this.setState({topArr:res.data.entries.slice(0, 3)});
    });}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { topArr } = this.state;
    return (
      <View className='home__banner'>
        <Swiper
          className="home__banner"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          {topArr.map(item => {
            return (
              <SwiperItem key={item.id}>
                <Image src={item.images.small1} />
              </SwiperItem>
            );
          })}
        </Swiper>
      </View>
    );
  }
}
