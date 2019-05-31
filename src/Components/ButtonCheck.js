import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchError, fetchSuccess, isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse, isContinue } from '../redux/actionCreators';

class ButtonCheck extends Component {
    onPressChecking = () => {
        const { Choosed, answer } = this.props;
        
        if (Choosed === answer){
          this.props.isCheckingTrue();
          
        }
        else {
          this.props.isCheckingFalse(answer);
        }
    }
    disabledTouchCheckButton(){
    if (this.props.Choosed)
        return false;
    return true;
    }
    getbackgroundColorCheckingButton(){
    if(this.props.Choosed)
        return styles.buttonCheck
    return styles.buttonCheckDisabled
    }
    render() {
        return (
            
                <TouchableOpacity disabled = {this.disabledTouchCheckButton()} style={this.getbackgroundColorCheckingButton()}  onPress={ () => this.onPressChecking()}>  
                  <Text style={{ padding: 5 * ratio(height), textDecorationLine: 'underline',fontWeight: 'bold', fontSize: 18 * ratio(height), color:'#FFFFFF' }}>Kiểm Tra</Text>
                </TouchableOpacity>
            
        );
    }
}
const {height} = Dimensions.get('window');
export function ratio(height) {
    return (height / 568);
}
const styles = StyleSheet.create({
    buttonCheck: {
        borderRadius: 5 * ratio(height),
        alignItems: 'center',
        backgroundColor:'green',
        marginHorizontal: 30 * ratio(height),
        marginTop: 50 * ratio(height),
    },
    buttonCheckDisabled: {
    borderRadius: 5 * ratio(height),
    alignItems: 'center',
    backgroundColor:'#999',
    marginHorizontal: 30 * ratio(height),
    marginTop: 50 * ratio(height),
    },
});
function mapStateToProps(state) {
    return {
      dataSource: state.dataSource,
      error: state.error,
      Choosed: state.Choosed,
      Checking: state.Checking,
      textAnswer: state.textAnswer,
      textTitle: state.textTitle,
      backgroundColorChecking: state.backgroundColorChecking
    };
  }
  
  export default connect(mapStateToProps, { fetchSuccess, fetchError, isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse, isContinue })(ButtonCheck);