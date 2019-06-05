
  
import React, { Component } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import getContent from '../data/getContent';
import { fetchError, fetchSuccess ,isContinue, getLevelCB1 } from '../redux/actionCreators';
import ItemTest from './ItemTest';
import Form from './Form';
import ButtonCheck from './ButtonCheck';
import ProgressBar from './ProgressBar';




class Test extends Component {
 
  componentDidMount(){
    const { Title, Level, stt } = this.props;

    getContent(Title, this.getLevelText(Level), stt)
    .then((dataSource) => {
      this.props.fetchSuccess(dataSource);
    })
    .catch(()=>this.props.fetchError())
  }
  getLevelText(item){
    if (item == 0)
      return 'Easy';
    else if (item == 1)
          return 'Medium';
    else if (item == 2)
          return 'Difficult';
    else if (item == 3)
          return 'Difficult';
    return 'Difficult';
  }

  onPressContinue = (title, Level, image, Title, stt) => {
    if (stt == 3){
      this.props.navigate ('Result', { title: title, Title: Title, Level: Level, img: image });
    }
    else {
      if (stt % 2 == 0)
        this.props.navigate ('NextNext', { title: title, Title: Title, Level: Level, img: image, stt: stt});
      else  this.props.navigate ('Next', { title: title, Title: Title, Level: Level, img: image, stt: stt});
    }
    if (stt < 3)
      this.props.isContinue();
  }
  getProgressBar(item){
    if (item == 1) return 'green';
    else if (item == 2 ) return 'red';
    else return '#DDDDDD';
  }

  render() {
    const {textTitle, textAnswer, backgroundColorChecking} = this.props;
    const { Title, Level, img, title, stt } = this.props;
    const { type, content, answerA, answerB, answerC, answerD, answer } = this.props.dataSource;
    const { Score1, Score2, Score3 } = this.props;

    return (
      
      <ImageBackground source={require('../image/hoavan.jpg')} style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18 * ratio(height)}}> Bài Học</Text>
          </View>
          <View style={{ flex: 2, justifyContent:'center' }}>
            
            <View style={styles.styleTheme}>
              <Text style={styles.textTheme}>Chủ Đề: {title}</Text>
            </View>

            <View style={styles.styleProgressBar}>
              <ProgressBar backgroundColor = { this.getProgressBar(Score1) }/>
              <ProgressBar backgroundColor = { this.getProgressBar(Score2) }/>
              <ProgressBar backgroundColor = { this.getProgressBar(Score3) }/> 
            </View>
          </View>

          <View style={{flex: 4 }}>
           <ItemTest
            type = {type}   content = {content} answer = {answer} stt = {stt}
            answerA = {answerA} answerB ={answerB} answerC = {answerC} answerD = {answerD}
           />
          </View>
            
          <View style={{flex: 2, marginTop: 70 * ratio(height), backgroundColor: backgroundColorChecking}}>
            <View style={{marginTop: 20 * ratio(height)}}>
              { this.props.Checking? <Form textTitle = { textTitle } textAnswer = { textAnswer }/>: null}
            </View>
            <View > 
              {
                this.props.Checking? 
                <TouchableOpacity style={styles.buttonContinue}  onPress={ () => this.onPressContinue(title,Level, img, Title, stt)}>  
                    <Text style={styles.textContinueButton}> Tiếp Tục </Text>
                </TouchableOpacity> : <ButtonCheck stt = {stt} answer = {answer} Choosed = {this.props.Choosed}/>
              } 
              </View>
          </View>
          
        </View>
      </ImageBackground>
      
    );
  }
}
const {height} = Dimensions.get('window');

export function ratio(height) {
    return (height / 568);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:'row',
    justifyContent: 'space-around',
    backgroundColor:'#339966',
    height: 55 * ratio(height),
    paddingTop: 15* ratio(height),
  },

  styleProgressBar:{ 
    flexDirection:'row',
    justifyContent:'center',
    marginHorizontal: 70 * ratio(height),
    backgroundColor: '#DDDDDD',
    height: 10 * ratio(height),
    borderRadius: 5 * ratio(height),
  },

  buttonContinue: {
    borderRadius: 5 * ratio(height),
    alignItems: 'center',
    backgroundColor:'green',
    marginHorizontal: 30 * ratio(height),
    marginTop: 10 * ratio(height),
  },
  textContinueButton: { 
    padding: 5 * ratio(height), 
    textDecorationLine: 'underline',
    fontWeight: 'bold', 
    fontSize: 18 * ratio(height), 
    color:'#FFFFFF' },

  styleTheme: {
    backgroundColor:'#FFFFCC',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom: 5 * ratio(height),
    borderRadius: 5 * ratio(height),
    marginHorizontal: 30 * ratio(height),
    marginTop: 10 * ratio(height),
  },
  textTheme: {
    fontSize: 16 * ratio(height),
    fontWeight: 'bold',
    color: '#880000',
    padding: 5 * ratio(height),
  },
  
});

function mapStateToProps(state) {
  return {
    dataSource: state.dataSource,
    error: state.error,
    stt: state.stt,
    Choosed: state.Choosed,
    Checking: state.Checking,
    textAnswer: state.textAnswer,
    textTitle: state.textTitle,
    backgroundColorChecking: state.backgroundColorChecking,
    Score1: state.Score1,
    Score2: state.Score2,
    Score3: state.Score3,
    Score: state.Score,
  };
}

export default connect(mapStateToProps, { fetchSuccess, 
                                          fetchError,
                                          isContinue, getLevelCB1 })(Test);