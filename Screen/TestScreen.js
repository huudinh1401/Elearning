
  
import React, { Component } from 'react';
import { Image, Alert, Text, View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';


export default class Exercise extends Component {
    static navigationOptions = {
        title: 'Bài Học',
    }
    state = {
      
      text: '8',
    }
  render() {
    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    return (
      <ImageBackground source={require('./image/hoavan.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center'}}>
            <View style={styles.styleTheme}>
              <Text style={styles.textTheme}>Chủ Đề:</Text>
              <Text style={styles.textTheme}>{titleName}</Text>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'center'}}>
              <Text style={styles.textTop}>Bạn đã hoàn thành: </Text>
              <Text style={styles.textTop}>{this.state.text}</Text>
              <Text style={styles.textTop}>/10</Text>
            </View>

            {/* <ProgressBarAnimated
              width={150}
              height={12}
              value={this.state.progress}
            /> */}
          </View>

          <View style={{flex: 4 }}>
            <View style={styles.styleQuestion}>
              <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16, color:'#000' }}>Dịch câu sau:</Text>
              <Text style={{ paddingRight: 5, paddingLeft: 5, paddingBottom: 5, fontSize: 16, color:'#000' }}>I eat an apple</Text>
            </View>
            
            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn A')}}>  
                <Text style={{ padding: 5, fontSize: 14, color:'#000' }}>Tôi ăn một quả táo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn B')}}>  
                <Text style={{ padding: 5, fontSize: 14, color:'#000' }}>Cô gái ăn một quá táo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn C')}}>  
                <Text style={{ padding: 5, fontSize: 14, color:'#000' }}>Tôi đang ăn táo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoose} onPress={() => { Alert.alert('Bạn Chọn D')}}>  
                <Text style={{ padding: 5, fontSize: 14, color:'#000' }}>Tôi không thích ăn táo</Text>
            </TouchableOpacity>
           
          </View>
            
          <View style={{flex: 1 }}>
            <TouchableOpacity style={styles.buttonCheck} onPress={() => this.props.navigation.navigate('Result',{title: titleName})}>  
                <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16, color:'#FFFFFF' }}>Kiểm Tra</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonCheck: {
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor:'#330099',
    margin: 30,
  },
  buttonChoose: {
    borderRadius: 5,
    backgroundColor:'#999',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  styleTheme: {
    backgroundColor:'#FFFFCC',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom: 5,
    borderRadius: 5,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 15,
  },
  textTheme: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#880000',
    padding: 5,
  },
  textTop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#993366',
  },
  styleQuestion: {
    backgroundColor:'#DDDDDD',
    marginBottom: 40,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
  },
});
