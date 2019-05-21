
  
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ResultTest from '../Components/ResultTest'

export default class Result extends Component {
    static navigationOptions = {
        title: 'Kết Quả',
    };
 
  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const level = this.props.navigation.getParam ('level', 'Trung Bình');
    const image = this.props.navigation.getParam ('img', 'No_Name');
    return (
        <View style={styles.container}>
          <ResultTest
            navigate = { navigate }
            level = { level }
            title = { titleName }
            image = { image }
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
