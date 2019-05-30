
  
import React, { Component } from 'react';
import { ActivityIndicator, Alert, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import getContent from '../data/getContent';
import { fetchError, fetchSuccess, Choosed } from '../redux/actionCreators';
import ItemTest from './ItemTest';



class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true
    }
  }
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

  onPressButton = (item, level, image, Item, stt) => {
    if (stt == 3)
      this.props.navigate ('Result', { title: item, Title: Item, level: level, img: image });
    else {
      if (stt % 2 == 0)
        this.props.navigate ('NextNext', { title: item, Title: Item, level: level, img: image, stt: stt+1 });
      else  this.props.navigate ('Next', { title: item, Title: Item, level: level, img: image, stt: stt+1 });
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
            type = {type}   content = {content} answer = {answer}
            answerA = {answerA} answerB ={answerB} answerC = {answerC} answerD = {answerD}
           />
          </View>
            
          <View style={{flex: 1 }}>
            <TouchableOpacity style={styles.buttonCheck} onPress={ () => this.onPressButton(title, level, img, Title, stt)}>  
                <Text style={{ padding: 5 * ratio(height), fontWeight: 'bold', fontSize: 18 * ratio(height), color:'#FFFFFF' }}>Tiếp Tục</Text>
            </TouchableOpacity>
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
  buttonCheck: {
    borderRadius: 5 * ratio(height),
    alignItems: 'center',
    backgroundColor:'#330099',
    margin: 30 * ratio(height),
  },
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
    Choosed: state.Choosed
  };
}

export default connect(mapStateToProps, { fetchSuccess, fetchError, Choosed })(Test);