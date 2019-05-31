
  
import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import getContent from '../data/getContent';
import { fetchError, fetchSuccess, isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse, isContinue } from '../redux/actionCreators';
import ItemTest from './ItemTest';
import Form from './Form';
import ButtonCheck from './ButtonCheck';
// import ButtonContinue from './ButtonContinue';



class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
    }
  }
  //this.onPressContinue(title,level, img, Title, stt)
  componentDidMount(){
    const { Title, level, stt } = this.props;

    getContent(Title, level, stt)
    .then((dataSource) => {
      this.props.fetchSuccess(dataSource);
      this.setState({
        isLoading: false
      });
    })
    .catch(()=>this.props.fetchError())
  }

  onPressContinue = (title, level, image, Title, stt) => {
    this.props.isContinue();
    if (stt == 3)
      this.props.navigate ('Result', { title: title, Title: Title, level: level, img: image });
    else {
      if (stt % 2 == 0)
        this.props.navigate ('NextNext', { title: title, Title: Title, level: level, img: image, stt: stt + 1 });
      else  this.props.navigate ('Next', { title: title, Title: Title, level: level, img: image, stt: stt + 1 });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 3, padding: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }

    const {textTitle, textAnswer, backgroundColorChecking} = this.props;
    const { Title, level, img, title, stt } = this.props;
    const { type, content, answerA, answerB, answerC, answerD, answer } = this.props.dataSource;
    
    return (
      
      <ImageBackground source={require('../image/hoavan.jpg')} style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center' }}>
            <View style={styles.styleTheme}>
              <Text style={styles.textTheme}>Chủ Đề: {title}</Text>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'center'}}>
              <Text style={styles.textTop}>Câu thứ: { stt }/3</Text>
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
                <TouchableOpacity style={styles.buttonContinue}  onPress={ () => this.onPressContinue(title,level, img, Title, stt)}>  
                    <Text style={styles.textContinueButton}> Tiếp Tục </Text>
                </TouchableOpacity> : <ButtonCheck answer = {answer} Choosed = {this.props.Choosed}/>
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
    marginTop: 15 * ratio(height),
  },
  textTheme: {
    fontSize: 16 * ratio(height),
    fontWeight: 'bold',
    color: '#880000',
    padding: 5 * ratio(height),
  },
  textTop: {
    fontSize: 16 * ratio(height),
    fontWeight: 'bold',
    color: '#993366',
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

export default connect(mapStateToProps, { fetchSuccess, fetchError, isChoosingA, isChoosingB, isChoosingC, isChoosingD, isCheckingTrue, isCheckingFalse, isContinue })(Test);