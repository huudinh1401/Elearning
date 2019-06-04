
  
import React, { Component } from 'react';
import { Image, Dimensions, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class FailResult extends Component {
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
          <View style={styles.header}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18 * ratio(height)}}> Kết Quả </Text>
          </View>
          <View style={{ flex: 1, justifyContent:'center', alignItems: 'center',}}>
            
            <Text style={styles.textTop}>Bài học kết thúc! </Text>
            
          </View>

          <View style={{flex: 4,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height), marginTop: 10 * ratio(height)}}>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: '#770000', borderWidth:3 * ratio(height), borderRadius: 110 * ratio(height), width:110 * ratio(height), height:110 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 50}} >       
                    <Image style={styles.ImgTheme} source={require('../image/egg.png')}></Image>  
                  </View>
                </View>
                
              </View>
              <Text style={styles.textTheme}>{ titleName }</Text>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <Text style={styles.textResult}>Chưa hoàn thành mức độ: </Text>
                <Text style={styles.textResult}> { level } </Text>
              </View>
              <Image style={styles.ImgCry} source={require('../image/cry.jpeg')}></Image>
            </View>
            
          </View>
            
          <View style={{flex: 1, marginBottom: 20 * ratio(height) }}>
            <TouchableOpacity style={styles.buttonContinue} onPress={() => this.props.navigation.navigate('Home')}>  
                <Text style={{ padding: 5 * ratio(height), fontWeight: 'bold', fontSize: 16  * ratio(height), color:'#FFFFFF'}}>Tiếp Tục</Text>
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
  header:{
    flexDirection:'row',
    justifyContent: 'space-around',
    backgroundColor:'#339966',
    height: 55 * ratio(height),
    paddingTop: 15* ratio(height),
  },
  textTop: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 20 * ratio(height),
  },
  buttonContinue: {
    borderRadius: 5 * ratio(height),
    alignItems: 'center',
    backgroundColor:'red',
    margin: 30 * ratio(height),
  },
  ImgTheme: {
    width:100 * ratio(height), height:100* ratio(height),
    alignItems:'center',
    justifyContent:'center',
  },

  ImgCry: {
    width:100  * ratio(height), height:100  * ratio(height),
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10  * ratio(height)
  },

  textTheme: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18  * ratio(height), 
    marginTop: 10  * ratio(height),
  },
  textResult: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14 * ratio(height),
    marginTop: 20 * ratio(height),
  }
});
