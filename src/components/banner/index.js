import Taro, { Component } from "@tarojs/taro";
import { Image, Swiper, SwiperItem } from "@tarojs/components";
import urlTransfer from "../../utils/urlTransfer";
import "./index.scss";

export default class Banner extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;
    return (
      <Swiper
        className="com-banner"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        {data.map((item, index) => {
          return (
            <SwiperItem key={index}>
              <Image src={urlTransfer(item.images.small)} />
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  }
}
