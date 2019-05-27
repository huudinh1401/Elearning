import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Test from '../Components/Test';


const resultScreen = "Result";
export default class Exercise extends Component {
    static navigationOptions = {
        title: 'Bài Học',
    }
 
  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const TitleName = this.props.navigation.getParam ('Title', 'No_Name');
    const titleLevel = this.props.navigation.getParam ('level', 'No_Name');
    const titleImage = this.props.navigation.getParam ('img', 'No_Name');
    const stt = this.props.navigation.getParam ('stt', 'No_Name');
    return (
      <View style = {styles.container}>
        <Test
          navigate = { navigate }
          title = { titleName }
          Title = { TitleName }
          level = { titleLevel }
          img = { titleImage }
          stt = { stt }
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
