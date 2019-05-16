
  
import React, { Component } from 'react';
import { Image, Alert, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class ShortenSkillResult extends Component {
    static navigationOptions = {
        title: 'Shorten Skill Result',
    };
    // state = {
    //   progress: 80,
    //   progressWithOnComplete: 0,
    //   progressCustomized: 0,
    //   text: '8',
    // }
  render() {

    
    const level = this.props.navigation.getParam ('level', 'Kiểm Tra Rút Gọn 3 Kỹ Năng');
    return (
        <View style={styles.container}>
          <View style={{ flex: 2, justifyContent:'center', alignItems: 'center',}}>
            
            <Text style={styles.textTop}>Bài kiểm tra kết thúc! </Text>
            
          </View>

          <View style={{flex: 3,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20, marginTop: 20}}>
              <View style={{ justifyContent:'center', marginBottom: 20}}>     
                <Image style={styles.ImgTheme} source={require('./image/chucmung.gif')}></Image> 
              </View>
              <View style={{ justifyContent:'center', alignItems:'center', }}>
                <Text style={styles.textResult}>Bạn Đã Hoàn Thành </Text>
                <Text style={styles.textResult}> { level } </Text>
                <Text style={styles.textResult}> Chủ đề tiếp theo đã được mở! </Text>
              </View>
              
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
  
  textResult: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  }
});
