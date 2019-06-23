
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
//import { connect } from 'react-redux';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

import ButtonAnswer from './ButtonAnswer';
import Speaking from './Speaking';

export default class ItemTest extends Component {

  // componentWillMount(){
  //   const { type, content } = this.props;
  //   if (type === 'Dịch câu sau') { Tts.speak(content) }  
  // }


  onPressHearing =()=>{
    const { type, content } = this.props;
    if (type === 'Dịch câu sau' || type === 'Đọc câu sau')  { Tts.speak(content); Tts.setDefaultLanguage('en-US') }     
  }
  disabledTouchHearing(){
    const { type } = this.props;
    if (type === 'Dịch câu sau' || type === 'Đọc câu sau') 
      return false;
    return true;
  }
  getImageHear(){
    const { type } = this.props;
    if (type === 'Dịch câu sau' || type === 'Đọc câu sau') 
      return require('../image/ear.png')
    return require('../image/ear_dis.png')
  }
  render() {
    const { type, content, answerA, answerB, answerC, answerD, stt, answer } = this.props;

    return (
      <View style={styles.container}>
        <View style={{flex: 4 }}>
          <View style={styles.styleQuestion}>
            <Text style={ styles.typeText }>Câu {stt}: { type }</Text>
            <View style = {{ flexDirection:'row' }}>
              <Text style={ styles.contentText }>{ content }</Text>
              <TouchableOpacity disabled={this.disabledTouchHearing()} style = {{paddingLeft:  20 * ratio(height)}} onPress={() => this.onPressHearing()}>  
                <Image style={ styles.typeHear } source={this.getImageHear()}></Image>
              </TouchableOpacity>
            </View>
          </View>
          { 
            (type === "Đọc câu sau") ? <Speaking type = {type} answer = {answer}/> : <ButtonAnswer type = {type} answer = {answer} answerA = {answerA} answerB = {answerB} answerC = {answerC} answerD = {answerD}/> 
          }
        </View>
      </View>
    );
  }
}
const {height} = Dimensions.get('window');

export function ratio(height) {
    return (height / 568);
}

const styles = StyleSheet.create({
  container: {  flex: 1 },
  textAnswer: {
    padding: 5 * ratio(height), 
    fontSize: 14 * ratio(height), 
    color:'#000' 
  },
  typeHear:{ 
    width: 20 * ratio(height), 
    height: 20 * ratio(height),
    
  },
  typeText:{ 
    padding: 5 * ratio(height), 
    fontWeight: 'bold', 
    fontSize:  16 * ratio(height), 
    color:'#000' 
  },
  contentText:{ 
    paddingHorizontal: 5 * ratio(height), 
    paddingBottom: 5 * ratio(height), 
    fontSize: 16 * ratio(height), 
    color:'#000' 
  }, 
  styleQuestion: {
    backgroundColor:'#DDDDDD',
    marginBottom: 30 * ratio(height),
    marginHorizontal: 30 * ratio(height),
    marginTop: 10 * ratio(height),
  },
});
// function mapStateToProps(state) {
//     return {
//       Choosed: state.Choosed,
//       ChoosingA: state.ChoosingA, ChoosingB: state.ChoosingB,
//       ChoosingC: state.ChoosingC, ChoosingD: state.ChoosingD
//     };
//   } 
//   export default connect(mapStateToProps, { isChoosingA, isChoosingB, isChoosingC, isChoosingD })(ItemTest);