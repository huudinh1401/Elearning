
  
import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import ShortenTest from '../Components/ShortenTest';

const resultScreen = "ShortenSkillResult";
export default class ShortenSkillTest extends Component {
    
    // state = {
    //   text: '3',
    // }
  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const TitleName = this.props.navigation.getParam ('Title', 'No_Name');
    return (
      <View style = {styles.container}>
        <ShortenTest
          navigate = { navigate }
          title = { titleName }
          Title = { TitleName }
          nextScreen = { resultScreen }
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
