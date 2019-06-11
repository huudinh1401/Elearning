
  
import React, { Component } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import getContentShorten from '../data/getContentShorten';
import { fetchError, fetchSuccess ,isContinue, LevelRutGon3, LevelRutGon6, LevelRutGon9  } from '../redux/actionCreators';
import ItemTest from './ItemTest';
import Form from './Form';
import ButtonCheck from './ButtonCheck';
import ProgressBar from './ProgressBar';



class ShortenTest extends Component {
 
  componentDidMount(){
    const { Title, stt } = this.props;

    getContentShorten(Title, stt)
    .then((dataSource) => {
      this.props.fetchSuccess(dataSource);
    })
    .catch(()=>this.props.fetchError())
  }
  setLevelTitle(){
    const {title, Score, Level} = this.props;
    //console.log(Level);
    if (Score == 3 && Level < 1){
      switch (title){
          case "Kiểm Tra Rút Ngắn 3 Kỹ Năng": return this.props.LevelRutGon3();
          case "Kiểm Tra Rút Ngắn 6 Kỹ Năng": return this.props.LevelRutGon6();
          case "Kiểm Tra Rút Ngắn 9 Kỹ Năng": return this.props.LevelRutGon9();
          default: break;
      }
    }
  };

  onPressContinue = (title, Title, Level) => {
    const {stt} = this.props;
    if (stt == 3){
      this.setLevelTitle();
      this.props.navigate ('ShortenSkillResult', { title: title, Title: Title });
    }
    else {
      console.log(Level);
      if (stt % 2 == 0)
        this.props.navigate ('Next1', { title: title, Title: Title, Level: Level});
      else  this.props.navigate ('NextNext1', { title: title, Title: Title, Level: Level});
    }
    if (stt < 3)
      this.props.isContinue();
  }
  getProgressBar(item){
    if (item == 1) return 'green';
    else if (item == 2 ) return 'red';
    else return '#999';
  }

  render() {
    const {textTitle, textAnswer, backgroundColorChecking} = this.props;
    const { Title, title, stt, Level } = this.props;
    const { type, content, answerA, answerB, answerC, answerD, answer } = this.props.dataSource;
    const { Score1, Score2, Score3 } = this.props;

    return (
      
      <ImageBackground source={require('../image/hoavan.jpg')} style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18 * ratio(height)}}> Kiểm Tra Rút Ngắn Kỹ Năng</Text>
          </View>
          <View style={{ flex: 1, justifyContent:'center' }}>
            
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
                <TouchableOpacity style={styles.buttonContinue}  onPress={ () => this.onPressContinue(title, Title, Level)}>  
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
    backgroundColor: '#999',
    height: 10 * ratio(height),
    borderRadius: 5 * ratio(height),
  },

  buttonContinue: {
    borderRadius: 5 * ratio(height),
    alignItems: 'center',
    backgroundColor:'blue',
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
    fontSize: 14 * ratio(height),
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
                                          isContinue, LevelRutGon3, LevelRutGon6, LevelRutGon9 })(ShortenTest);