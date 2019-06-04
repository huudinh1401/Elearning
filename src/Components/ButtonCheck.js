import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { isCheckingTrue, isCheckingFalse, isScore1, isScore2, isScore3 } from '../redux/actionCreators';

class ButtonCheck extends Component {
    onPressChecking = () => {
        const { Choosed, answer, stt } = this.props;
        
        if (Choosed === answer){
          this.props.isCheckingTrue();
          if (stt == 1) this.props.isScore1();
          else if (stt==2) this.props.isScore2();
          else this.props.isScore3();
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
      Choosed: state.Choosed,
      Checking: state.Checking,
      Score: state.Score,
      Score1: state.Score1,
      Score2: state.Score2,
      Score3: state.Score3,
      textAnswer: state.textAnswer,
      textTitle: state.textTitle,
      backgroundColorChecking: state.backgroundColorChecking
    };
  }
  
  export default connect(mapStateToProps, {isCheckingTrue, isCheckingFalse, isScore1, isScore2, isScore3})(ButtonCheck);