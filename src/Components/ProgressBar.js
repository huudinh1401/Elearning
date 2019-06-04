import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse } from '../redux/actionCreators';

class ProgressBar extends Component {
    render() {
        const {backgroundColor} = this.props;
        return (
            <View style={{ 
                flex: 1,
                backgroundColor: backgroundColor,
                height: 10 * ratio(height),
                borderRadius: 3 * ratio(height),
            }}>
            </View>
        );
    }
}
const {height} = Dimensions.get('window');
export function ratio(height) {
    return (height / 568);
}
function mapStateToProps(state) {
    return {
      dataSource: state.dataSource,
      Choosed: state.Choosed,
      Checking: state.Checking,
      textAnswer: state.textAnswer,
      textTitle: state.textTitle,
      backgroundColorChecking: state.backgroundColorChecking
    };
  }
  
  export default connect(mapStateToProps, { isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse })(ProgressBar);