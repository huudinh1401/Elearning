
  
import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Test from '../Components/Test';

const resultScreen = "ShortenSkillResult";
export default class ShortenSkillTest extends Component {
    static navigationOptions = {
        title: 'Kiểm Tra Rút Ngắn Kỹ Năng',
    }
    // state = {
    //   text: '3',
    // }
  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    return (
      <View style = {styles.container}>
        <Test
          navigate = { navigate }
          title = { titleName }

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
