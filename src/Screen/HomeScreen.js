import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLevelCB1, getLevelCB2 ,getLevelCumTu, LevelDongVat, LevelGiaDinh, LevelMauSac, LevelQuanAo, LevelRutGon3, LevelRutGon6, LevelRutGon9, LevelSoNhieu, LevelThoiGian} from '../redux/actionCreators';
import { View, StyleSheet, ScrollView } from 'react-native';
import GroupTitle from '../Components/GroupTitle';

class ElearningApp extends Component {

  getTitle(item){
    const { arrTitles } = this.props;
    Title = arrTitles.map((arrTitle) => {
      return arrTitle.Title});
    return Title[item];
  }
  gettitle(item){
    const { arrTitles } = this.props;
    title = arrTitles.map((arrTitle) => {
      return arrTitle.title});
    return title[item];
  }
  
  // componentDidMount(){
  //   const { levelCB1, levelCB2, levelCumTu, levelDongVat, levelQuanAo, levelSoNhieu, levelMauSac, levelGiaDinh, levelThoiGian} = this.props;
  //   const { levelRutGon3, levelRutGon6, levelRutGon9 } = this.props;

  //     if (levelCB1 == 3 || levelRutGon3 == 1){
  //       if (levelCB2 == -1) this.props.getLevelCB2();
  //       if (levelCumTu == -1)this.props.getLevelCumTu();
  //     }
  //     if (levelCumTu == 3 && levelDongVat ==- 1){
  //       this.props.LevelDongVat();
  //     }
  //     if (levelDongVat == 3){
  //       if (levelQuanAo == -1) this.props.LevelQuanAo();
  //       if (levelSoNhieu == -1)this.props.LevelSoNhieu();
  //     }
  //     if (levelSoNhieu == 3 && levelMauSac == -1){
  //       this.props.LevelMauSac();
  //     }
  //     if (levelMauSac == 3){
  //       if (levelGiaDinh == -1) this.props.LevelGiaDinh();
  //       if (levelThoiGian == -1)this.props.LevelThoiGian();
  //     }

  //     if (levelRutGon3 == 1 || levelRutGon6 == 1 || levelRutGon9 == 1){
  //       if (levelCB2 == -1) this.props.getLevelCB2();
  //       if (levelCumTu == -1)this.props.getLevelCumTu();
  //     }
  //     if (levelRutGon6 == 1 || levelRutGon9 == 1){
  //       if (levelDongVat == -1) this.props.LevelDongVat();
  //       if (levelQuanAo == -1) this.props.LevelQuanAo();
  //       if (levelSoNhieu == -1)this.props.LevelSoNhieu();
  //     }
  //     if (levelRutGon9 == 1){
  //       if (levelMauSac == -1)this.props.LevelMauSac();
  //       if (levelGiaDinh == -1) this.props.LevelGiaDinh();
  //       if (levelThoiGian == -1)this.props.LevelThoiGian();
  //     }
  // }
  
  render() {
    const { navigate } = this.props.navigation;
    const { levelCB1, levelCB2, levelCumTu, levelDongVat, levelQuanAo, levelSoNhieu, levelMauSac, levelGiaDinh, levelThoiGian, levelRutGon3, levelRutGon6, levelRutGon9 } = this.props;
    return (
      <View style = {styles.content}>
        <ScrollView>
         
          <GroupTitle 
            navigate = { navigate }
            item1 = { this.gettitle(0) }  Item1 = { this.getTitle(0) } Level1 = {levelCB1}  image1 = {require('../image/egg.png')}
            item2 = { this.gettitle(1) }  Item2 = { this.getTitle(1) } Level2 = {levelCB2} image2 = {require('../image/eggcb2_2.png')} 
            item3 = { this.gettitle(2) }  Item3 = { this.getTitle(2) } Level3 = {levelCumTu} image3 = {require('../image/cumtu_1.png')}
            itemTest = { this.gettitle(3) } ItemTest = { this.getTitle(3) } Level4 = {levelRutGon3}
          />

          <GroupTitle 
            navigate = { navigate }
            item1 = { this.gettitle(4) }  Item1 = { this.getTitle(4) } Level1 = {levelDongVat} image1 = {require('../image/animal_1.png')}
            item2 = { this.gettitle(5) }  Item2 = { this.getTitle(5) } Level2 = {levelQuanAo} image2 = {require('../image/clothe_1.png')} 
            item3 = { this.gettitle(6) }  Item3 = { this.getTitle(6) } Level3 = {levelSoNhieu} image3 = {require('../image/flower_1.png')}
            itemTest = { this.gettitle(7) } ItemTest = { this.getTitle(7)}  Level4 = {levelRutGon6}
          />

          <GroupTitle 
            navigate = { navigate }
            item1 = { this.gettitle(8) }  Item1 = { this.getTitle(8) }  Level1 = {levelMauSac}  image1 = {require('../image/color_1.png')}
            item2 = { this.gettitle(9) }  Item2 = { this.getTitle(9) }  Level2 = {levelGiaDinh} image2 = {require('../image/family_1.png')} 
            item3 = { this.gettitle(10) } Item3 = { this.getTitle(10) } Level3 = {levelThoiGian} image3 = {require('../image/watch_1.png')}
            itemTest = { this.gettitle(11) } ItemTest = { this.getTitle(11) } Level4 = {levelRutGon9}
          />
          </ScrollView>
        
      </View>   
    );
  }
}
function mapStateToProps(state) {
  return {
    arrTitles: state.arrTitles,
    levelCB1: state.levelCB1,
    levelCB2: state.levelCB2,
    levelCumTu: state.levelCumTu,
    levelDongVat: state.levelDongVat,
    levelQuanAo: state.levelQuanAo,
    levelSoNhieu: state.levelSoNhieu,
    levelMauSac: state.levelMauSac,
    levelGiaDinh: state.levelGiaDinh,
    levelThoiGian: state.levelThoiGian,
    levelRutGon3: state.levelRutGon3,
    levelRutGon6: state.levelRutGon6,
    levelRutGon9: state.levelRutGon9,
  };
}

export default connect(mapStateToProps)(ElearningApp);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent:'center',
  },
  
});
