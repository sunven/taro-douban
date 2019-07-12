import Taro, { Component } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtSearchBar, AtList, AtListItem, AtSegmentedControl } from "taro-ui";
import Banner from "../../components/banner";
import TopList from "../../components/topList";
import TabPanel from "../../components/tabpanel";
import api from "../../utils/api";
import urlTransfer from "../../utils/urlTransfer";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      topArr: [],
      hotArr: [],
      comingArr: [],
      AtSegmentedControlArr: [
        { title: "新片" },
        { title: "北美" },
        { title: "口碑" },
        { title: "top250" }
      ],
      newTopArr: [],
      usTopArr: [],
      weeklyTopArr: [],
      top250Arr: []
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
  componentWillMount() {}

  componentDidMount() {
    api.get("nowplaying").then(res => {
      this.setState({ topArr: res.data.entries.slice(0, 3) });
      this.setState({ hotArr: res.data.entries.slice(0, 6) });
    });
    api.get("coming", { start: 0, count: 6 }).then(res => {
      this.setState({ comingArr: res.data.entries });
    });
    api.get("new_movies").then(res => {
      this.setState({ newTopArr: res.data.subjects.slice(0, 10) });
    });

    api.get("us_box").then(res => {
      this.setState({ usTopArr: res.data.subjects.slice(0, 10) });
    });

    api.get("weekly").then(res => {
      this.setState({ weeklyTopArr: res.data.subjects.slice(0, 10) });
    });

    api.get("top250").then(res => {
      this.setState({ top250Arr: res.data.subjects.slice(0, 10) });
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let {
      topArr,
      hotArr,
      comingArr,
      AtSegmentedControlArr,
      newTopArr,
      usTopArr,
      weeklyTopArr,
      top250Arr
    } = this.state;
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
        <Banner data={topArr} />
        <TopList title="院线热映" url="../hot/index" data={hotArr} />
        <TopList title="即将上映" data={comingArr} />
        <TabPanel
          tabName={AtSegmentedControlArr}
          panelData={[newTopArr, usTopArr, weeklyTopArr, top250Arr]}
        />
        {/* <AtSegmentedControl
          values={AtSegmentedControlArr}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        {this.state.current === 0 ? (
          <AtList>
            {newTopArr.map((item, index) => {
              return <AtListItem key={index} title={item.title} />;
            })}
          </AtList>
        ) : null}
        {this.state.current === 1 ? (
          <AtList>
            {usTopArr.map((item, index) => {
              return <AtListItem key={index} title={item.subject.title} />;
            })}
          </AtList>
        ) : null}
        {this.state.current === 2 ? (
          <AtList>
            {weeklyTopArr.map((item, index) => {
              return <AtListItem key={index} title={item.subject.title} />;
            })}
          </AtList>
        ) : null}
        {this.state.current === 3 ? (
          <AtList>
            {top250Arr.map((item, index) => {
              return <AtListItem key={index} title={item.title} />;
            })}
          </AtList>
        ) : null} */}
      </View>
    );
  }
}
