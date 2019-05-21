import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';




export default class HomeComponent extends Component {

  _onPressButton = (item, level, image) => {
    Alert.alert(
      item, 'Mức độ: ' + level,
      [
        { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Bắt Đầu', onPress: () => this.props.navigate ('Test', {title: item, level: level, img: image})},
      ],
      {cancelable: false},
    )  
  }

  render() {

    return (
        <View style={{ alignItems: 'center', padding: 10 * ratio(height) }}>

          {/* Start Group 1 */}

          {/* Theme Top */}
          <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height)}}>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
              <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: '#999', borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 100}} >
                  <TouchableOpacity onPress={ () => this._onPressButton(this.props.item1, this.props.level1, this.props.image1)}>  
                        <Image style={styles.ImgTop} source={this.props.image1}></Image> 
                  </TouchableOpacity>
                </View>
                
              </View>

              <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={require('../image/1.png')}></Image>
            </View>
            
            <Text style={styles.textStyle}>{this.props.item1}</Text>
           
          </View>
          {/* End Theme Top */}

          {/* Theme Bottom */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 * ratio(height) }}>

            {/* Theme Left */}
            <View style={{paddingRight: 40 * ratio(height)}}>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: '#999', borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 100}} >
                    <TouchableOpacity onPress={ () => this._onPressButton(this.props.item2, this.props.level2, this.props.image2)}>  
                          <Image style={styles.ImgTop} source={this.props.image2}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={require('../image/0.png')}></Image>
              </View>
                <Text style={styles.textStyle}>{this.props.item2}</Text>
            </View>

            {/* Theme Right */}
            <View>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: '#999', borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 100}} >
                    <TouchableOpacity disabled={true} onPress={() => { Alert.alert('Hello World!');}}>  
                          <Image style={styles.ImgTop} source={this.props.image3}></Image>   
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={require('../image/0.png')}></Image>
              </View>
              <Text style={styles.textStyle}>{this.props.item3}</Text>
            </View>
            {/* End Theme Bottom */}
            
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigate ('ShortenSkillTest', {title: this.props.itemTest})}>  
            <Text style={{ padding: 5 * ratio(height), textDecorationLine: 'underline', fontSize: 12 * ratio(height), color:'#FFFFFF' }}>
              {this.props.itemTest}
            </Text>
          </TouchableOpacity>
          {/* End Group 1 */}
        </View> 
    );
  }
}
const {height} = Dimensions.get('window');
export function ratio(height) {
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
