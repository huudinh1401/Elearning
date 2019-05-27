import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';


export default class ItemTitle extends Component {
  // abc (a, b, c){
  //   return getContent(a,b,c)
  //   .then((content) => {return content})
  //   .catch(err => console.log(err));
  // }
  _onPressButton = (item, level, image, Item, stt) => {
    Alert.alert(
      item, 'Mức độ: ' + level,
      [
        { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Bắt Đầu', onPress: () => {this.props.navigate ('Test', {title: item, Title: Item, level: level, img: image, stt: stt})
        }},
      ],
      {cancelable: false},
    )  
  }


  disabledTouch(level){
    if (level==='Chưa mở')
      return true;
    return false;
  }

  getBackgroundColor(level){
    if (level==='Chưa mở')
      return '#999';
    return '#CC33FF';
  }

  getBorderColor(level){
    if (level==='Chưa mở')
      return '#999';
    return '#FFCC00';
  }
  
  render() {
    return (
        <View style={{ alignItems: 'center', padding: 10 * ratio(height) }}>

          {/* Start Group */}

          {/* Theme Top */}
          <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height)}}>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
              <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(this.props.level1), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(this.props.level1), borderRadius: 100}} >
                  <TouchableOpacity disabled={this.disabledTouch(this.props.level1)} onPress={ () => this._onPressButton(this.props.item1, this.props.level1, this.props.image1,this.props.Item1, this.props.stt)}>  
                        <Image style={styles.ImgTop} source={this.props.image1}></Image> 
                  </TouchableOpacity>
                </View>
                
              </View>
              <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.props.imageLevel1}></Image>
            </View>
            <Text style={styles.textStyle}>{this.props.item1}</Text>
          </View>
          {/* End Theme Top */}

          {/* Theme Bottom */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 * ratio(height) }}>

            {/* Theme Left */}
            <View style={{paddingRight: 40 * ratio(height)}}>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(this.props.level2), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(this.props.level2), borderRadius: 100}} >
                    <TouchableOpacity disabled={this.disabledTouch(this.props.level2)} onPress={ () => this._onPressButton(this.props.item2, this.props.level2, this.props.image2, this.props.Item2)}>  
                          <Image style={styles.ImgTop} source={this.props.image2}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.props.imageLevel2}></Image>
              </View>
                <Text style={styles.textStyle}>{this.props.item2}</Text>
            </View>

            {/* Theme Right */}
            <View>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(this.props.level3), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(this.props.level3), borderRadius: 100}} >
                    <TouchableOpacity disabled={this.disabledTouch(this.props.level3)} onPress={ () => this._onPressButton(this.props.item3, this.props.level3, this.props.image3, this.props.Item3)}>  
                          <Image style={styles.ImgTop} source={this.props.image3}></Image>   
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.props.imageLevel3}></Image>
              </View>
              <Text style={styles.textStyle}>{this.props.item3}</Text>
            </View>
            {/* End Theme Bottom */}
            
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigate ('ShortenSkillTest', {title: this.props.itemTest, Title: this.props.ItemTest})}>  
            <Text style={{ padding: 5 * ratio(height), textDecorationLine: 'underline', fontSize: 12 * ratio(height), color:'#FFFFFF' }}>
              {this.props.itemTest}
            </Text>
          </TouchableOpacity>
        
          {/* End Group */}
        </View> 
    );
  }
}
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
  containerItem: {
    borderRadius: 10 * ratio(height),
    alignItems: 'center',
    backgroundColor:'#FF9900'
  },

  textStyle:{
    color:'#990000',
    fontSize:12 * ratio(height),
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  }
});
