
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LevelRutGon3, LevelRutGon6, LevelRutGon9, getLevelCB2, getLevelCumTu, LevelDongVat, LevelGiaDinh, LevelMauSac, LevelQuanAo, LevelLuyenNoi, LevelThoiGian } from '../redux/actionCreators';
import { Image, Dimensions, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


class ResultShortenSkill extends Component {

  onPress = () => {
    const {levelCB2, levelCumTu, levelDongVat, levelGiaDinh, levelMauSac, Score} = this.props;
    const {levelQuanAo, levelLuyenNoi, levelThoiGian, levelRutGon3, levelRutGon6, levelRutGon9} = this.props;
    // this.setLevelTitle();
    if (Score == 3){
      if (levelRutGon3 == 1 || levelRutGon6 == 1 || levelRutGon9 == 1){
        if (levelCB2 == -1) this.props.getLevelCB2();
        if (levelCumTu == -1)this.props.getLevelCumTu();
      }
      if (levelRutGon6 == 1 || levelRutGon9 == 1){
        if (levelDongVat == -1) this.props.LevelDongVat();
        if (levelQuanAo == -1) this.props.LevelQuanAo();
        if (levelLuyenNoi == -1)this.props.LevelLuyenNoi();
      }
      if (levelRutGon9 == 1){
        if (levelMauSac == -1)this.props.LevelMauSac();
        if (levelGiaDinh == -1) this.props.LevelGiaDinh();
        if (levelThoiGian == -1)this.props.LevelThoiGian();
      }
    }
    this.props.navigate('Home');
  }
  getImgFinishTop(){
    const {Score} = this.props;
    if (Score == 3)
      return require('../image/chucmung.gif');
    return require('../image/ngu.png');
  }
  getImgFinishBot(){
    const {Score} = this.props;
    if (Score == 3)
      return require('../image/smile.jpg');
    return require('../image/cry.jpeg');
  }
  getColor(){
    const {Score} = this.props;
    if (Score == 3) return 'green';
    return 'red';
  }
  getTextTop(){
    const {Score} = this.props;
    if (Score == 3) return 'Bạn Đã Hoàn Thành';
    return 'Bạn Đã Thất Bại ';
  }
  getTextBot(){
    const {Score} = this.props;
    if (Score == 3) return 'Câc chủ đề  đã được mở!';
    return 'Hãy thử lại!';
  }
  getStyleImgBot(){
    const {Score} = this.props;
    if (Score == 3) return styles.ImgSmile;
    return styles.ImgCry;
  }

  render() {
    const {title} = this.props;

    return (
        <View style={styles.container}>
          <View style={styles.header}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18 * ratio(height)}}> Kết Quả </Text>
          </View>
          <View style={{ flex: 1, justifyContent:'center', alignItems: 'center',}}>
            <Text style={styles.textTop}>Bài kiểm tra kết thúc! </Text>
          </View>

          <View style={{flex: 4,}}>
            <View style={{ alignItems: 'center', paddingBottom: 20 * ratio(height)}}>
              <View style={{ alignItems: 'center', backgroundColor: '#ffffff', width:230  * ratio(height), height:130 * ratio(height)}}>
                <Image style={styles.ImgTheme} source={this.getImgFinishTop()}></Image>  
              </View>
              
              <View style={{ justifyContent:'center', alignItems: 'center'}}>
                <Text style={{ color: this.getColor(), fontWeight: 'bold', fontSize: 14 * ratio(height), marginTop: 10 * ratio(height)}}>{ this.getTextTop() } </Text>
                <Text style={{color: this.getColor(), fontWeight: 'bold', fontSize: 16 * ratio(height), marginTop: 10 * ratio(height) }}>{ title }</Text>
                <Text style={{ color: this.getColor(), fontWeight: 'bold', fontSize: 14 * ratio(height), marginTop: 10 * ratio(height)}}>{ this.getTextBot() } </Text>
              </View>
              <Image style={this.getStyleImgBot()} source={this.getImgFinishBot()}></Image>
            </View> 
          </View>
            
          <View style={{flex: 1, marginBottom: 5 * ratio(height) }}>
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
    fontSize: 18 * ratio(height)
  },
  ImgTheme: {
    width:230 * ratio(height), height:130 * ratio(height),
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
    levelCB2: state.levelCB2,
    levelCumTu: state.levelCumTu,
    levelDongVat: state.levelDongVat, 
    levelQuanAo: state.levelQuanAo, 
    levelLuyenNoi: state.levelLuyenNoi,
    levelMauSac: state.levelMauSac, 
    levelGiaDinh: state.levelGiaDinh, 
    levelThoiGian: state.levelThoiGian,
    levelRutGon3: state.levelRutGon3,
    levelRutGon6: state.levelRutGon6,
    levelRutGon9: state.levelRutGon9,
  };
}
export default connect(mapStateToProps, { LevelRutGon3, LevelRutGon6, LevelRutGon9, 
                                          getLevelCB2, getLevelCumTu, LevelDongVat, 
                                          LevelGiaDinh, LevelMauSac, LevelQuanAo, 
                                          LevelLuyenNoi, LevelThoiGian})(ResultShortenSkill);