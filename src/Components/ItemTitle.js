import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
// import { connect } from 'react-redux';
// import { getItem1, getItem2 ,getItem3, getItem4  } from '../redux/actionCreators';


export default class ItemTitle extends Component {
  getLevelText(item){
    if (item == 0)
      return 'Easy';
    else if (item == 1)
          return 'Medium';
    else if (item == 2)
          return 'Difficult';
    else if (item == 3)
          return 'Difficult';
    return 'Difficult';
  }
  
  _onPressButton = (item, Level, image, Item) => {
    
    Alert.alert(
      item, 'Level: ' + this.getLevelText(Level),
      [
        { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Bắt Đầu', onPress: () => {this.props.navigate ('Test', {title: item, Title: Item, Level: Level, img: image})
        }},
      ],
      {cancelable: false},
    )  
  }
  getImageLevel (Level){
    if (Level == 3)
      return require('../image/3.png');
    if (Level == 1)
      return require('../image/1.png');
    if (Level == 2)
      return require('../image/2.png');
    return require('../image/0.png');
  }

  disabledTouch(Level){
    if (Level == -1)
      return true;
    return false;
  }

  getBackgroundColor(Level){
    if (Level == -1)
      return '#999';
    return '#CC33FF';
  }

  getBorderColor(Level){
    if (Level == -1)
      return '#999';
    return '#FFCC00';
  }
 
  
  render() {
    //const {title, Title, level, img, id} = this.props.myTitle;

    const {item1, item2, item3} = this.props;
    const {Item1, Item2, Item3} = this.props;
    const {image1, image2, image3} = this.props;
    const {Level1, Level2, Level3} = this.props;
    const {itemTest, ItemTest} = this.props;
    
    return (
        <View style={{ alignItems: 'center', padding: 10 * ratio(height) }}>
         
          {/* Start Group */}

          {/* Theme Top */}
          <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height)}}>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
              <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(Level1), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(Level1), borderRadius: 100}} >
                  <TouchableOpacity disabled={this.disabledTouch(Level1)} onPress={ () => this._onPressButton(item1, Level1, image1, Item1)}>  
                        <Image style={styles.ImgTop} source={image1}></Image> 
                  </TouchableOpacity>
                </View>
                
              </View>
              <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.getImageLevel(Level1)}></Image>
            </View>
            <Text style={styles.textStyle}>{item1}</Text>
          </View>
          {/* End Theme Top */}

          {/* Theme Bottom */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 * ratio(height) }}>

            {/* Theme Left */}
            <View style={{paddingRight: 40 * ratio(height)}}>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(Level2), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(Level2), borderRadius: 100}} >
                    <TouchableOpacity disabled={this.disabledTouch(Level2)} onPress={ () => this._onPressButton(item2, Level2, image2, Item2)}>  
                          <Image style={styles.ImgTop} source={image2}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.getImageLevel(Level2)}></Image>
              </View>
                <Text style={styles.textStyle}>{item2}</Text>
            </View>

            {/* Theme Right */}
            <View>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15 * ratio(height)}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getBorderColor(Level3), borderWidth:3 * ratio(height), borderRadius: 100, width:70 * ratio(height), height:70 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: this.getBackgroundColor(Level3), borderRadius: 100}} >
                    <TouchableOpacity disabled={this.disabledTouch(Level3)} onPress={ () => this._onPressButton(item3, Level3, image3, Item3)}>  
                          <Image style={styles.ImgTop} source={image3}></Image>   
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10 * ratio(height), marginLeft: 5 * ratio(height), width: 15 * ratio(height), height: 50 * ratio(height)}} source={this.getImageLevel(Level3)}></Image>
              </View>
              <Text style={styles.textStyle}>{item3}</Text>
            </View>
            {/* End Theme Bottom */}
            
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigate ('ShortenSkillTest', {title: itemTest, Title: ItemTest})}>  
            <Text style={{ padding: 5 * ratio(height), textDecorationLine: 'underline', fontSize: 12 * ratio(height), color:'#FFFFFF' }}>
              {itemTest}
            </Text>
          </TouchableOpacity>
        
          {/* End Group */}
        </View> 
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     item1: state.item1,
//     Item1: state.Item1,
//     image1: state.image1,

//     item2: state.item2,
//     Item2: state.Item2,
//     image2: state.image2,

//     item3: state.item3,
//     Item3: state.Item3,
//     image3: state.image3,

//     itemTest: state.itemTest,
//     ItemTest: state.ItemTest,
    
//   };
// }

// export default connect(mapStateToProps, { getItem1, getItem2,
//                                           getItem3, getItem4 })(ItemTitle);




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
    backgroundColor:'#00AA00'
  },

  textStyle:{
    color:'#990000',
    fontSize:12 * ratio(height),
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  }
});
