
  
import React, { Component } from 'react';
import { Image, Alert, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Result extends Component {
    static navigationOptions = {
        title: 'Kết Quả',
    };
    // state = {
    //   progress: 80,
    //   progressWithOnComplete: 0,
    //   progressCustomized: 0,
    //   text: '8',
    // }
  render() {

    const titleName = this.props.navigation.getParam ('title', 'No_Name');
    const level = this.props.navigation.getParam ('level', 'Trung Bình');
    return (
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center', alignItems: 'center',}}>
            
            <Text style={styles.textTop}>Bài học kết thúc! </Text>
            
          </View>

          <View style={{flex: 4,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20, marginTop: 10}}>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#770000', borderWidth:3, borderRadius: 110, width:110, height:110, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 50}} >       
                    <Image style={styles.ImgTheme} source={require('./image/egg.png')}></Image>  
                  </View>
                </View>
                
              </View>
              <Text style={styles.textTheme}>{ titleName }</Text>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <Text style={styles.textResult}>Hoàn thành mức độ: </Text>
                <Text style={styles.textResult}> { level } </Text>
              </View>
              <Image style={styles.ImgSmile} source={require('./image/smile.jpg')}></Image>
            </View>
            
          </View>
            
          <View style={{flex: 1, marginBottom: 20 }}>
            <TouchableOpacity style={styles.buttonContinue} onPress={() => this.props.navigation.navigate('Home')}>  
                <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16, color:'#FFFFFF'}}>Tiếp Tục</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTop: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonContinue: {
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor:'#330099',
    margin: 30
  },
  ImgTheme: {
    width:100, height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  ImgSmile: {
    width:120, height:100,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10
  },
  textTheme: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 18, 
    marginTop: 10,
  },
  textResult: {
    color: '#003300',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 20,
  }
});
