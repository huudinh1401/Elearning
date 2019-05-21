
  
import React, { Component } from 'react';
import { Alert, Text, View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';


export default class Test extends Component {
    
  
    
    // state = {
      
    //   text: '2',
    // }
  render() {
    return (
      <ImageBackground source={require('../image/hoavan.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center'}}>
            <View style={styles.styleTheme}>
              <Text style={styles.textTheme}>Chủ Đề:</Text>
              <Text style={styles.textTheme}>{this.props.title}</Text>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'center'}}>
              <Text style={styles.textTop}>Bạn đã hoàn thành: </Text>

              <Text style={styles.textTop}>2/3</Text>
            </View>
          </View>

          <View style={{flex: 4 }}>
            <View style={styles.styleQuestion}>
              <Text style={{ padding: 5 * ratio(height), fontWeight: 'bold', fontSize:  16 * ratio(height), color:'#000' }}>Dịch câu sau:</Text>
              <Text style={{ paddingRight: 5 * ratio(height), paddingLeft: 5 * ratio(height), paddingBottom: 5 * ratio(height), fontSize: 16 * ratio(height), color:'#000' }}>He is a man and I am a boy</Text>
            </View>
            
            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn A')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>Anh ấy là một cậu bé và tôi là một người đàn ông</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn B')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>Anh ấy là một cậu bé và tôi là một cậu bé</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn C')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>Anh ấy là một cậu bé và tôi là một người đàn ông</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn D')}}>  
                <Text style={{ padding: 5 * ratio(height), fontSize: 14 * ratio(height), color:'#000' }}>Anh ấy là một cậu bé và tôi là một cậu bé</Text>
            </TouchableOpacity>
           
          </View>
            
          <View style={{flex: 1 }}>
            <TouchableOpacity style={styles.buttonCheck} onPress={() => this.props.navigate(this.props.nextScreen,{title: this.props.title, img: this.props.img})}>  
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
