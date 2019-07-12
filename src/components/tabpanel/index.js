import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  AtSegmentedControl,
  AtList,
  AtListItem,
  AtTabs,
  AtTabsPane
} from "taro-ui";
import "./index.scss";

export default class TabPanel extends Component {
  static defaultProps = {
    tabName: [],
    panelData: []
  };
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  handleClick(value) {
    console.log(value);
    console.log(this.props.panelData);
    this.setState({
      current: value
    });
  }
  render() {
    const { tabName, panelData } = this.props;
    const { current } = this.state;
    return (
      <AtTabs
        className="com-tabpanel"
        current={current}
        tabList={tabName}
        onClick={this.handleClick.bind(this)}
      >
        {tabName.map((item, index) => {
          return (
            <AtTabsPane key={index} current={current} index={index}>
              {/* <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
                  标签页一的内容
                </View> */}
              <AtList>
                {panelData[index].map((item1, index1) => {
                  return (
                    <AtListItem
                      key={index1}
                      title={item1.title || item1.subject.title}
                    />
                  );
                })}
              </AtList>
            </AtTabsPane>
          );
        })}
      </AtTabs>
      //   <View className="com-tabpanel">
      //     <AtSegmentedControl
      //       values={tabName}
      //       onClick={this.handleClick.bind(this)}
      //       current={current}
      //     />
      //     {
      //       <AtList>
      //         {panelData[current].map((item, index) => {
      //           return (
      //             <AtListItem
      //               key={index}
      //               title={item.title || item.subject.title}
      //             />
      //           );
      //         })}
      //       </AtList>
      //     }
      //   </View>
    );
  }
}
