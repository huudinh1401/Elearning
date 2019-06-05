import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Test from '../Components/Test';

export default class Exercise extends Component {
  

  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const TitleName = this.props.navigation.getParam ('Title', 'No_Name');
    const titleLevel = this.props.navigation.getParam ('Level', 'No_Name');
    const titleImage = this.props.navigation.getParam ('img', 'No_Name');

    return (
      <View style = {styles.container}>
        <Test
          navigate = { navigate }
          title = { titleName }
          Title = { TitleName }
          Level = { titleLevel }
          img = { titleImage } 
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
