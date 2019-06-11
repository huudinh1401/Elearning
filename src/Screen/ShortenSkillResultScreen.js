
  
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ResultShortenSkill from '../Components/ResultShortenSkill';


export default class ShortenSkillResult extends Component {
    
  
  render() {

    const {navigate} = this.props.navigation;
    const title = this.props.navigation.getParam ('title', 'Kiểm Tra Rút Gọn 3 Kỹ Năng');
    const Title = this.props.navigation.getParam ('Title', 'Kiểm Tra Rút Gọn 3 Kỹ Năng');
    return (
        <View style={styles.container}>
          <ResultShortenSkill
            title = {title}
            Title = {Title}
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
