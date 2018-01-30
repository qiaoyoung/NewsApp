/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const PropTypes = require('prop-types');

export default class QYTabBar extends Component {

  static propTypes = {
    goToPage: PropTypes.func,                      // 跳转到Tab的方法
    activeTab: PropTypes.number,                   // 选中的下标
    tabs: PropTypes.array,                         // tabs的集合,类似iOS中items的数组
    // 扩展自定义的一些属性
    tabNames:  PropTypes.array,                    // Item的名称
    tabIconNames: PropTypes.array,                 // Item图片的名称
    tabIconSelectedNames: PropTypes.array,         // 保存选中图片的集合
  };

  render() {
    return (
      <View style={styles.tabsStyle}>
        {/*返回一个一个的Item*/}
        {this.props.tabs.map((tab, i) => this.renderItem(tab, i))}
      </View>
    );
  }

  // 自定义函数 处理Item
  renderItem(tab,i) {

    // 判断i是否是当前选中的tab
    const color = this.props.activeTab == i ? "orange":"black";
    const currentImags = this.props.activeTab == i ? this.props.tabIconSelectedNames : this.props.tabIconNames;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={()=>this.props.goToPage(i)}
        key={i}
        style={styles.tab}

      >
        <View style={styles.tabItem}>
          {/*图标*/}
          <Image
            source={{uri:currentImags[i]}}
            style={{width:30,height:30}}
          />
            {/*文字*/}
            <Text style={{color:color}}>{this.props.tabNames[i]}</Text>
        </View>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  tabsStyle:{
    flexDirection:'row',
    height:50
  },
  tabItem:{
    justifyContent:'center',
    alignItems:'center'
  },
  tab:{
    flex:1,
  }
});

AppRegistry.registerComponent('NewsApp', () => NewsApp);
