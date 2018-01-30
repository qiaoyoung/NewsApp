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
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';
import QYCellView from './QYCellView';

export default class QYHome extends Component {

  constructor(props) {
    super(props);
    this.state={
      // cell的数据
      dataSource:new ListView.DataSource({
        rowHasChanged:(r1,r2) => r1 !== r2
      }),
      base_url:'http://api.budejie.com/api/api_open.php?a=list&c=data&type=29'
    }
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.listViewStyle}
      />
    );
  }

  renderRow(rowData) {

    return(
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.pushToView.bind(this)}
      >
        <View style={styles.cellStyle}>
          {/*上部分*/}
          <View style={styles.topViewStyle}>
            {/*图片*/}
            <Image source={{uri:rowData.profile_image || "tabbar_discover_highlighted"}} style={styles.imageStyle}/>
            {/*名字*/}
            <Text style={styles.nameStyle}>{rowData.name}</Text>
          </View>
          {/*正文*/}
          <Text style={styles.textStyle}>{rowData.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  pushToView() {
    this.props.navigator.push({
      component:QYCellView,
      params:{
        title:'点我返回上一页'
      }
    })
  }
  componentDidMount() {
    // 发送网络请求
    this.loadData();
  }
  // 网络请求的发送
  loadData() {
   return fetch(this.state.base_url)
     .then((response)=>response.json())
     .then((responseJson)=>{
       // 拿到数据
       var jsonData = responseJson.list;
       // 更新数据
       this.setState({
         dataSource:this.state.dataSource.cloneWithRows(jsonData)
       })
     })
  }
  
}

const styles = StyleSheet.create({
  listViewStyle:{
    backgroundColor:'#dddddd',
    paddingTop:20
  },
  cellStyle:{
    margin:5,
    backgroundColor:'white',
  },
  topViewStyle:{
    flexDirection:'row'
  },
  imageStyle:{
    marginLeft:5,
    marginTop:5,
    width:40,
    height:40,
    borderRadius:20,
    borderColor:'red',
    borderWidth:1
  },
  nameStyle:{
    lineHeight:40,
    textAlign:'center',
    paddingLeft:15
  },
  textStyle:{
    padding:5
  }

});

AppRegistry.registerComponent('NewsApp', () => NewsApp);
