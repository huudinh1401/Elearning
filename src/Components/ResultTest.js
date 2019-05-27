
  
import React, { Component } from 'react';
import { Image, Dimensions, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default class Result extends Component {
  
 
  render() {

    return (
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent:'center', alignItems: 'center',}}>
            
            <Text style={styles.textTop}>Bài học kết thúc! </Text>
            
          </View>

          <View style={{flex: 4,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height), marginTop: 10 * ratio(height)}}>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: '#770000', borderWidth:3 * ratio(height), borderRadius: 110 * ratio(height), width:110  * ratio(height), height:110 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 100 * ratio(height)}} >       
                    <Image style={styles.ImgTheme} source={this.props.image}></Image>  
                  </View>
                </View>
                
              </View>
              <Text style={styles.textTheme}>{ this.props.title }</Text>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <Text style={styles.textResult}>Hoàn thành mức độ: </Text>
                <Text style={styles.textResult}> { this.props.level } </Text>
              </View>
              <Image style={styles.ImgSmile} source={require('../image/smile.jpg')}></Image>
            </View>
            
          </View>
            
          <View style={{flex: 1, marginBottom: 20 * ratio(height) }}>
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
    width:100 * ratio(height), height:100 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
  },
  ImgSmile: {
    width:120 * ratio(height), height:100 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10 * ratio(height)
  },
  textTheme: {
    color: '#663300',
    fontWeight: 'bold',
    fontSize: 18 * ratio(height), 
    marginTop: 10 * ratio(height),
  },
  textResult: {
    color: '#003300',
    fontWeight: 'bold',
    fontSize: 14 * ratio(height),
    marginTop: 20 * ratio(height),
  }
});
