
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tts from 'react-native-tts';
import { isChoosingA, isChoosingB, isChoosingC, isChoosingD } from '../redux/actionCreators';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class ButtonAnswer extends Component {
  
  onPressChoosing = (item, answer, type)=>{
    if (type === 'Chọn bản dịch đúng' || type ==='Chọn từ còn thiếu') { Tts.speak(answer); Tts.setDefaultLanguage('en-US') }
    if(item === 'A') this.props.isChoosingA(answer);
    else if (item === 'B') this.props.isChoosingB(answer);
    else if (item === 'C') this.props.isChoosingC(answer);
    else this.props.isChoosingD(answer)        
  }
  getBackgroundChoosing(isChoosing){
      if (isChoosing) return '#66FFFF'
      else return '#999'
  }
  disabledTouch(){
      if (this.props.Choosed) return true;
      return false;
  }
  render() {
    const { ChoosingA, ChoosingB, ChoosingC, ChoosingD } = this.props;
    const { type, answerA, answerB, answerC, answerD } = this.props;

    return (
      <View >
          <TouchableOpacity disabled={this.disabledTouch()} 
                            style={{borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingA), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} 
                            onPress={() => this.onPressChoosing('A', answerA, type)}>  
              <Text style={ styles.textAnswer }>A. { answerA }</Text>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.disabledTouch()} 
                            style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingB), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} 
                            onPress={() => this.onPressChoosing('B', answerB, type)}>  
              <Text style={ styles.textAnswer }>B. { answerB }</Text>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.disabledTouch()} 
                            style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingC), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} 
                            onPress={() => this.onPressChoosing('C', answerC, type)}>  
              <Text style={ styles.textAnswer }>C. { answerC }</Text>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.disabledTouch()} 
                            style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingD), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} 
                            onPress={() => this.onPressChoosing('D', answerD, type)}>  
              <Text style={ styles.textAnswer }>D. { answerD }</Text>
          </TouchableOpacity>
      </View>
  );
  }
}
const {height} = Dimensions.get('window');

export function ratio(height) {
    return (height / 568);
}

const styles = StyleSheet.create({
  textAnswer: {
    padding: 5 * ratio(height), 
    fontSize: 14 * ratio(height), 
    color:'#000' 
  },
  
});
function mapStateToProps(state) {
    return {
      Choosed: state.Choosed,
      ChoosingA: state.ChoosingA, ChoosingB: state.ChoosingB,
      ChoosingC: state.ChoosingC, ChoosingD: state.ChoosingD
    };
  } 
  export default connect(mapStateToProps, { isChoosingA, isChoosingB, isChoosingC, isChoosingD })(ButtonAnswer);