
  
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ResultTest from '../Components/ResultTest'

export default class Result extends Component {
    
 
  render() {
    const { navigate } = this.props.navigation;
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const Level = this.props.navigation.getParam ('Level', 'No_Name');
    const image = this.props.navigation.getParam ('img', 'No_Name');
    return (
        <View style={styles.container}>
          <ResultTest
            navigate = { navigate }
            Level = { Level }
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
