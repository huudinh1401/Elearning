
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isFinish, getLevelCB1, getLevelCB2, getLevelCumTu  } from '../redux/actionCreators';
import { Image, Dimensions, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


class Result extends Component {
  onPress = () => {
    this.props.isFinish();
    this.props.navigate('Home');
  }
  getImgFinish(){
    const {Score, title, levelCB1} = this.props;
    if (Score == 3){
      if(title === "Cơ Bản 1")
        this.props.getLevelCB1();
      if (levelCB1 == 3){
          this.props.getLevelCB2();
          this.props.getLevelCumTu();
      }
      return require('../image/smile.jpg');
    }
      
    return require('../image/cry.jpeg');
  }
  getColor(){
    const {Score} = this.props;
    if (Score == 3)
      return 'green';
    return 'red';
  }
  getText(){
    const {Score} = this.props;
    if (Score == 3)
      return 'Hoàn thành mức độ: ';
    return 'Chưa hoàn thành mức độ: ';
  }
  getStyleImg(){
    const {Score} = this.props;
    if (Score == 3)
      return styles.ImgSmile;
    return styles.ImgCry;
  }

  render() {

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
                <View style={{ alignItems: 'center', padding: 2 * ratio(height), borderColor: this.getColor(), borderWidth:3 * ratio(height), borderRadius: 110 * ratio(height), width:110  * ratio(height), height:110 * ratio(height), }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 100 * ratio(height)}} >       
                    <Image style={styles.ImgTheme} source={this.props.image}></Image>  
                  </View>
                </View>
                
              </View>
              <Text style={{color: this.getColor(), fontWeight: 'bold', fontSize: 18 * ratio(height), marginTop: 10 * ratio(height) }}>{ this.props.title }</Text>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <Text style={{ color: this.getColor(), fontWeight: 'bold', fontSize: 14 * ratio(height), marginTop: 20 * ratio(height)}}>{ this.getText() } { this.props.Level } </Text>
              </View>
              <Image style={this.getStyleImg()} source={this.getImgFinish()}></Image>
            </View>
            
          </View>
            
          <View style={{flex: 1, marginBottom: 20 * ratio(height) }}>
            <TouchableOpacity style={{borderRadius: 5 * ratio(height), alignItems: 'center', backgroundColor: this.getColor(), margin: 30 * ratio(height)}} onPress={() => this.onPress()}>  
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
    fontSize: 20 * ratio(height)
  },
  ImgTheme: {
    width:100 * ratio(height), height:100 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
  },
  ImgCry: {
    width:100 * ratio(height), height:100 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10 * ratio(height)
  },
  ImgSmile: {
    width:120 * ratio(height), height:100 * ratio(height),
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10 * ratio(height)
  },
});
function mapStateToProps(state) {
  return {
    Score: state.Score,
    levelCB1: state.levelCB1,
  };
}
export default connect(mapStateToProps, { isFinish, getLevelCB1, getLevelCB2, getLevelCumTu })(Result);