import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import ShortenTest from '../Components/ShortenTest';


export default class Next extends Component {
  

  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const TitleName = this.props.navigation.getParam ('Title', 'No_Name');
    const titleLevel = this.props.navigation.getParam ('Level', 'No_Name');

    return (
      <View style = {styles.container}>
        <ShortenTest
          navigate = { navigate }
          title = { titleName }
          Title = { TitleName }
          Level = { titleLevel }

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
