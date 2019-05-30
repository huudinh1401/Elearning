
  
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ResultShortenSkill from '../Components/ResultShortenSkill';


export default class ShortenSkillResult extends Component {
    
  
  render() {

    const {navigate} = this.props.navigation;
    const level = this.props.navigation.getParam ('level', 'Kiểm Tra Rút Gọn 3 Kỹ Năng');
    return (
        <View style={styles.container}>
          <ResultShortenSkill
            level = {level}
            navigate = {navigate}
          />
          
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
