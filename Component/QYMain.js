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
  View
} from 'react-native';
// 引入导航
import {Navigator} from 'react-native-deprecated-custom-components';
// 引入三方框架
import ScrollableTabView, { DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
// 引入其他的模块
import QYHome from './QYHome';
import QYMine from './QYMine';
import QYFind from './QYFind';
import QYMessage from './QYMessage';

// 引入自定义tabBar
import QYTabBar from './QYTabBar';

export default class QYMain extends Component {

  constructor(props) {
    super(props);
    this.state={
      tabNames:['首页','我的','发现','消息'],
      tabIconNames:['tabbar_home','tabbar_profile','tabbar_discover','tabbar_message_center'],
      tabIconSelcetdImages:['tabbar_home_highlighted','tabbar_profile_highlighted','tabbar_discover_highlighted','tabbar_message_center_highlighted']
    }
  }

  render() {
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    let tabIconSelctedIamges = this.state.tabIconSelcetdImages;
    return (
      <ScrollableTabView
        renderTabBar={
          () => <QYTabBar
            tabNames={tabNames}
            tabIconNames={tabIconNames}
            tabIconSelectedNames={tabIconSelctedIamges}/>
        }
        tabBarPosition={"bottom"}
        // 常用属性
        // onChangeTab={
        //   (obj) => {
        //     console.log('切换到了'+obj.i+'个')
        //   }
        // }
        // onScroll={
        //   float
        //   (position) => {
        //     console.log('监听到滚动'+position)
        //   }
        // }
        // 锁定滚动
        locked={true}
        // 切换效果
        scrollWithoutAnimation={true}
      >
        <Navigator
          tabLabel="首页"
          initialRoute={{
            component:QYHome,
            params:{
              title:'首页'
            },
          }}
          renderScene = {(route,navigator)=>
            <route.component navigator={navigator} {...route.params}/>
          }
        />
        <Navigator
          tabLabel="我的"
          initialRoute={{
            component:QYMine,
            params:{
              title:'我的'
            },
          }}
          renderScene = {(route,navigator)=>
            <route.component navigator={navigator} {...route.params}/>
          }
        />
        <Navigator
          tabLabel="发现"
          initialRoute={{
            component:QYFind,
            params:{
              title:'发现'
            },
          }}
          renderScene = {(route,navigator)=>
            <route.component navigator={navigator} {...route.params}/>
          }
        />
        <Navigator
          tabLabel="消息"
          initialRoute={{
            component:QYMessage,
            params:{
              title:'消息'
            },
          }}
          renderScene = {(route,navigator)=>
            <route.component navigator={navigator} {...route.params}/>
          }
        />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewsApp', () => NewsApp);
