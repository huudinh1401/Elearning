import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Home from '../Components/Home';

const itemCoBan1 = "Cơ Bản 1";
  const levelCoBan1 = 'Trung bình';
  const ImageCoBan1 = require('../image/egg.png');

const itemCoBan2 = 'Cơ Bản 2';
  const levelCoBan2 = 'Dễ';
  const ImageCoBan2 = require('../image/eggcb2_2.png');

const itemCumTu = 'Cụm Từ';
  const ImageCumTu = require('../image/cumtu_1.png');

const itemDongVat = 'Động Vật';
  const ImageDongVat = require('../image/animal_1.png');

const itemQuanAo = 'Quần Áo';
  const ImageQuanAo = require('../image/clothe_1.png');

const itemSoNhieu = 'Số Nhiều';
  const ImageSoNhieu = require('../image/flower_1.png');

const itemMauSac = 'Màu Sắc';
  const ImageMauSac = require('../image/color_1.png');

const itemGiaDinh = 'Gia Đình';
  const ImageGiaDinh = require('../image/family_1.png');

const itemThoiGian = 'Thời Gian';
  const ImageThoiGian = require('../image/watch_1.png');

const itemTest3 = 'Kiểm Tra Rút Gọn 3 Kỹ Năng';
const itemTest6 = 'Kiểm Tra Rút Gọn 6 Kỹ Năng';
const itemTest9 = 'Kiểm Tra Rút Gọn 9 Kỹ Năng';

export default class ElearningApp extends Component {
  static navigationOptions = {
    title: 'Elearning',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow:1,
      alignSelf:'center',
    },
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.content}>
        <ScrollView>
          <Home 
            navigate = { navigate }
            item1 = { itemCoBan1 } level1 = { levelCoBan1 } image1 = {ImageCoBan1}
            item2 = { itemCoBan2 } level2 = { levelCoBan2 } image2 = {ImageCoBan2}
            item3 = { itemCumTu } level2 = { levelCoBan1 }  image3 = {ImageCumTu}
            itemTest = { itemTest3 }
            
          />
          
          <Home
            navigate = { navigate }
            item1 = { itemDongVat } level1 = { levelCoBan1 }  image1 = {ImageDongVat}
            item2 = { itemQuanAo } level2 = { levelCoBan2 }   image2 = {ImageQuanAo}
            item3 = { itemSoNhieu } level2 = { levelCoBan1 }  image3 = {ImageSoNhieu}
            itemTest = { itemTest6 }
          />
          <Home
            navigate = { navigate }
            item1 = { itemMauSac } level1 = { levelCoBan1 }   image1 = {ImageMauSac}
            item2 = { itemGiaDinh } level2 = { levelCoBan2 }  image2 = {ImageGiaDinh}
            item3 = { itemThoiGian } level2 = { levelCoBan1 } image3 = {ImageThoiGian}
            itemTest = { itemTest9 }
          />
        </ScrollView> 
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent:'center',
  },
  
});
