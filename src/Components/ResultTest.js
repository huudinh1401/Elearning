
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLevelCB1, getLevelCB2, getLevelCumTu, LevelDongVat, LevelGiaDinh, LevelMauSac, LevelQuanAo, LevelSoNhieu, LevelThoiGian } from '../redux/actionCreators';
import { Image, Dimensions, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


class Result extends Component {
  getLevelText(item){
    if (item == 0) return 'Easy';
    else if (item == 1) return 'Medium';
    return 'Difficult';
  }
  
  onPress = () => {
    const {levelCB1, levelCB2, levelCumTu, levelDongVat, levelGiaDinh, levelMauSac, Score} = this.props;
    const {levelQuanAo, levelSoNhieu, levelThoiGian} = this.props;
    
   
    if (Score == 3){
      if (levelCB1 == 3){
        if (levelCB2 == -1) this.props.getLevelCB2();
        if (levelCumTu == -1)this.props.getLevelCumTu();
      }
      if (levelCumTu == 3 && levelDongVat == -1) this.props.LevelDongVat();
      if (levelDongVat == 3){
        if (levelQuanAo == -1) this.props.LevelQuanAo();
        if (levelSoNhieu == -1)this.props.LevelSoNhieu();
      }
      if (levelSoNhieu == 3 && levelMauSac == -1) this.props.LevelMauSac();
      if (levelMauSac == 3){
        if (levelGiaDinh == -1) this.props.LevelGiaDinh();
        if (levelThoiGian == -1)this.props.LevelThoiGian();
      }
    }
    this.props.navigate('Home');
    
      
    //console.log(levelCB1);
    
  }
  getImgFinish(){
    const {Score} = this.props;
    if (Score != 3)
      return require('../image/cry.jpeg');
    else return require('../image/smile.jpg');
    
  }
  getColor(){
    const {Score} = this.props;
    if (Score != 3)
      return 'red';
    return 'green';
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
    const {Level, image, title} = this.props;

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
                    <Image style={styles.ImgTheme} source={image}></Image>  
                  </View>
                </View>
                
              </View>
              <Text style={{color: this.getColor(), fontWeight: 'bold', fontSize: 18 * ratio(height), marginTop: 10 * ratio(height) }}>{ title }</Text>
              <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <Text style={{ color: this.getColor(), fontWeight: 'bold', fontSize: 14 * ratio(height), marginTop: 20 * ratio(height)}}>{ this.getText() } { this.getLevelText(Level) } </Text>
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
    levelCB2: state.levelCB2,
    levelCumTu: state.levelCumTu,
    levelDongVat: state.levelDongVat, 
    levelQuanAo: state.levelQuanAo, 
    levelSoNhieu: state.levelSoNhieu,
    levelMauSac: state.levelMauSac, 
    levelGiaDinh: state.levelGiaDinh, 
    levelThoiGian: state.levelThoiGian,
  };
}
export default connect(mapStateToProps, { getLevelCB1, getLevelCB2, getLevelCumTu, LevelDongVat, LevelGiaDinh, LevelMauSac, LevelQuanAo, LevelSoNhieu, LevelThoiGian })(Result);