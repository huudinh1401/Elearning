
  
import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


export default class ShortenSkillResult extends Component {
    
  render() {
    return (
        <View style={styles.container}>
          <View style={{ flex: 2, justifyContent:'center', alignItems: 'center',}}>
            
            <Text style={styles.textTop}>Bài kiểm tra kết thúc! </Text>
            
          </View>

          <View style={{flex: 3,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height), marginTop: 20 * ratio(height)}}>
              <View style={{ justifyContent:'center', marginBottom: 20 * ratio(height)}}>     
                <Image style={styles.ImgTheme} source={require('../image/chucmung.gif')}></Image> 
              </View>
              <View style={{ justifyContent:'center', alignItems:'center', }}>
                <Text style={styles.textResult}>Bạn Đã Hoàn Thành </Text>
                <Text style={styles.textResult}> { this.props.level } </Text>
                <Text style={styles.textResult}> Chủ đề tiếp theo đã được mở! </Text>
              </View>
              
            </View>
          </View>
            
          <View style={{flex: 1, marginBottom: 20 }}>
            <TouchableOpacity style={styles.buttonContinue} onPress={() => this.props.navigate('Home')}>  
                <Text style={{ padding: 5 * ratio(height), fontWeight: 'bold', fontSize: 16 * ratio(height), color:'#FFFFFF'}}>Tiếp Tục</Text>
            </TouchableOpacity>
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
  container: {
    flex: 1,
  },
  textTop: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 20 * ratio(height)
  },
  buttonContinue: {
    borderRadius: 5 * ratio(height),
    alignItems: 'center',
    backgroundColor:'#330099',
    margin: 30 * ratio(height)
  },
  ImgTheme: {
    width:220 * ratio(height), height:100 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
  },
  
  textResult: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 14 * ratio(height),
    marginTop: 5 * ratio(height),
  }
});
