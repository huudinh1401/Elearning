import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchError, fetchSuccess, isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse, isContinue } from '../redux/actionCreators';

class ButtonContinue extends Component {
    onPressContinue = (title, Level, image, Title, stt) => {
        this.props.isContinue();
        if (stt == 3)
          this.props.navigate ('Result', { title: title, Title: Title, Level: Level, img: image });
        else {
          if (stt % 2 == 0)
            this.props.navigate ('NextNext', { title: title, Title: Title, Level: Level, img: image, stt: stt + 1 });
          else  this.props.navigate ('Next', { title: title, Title: Title, Level: Level, img: image, stt: stt + 1 });
        }
    }

    render() {
        const { Title, Level, img, title, stt } = this.props;
        return (
            
                <TouchableOpacity style={styles.buttonContinue}  onPress={ () => this.onPressContinue(title,Level, img, Title, stt)}>  
                    <Text style={{ padding: 5 * ratio(height), textDecorationLine: 'underline',fontWeight: 'bold', fontSize: 18 * ratio(height), color:'#FFFFFF' }}>Tiếp Tục</Text>
                </TouchableOpacity>
            
        );
    }
}
const {height} = Dimensions.get('window');
export function ratio(height) {
    return (height / 568);
}
const styles = StyleSheet.create({
    buttonContinue: {
        borderRadius: 5 * ratio(height),
        alignItems: 'center',
        backgroundColor:'green',
        marginHorizontal: 30 * ratio(height),
        marginTop: 10 * ratio(height),
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
  
  export default connect(mapStateToProps, { fetchSuccess, fetchError, isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse, isContinue })(ButtonContinue);