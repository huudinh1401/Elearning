import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isFinish } from '../redux/actionCreators';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ItemTitle from './ItemTitle';

class GroupTitle extends Component {
  _onPressButtonShorten = (itemTest, ItemTest, Level) => {
    
    this.props.navigate ('ShortenSkillTest', {title: itemTest, Title: ItemTest, Level: Level});
    this.props.isFinish();
  }

  render() {
    const { navigate } = this.props;
    const {item1, item2, item3} = this.props;
    const {Item1, Item2, Item3} = this.props;
    const {image1, image2, image3} = this.props;
    const {Level1, Level2, Level3, Level4} = this.props;
    const {itemTest, ItemTest} = this.props;
    
    return (
        <View style={{ alignItems: 'center', padding: 10 * ratio(height) }}>
          <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height)}}>
            <ItemTitle
              item = {item1} Item = {Item1} image = {image1} Level = {Level1} navigate = { navigate }
            />
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 20 * ratio(height) }}>
            <View style={{paddingRight: 40 * ratio(height)}}>
              <ItemTitle
                item = {item2} Item = {Item2} image = {image2} Level = {Level2} navigate = { navigate }
              />
            </View>
            <View>
              <ItemTitle
                item = {item3} Item = {Item3} image = {image3} Level = {Level3} navigate = { navigate }
              />
            </View>
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this._onPressButtonShorten (itemTest, ItemTest, Level4)}>  
            <Text style={{ padding: 5 * ratio(height), textDecorationLine: 'underline', fontSize: 12 * ratio(height), color:'#FFFFFF' }}>
              {itemTest}
            </Text>
          </TouchableOpacity>
        </View> 
    );
  }
}


export default connect(null, { isFinish })(GroupTitle);


const {height} = Dimensions.get('window');
function ratio(height) {
  return (height / 568);
}

const styles = StyleSheet.create({
  content: {
    justifyContent:'center',
  },
  containerItem: {
    borderRadius: 10 * ratio(height),
    alignItems: 'center',
    backgroundColor:'#00AA00'
  },
});
