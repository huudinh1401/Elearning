import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ItemTitle from '../Components/ItemTitle';


const itemCoBan1 = "Cơ Bản 1";
  const ItemCoBan1 = "CB1";
  const levelCoBan1 = 'Difficult';
  
  const ImageCoBan1 = require('../image/egg.png');

const itemCoBan2 = 'Cơ Bản 2';
  const ItemCoBan2 = "CB2";
  const levelCoBan2 = 'Easy';
  const ImageCoBan2 = require('../image/eggcb2_2.png');

const itemCumTu = 'Cụm Từ';
  const ItemCumTu = "CumTu";
  const levelCumTu = 'Easy';
  const ImageCumTu = require('../image/cumtu_1.png');

const itemDongVat = 'Động Vật';
  const ItemDongVat = "DongVat";
  const levelDongVat = 'Chưa mở';
  const ImageDongVat = require('../image/animal_1.png');

const itemQuanAo = 'Quần Áo';
  const ItemQuanAo = "QuanAo";
  const levelQuanAo = 'Chưa mở';
  const ImageQuanAo = require('../image/clothe_1.png');

const itemSoNhieu = 'Số Nhiều';
  const ItemSoNhieu = "SoNhieu";
  const levelSoNhieu = 'Chưa mở';
  const ImageSoNhieu = require('../image/flower_1.png');

const itemMauSac = 'Màu Sắc';
  const ItemMauSac = "MauSac";
  const levelMauSac = 'Chưa mở';
  const ImageMauSac = require('../image/color_1.png');

const itemGiaDinh = 'Gia Đình';
  const ItemGiaDinh = "GiaDinh";
  const levelGiaDinh = 'Chưa mở';
  const ImageGiaDinh = require('../image/family_1.png');

const itemThoiGian = 'Thời Gian';
  const ItemThoiGian = "ThoiGian";
  const levelThoiGian = 'Chưa mở';
  const ImageThoiGian = require('../image/watch_1.png');

const itemTest3 = 'Kiểm Tra Rút Gọn 3 Kỹ Năng';
  const ItemTest3 = "RutGon3";
const itemTest6 = 'Kiểm Tra Rút Gọn 6 Kỹ Năng';
  const ItemTest6 = "RutGon6";
const itemTest9 = 'Kiểm Tra Rút Gọn 9 Kỹ Năng';
  const ItemTest9 = "RutGon9";

export default class ElearningApp extends Component {

  
  getImageLevel (level){
    if (level === 'Chưa mở')
      return require('../image/0.png');
    if (level === 'Easy')
      return require('../image/1.png');
    if (level === 'Medium')
      return require('../image/2.png');
    return require('../image/3.png');
  }
  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.content}>
        <ScrollView>
          <ItemTitle 
            navigate = { navigate }
            item1 = { itemCoBan1 }  Item1 = { ItemCoBan1 } level1 = { levelCoBan1 } image1 = {ImageCoBan1} imageLevel1 = {this.getImageLevel (levelCoBan1)}
            item2 = { itemCoBan2 }  Item2 = { ItemCoBan2 } level2 = { levelCoBan2 } image2 = {ImageCoBan2} imageLevel2 = {this.getImageLevel (levelCoBan2)}
            item3 = { itemCumTu }   Item3 = { ItemCumTu } level3 = { levelCumTu }  image3 = {ImageCumTu} imageLevel3 = {this.getImageLevel (levelCumTu)}
            itemTest = { itemTest3 } ItemTest = { ItemTest3 }
            
          />
          
          <ItemTitle
            navigate = { navigate }
            item1 = { itemDongVat } Item1 = { ItemDongVat } level1 = { levelDongVat }  image1 = {ImageDongVat} imageLevel1 = {this.getImageLevel (levelDongVat)}
            item2 = { itemQuanAo }  Item2 = { ItemQuanAo } level2 = { levelQuanAo }   image2 = {ImageQuanAo}  imageLevel2 = {this.getImageLevel (levelQuanAo)}
            item3 = { itemSoNhieu } Item3 = { ItemSoNhieu } level3 = { levelSoNhieu }  image3 = {ImageSoNhieu}  imageLevel3 = {this.getImageLevel (levelSoNhieu)}
            itemTest = { itemTest6 } ItemTest = { ItemTest6 }
          />
          <ItemTitle
            navigate = { navigate }
            item1 = { itemMauSac }    Item1 = { ItemMauSac } level1 = { levelMauSac }   image1 = {ImageMauSac} imageLevel1 = {this.getImageLevel (levelMauSac)}
            item2 = { itemGiaDinh }   Item2 = { ItemGiaDinh } level2 = { levelGiaDinh }  image2 = {ImageGiaDinh} imageLevel2 = {this.getImageLevel (levelGiaDinh)}
            item3 = { itemThoiGian }  Item3 = { ItemThoiGian } level3 = { levelThoiGian } image3 = {ImageThoiGian} imageLevel3 = {this.getImageLevel (levelThoiGian)}
            itemTest = { itemTest9 } ItemTest = { ItemTest9 }
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
