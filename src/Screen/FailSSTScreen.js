
  
import React, { Component } from 'react';
import { Image, Alert, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class FailShortenSkillResult extends Component {
    
   
  render() {

    
    const level = this.props.navigation.getParam ('level', 'Kiểm Tra Rút Gọn 3 Kỹ Năng');
    return (
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center', alignItems: 'center',}}>
            
            <Text style={styles.textTop}>Bài kiểm tra kết thúc! </Text>
            
          </View>

          <View style={{flex: 4,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20, marginTop: 20}}>
              <View style={{ justifyContent:'center', marginBottom: 20}}>     
                <Image style={styles.ImgTheme} source={require('../image/ngu.png')}></Image> 
              </View>
              <View style={{ justifyContent:'center', alignItems:'center', }}>
                <Text style={styles.textResult}>Bạn Đã Thất Bại</Text>
                <Text style={styles.textResult}> { level } </Text>
                <Text style={styles.textResult}> Hãy Thử Lại! </Text>
              </View>
              <Image style={styles.ImgCry} source={require('../image/cry.jpeg')}></Image>
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
    width:220, height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  ImgCry: {
    width:100, height:100,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10
  },
  textResult: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  }
});
