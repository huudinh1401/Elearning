
  
import React, { Component } from 'react';
import { Alert, Text, View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator} from 'react-native';
import getContent from '../data/getContent';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      Title: this.props.Title,
      level: this.props.level,
      sttt: 3,
    }
  }
  componentDidMount(){
    getContent(this.state.Title, this.state.level, this.state.sttt)
    .then((dataSource) => {
      this.setState({
        isLoading: false,
        dataSource: dataSource
      });
    })
    .catch(error => console.error(error));
  }


  onPressButton = (item, level, image, Item, sttt) => {
    sttt += 1;
    if (sttt == 4)
      this.props.navigate ('Result', {title: item, Title: Item, level: level, img: image, sttt: sttt});
    else
      this.props.navigate ('Test', {title: item, Title: Item, level: level, img: image, sttt: sttt});
  }
  // getLevel(level){
  //   if(level==='Dễ')
  //     return "De";
  //   if(level==='Trung bình')
  //     return "TB";
  //   return "Kho";
  // }
  
  render() {
    const { Title, title, level, img, stt } = this.props;
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ImageBackground source={require('../image/hoavan.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center'}}>
            <View style={styles.styleTheme}>
              <Text style={styles.textTheme}>Chủ Đề:</Text>
              <Text style={styles.textTheme}>{title}</Text>
       
              {/* {this.setState({Title: Title})} */}
            </View>

            <View style={{ flexDirection:'row', justifyContent:'center'}}>
              <Text style={styles.textTop}>Bạn đã hoàn thành: </Text>
              <Text style={styles.textTop}>{this.state.sttt}/3</Text>
            </View>
          </View>

          <View style={{flex: 4 }}>
            <View style={styles.styleQuestion}>
              <Text style={{ padding: 5 * ratio(height), fontWeight: 'bold', fontSize:  16 * ratio(height), color:'#000' }}>{this.state.dataSource.type}</Text>
              <Text style={{ paddingRight: 5 * ratio(height), paddingLeft: 5 * ratio(height), paddingBottom: 5 * ratio(height), fontSize: 16 * ratio(height), color:'#000' }}>{this.state.dataSource.content}</Text>
            </View>
            
            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn A')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>{this.state.dataSource.answerA}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn B')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>{this.state.dataSource.answerB}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn C')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>{this.state.dataSource.answerC}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn D')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>{this.state.dataSource.answerD}</Text>
            </TouchableOpacity>
           
          </View>
            
          <View style={{flex: 1 }}>
            <TouchableOpacity style={styles.buttonCheck} onPress={ () => this.onPressButton(title, level, img, Title, this.state.stt)}>  
                <Text style={{ padding: 5 * ratio(height), fontWeight: 'bold', fontSize: 16 * ratio(height), color:'#FFFFFF' }}>Kiểm Tra</Text>
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
  buttonChoose: {
    borderRadius: 5 * ratio(height),
    backgroundColor:'#999',
    marginLeft: 30 * ratio(height),
    marginRight: 30 * ratio(height),
    marginBottom: 20 * ratio(height),
  },
  styleTheme: {
    backgroundColor:'#FFFFCC',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom: 5 * ratio(height),
    borderRadius: 5 * ratio(height),
    marginLeft: 30 * ratio(height),
    marginRight: 30 * ratio(height),
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
  styleQuestion: {
    backgroundColor:'#DDDDDD',
    marginBottom: 40 * ratio(height),
    marginLeft: 30 * ratio(height),
    marginRight: 30 * ratio(height),
    marginTop: 5 * ratio(height),
  },
});
