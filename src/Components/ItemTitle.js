import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isFinish } from '../redux/actionCreators';
import { Text, View, Alert, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';


class ItemTitle extends Component {
  getLevelText(item){
    if (item == 0) return 'Easy';
    else if (item == 1) return 'Medium';
    else if (item == 2) return 'Difficult';
    else if (item == 3) return 'Difficult';
    return 'Difficult';
  }
  
  _onPressButton = (item, Level, image, Item) => {
    Alert.alert(
      item, 'Level: ' + this.getLevelText(Level),
      [
        { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Bắt Đầu', onPress: () => { this.props.navigate ('Test', { title: item, Title: Item, Level: Level, img: image }) }},
      ],
      {cancelable: false},
    )
    this.props.isFinish();
  }
  getImageLevel (Level){
    if (Level == 3) return require('../image/3.png');
    if (Level == 1) return require('../image/1.png');
    if (Level == 2) return require('../image/2.png');
    return require('../image/0.png');
  } 
  disabledTouch(Level){
    if (Level > -1)  return false;
    return true;
  } 
  getBackgroundColor(Level){
    if (Level == -1) return '#999';
    return '#CC33FF';
  } 
  getBorderColor(Level){
    if (Level == -1)  return '#999';
    return '#FFCC00';
  }
  render() {
    const {item, Item, image, Level} = this.props;
    return (
        <View>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(Level), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height)}}>
                    <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(Level), borderRadius: 100}} >
                        <TouchableOpacity disabled={this.disabledTouch(Level)} onPress={ () => this._onPressButton(item, Level, image, Item)}>  
                            <Image style={styles.ImgTop} source={image}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.getImageLevel(Level)}></Image>
            </View>
                <Text style={styles.textStyle}>{item}</Text>
        </View>
    );
  }
}
export default connect(null, { isFinish })(ItemTitle);
const {height} = Dimensions.get('window');
function ratio(height) {
  return (height / 568);
}

const styles = StyleSheet.create({
  content: {
    justifyContent:'center',
  },
  ImgTop: {
    width:60 * ratio(height), height:60 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50 * ratio(height)
  },

  textStyle:{
    color:'#990000',
    fontSize:12 * ratio(height),
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  }
});
