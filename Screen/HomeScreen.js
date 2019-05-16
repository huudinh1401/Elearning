import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class ElearningApp extends Component {
  static navigationOptions = {
    title: 'Elearning',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow:1,
      alignSelf:'center',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      titleTheme: 'abc',
    }
  }
  _onPressButton = (item, level) => {
    Alert.alert(
      item, 'Mức độ: ' + level,
      [
        { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Bắt Đầu', onPress: () => this.props.navigation.navigate ('Test', {title: item})},
      ],
      {cancelable: false},
    );
  }
  


  render() {
    //const { navigate } = this.props.navigation;
    const itemCoBan1 = 'Cơ Bản 1';
    const levelCoBan1 = 'Khó';
    const itemCoBan2 = 'Cơ Bản 2';
    const levelCoBan2 = 'Dễ';
    const itemCumTu = 'Cụm Từ';
    const itemDongVat = 'Động Vật';
    const itemQuanAo = 'Quần Áo';
    const itemSoNhieu = 'Số Nhiều';
    const itemMauSac = 'Màu Sắc';
    const itemGiaDinh = 'Gia Đình';
    const itemThoiGian = 'Thời Gian';
    const itemTest3 = 'Kiểm Tra Rút Gọn 3 Kỹ Năng';
    const itemTest6 = 'Kiểm Tra Rút Gọn 6 Kỹ Năng';
    const itemTest9 = 'Kiểm Tra Rút Gọn 9 Kỹ Năng';

    return (
      <ScrollView>
        <View style={{ alignItems: 'center', padding: 10 }}>

          {/* Start Group 1 */}

          {/* Theme Top */}
          <View style={{ alignItems: 'center', paddingBottom: 20}}>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
              <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                <View style={{ alignItems: 'center', backgroundColor: '#CC33FF', borderRadius: 50}} >
                  <TouchableOpacity onPress={ () => this._onPressButton(itemCoBan1, levelCoBan1)}>  
                        <Image style={styles.ImgTop} source={require('./image/egg.png')}></Image> 
                  </TouchableOpacity>
                </View>
                
              </View>
              <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/2.png')}></Image>
            </View>
            
            <Text style={styles.textStyle}>{itemCoBan1}</Text>
           
          </View>
          {/* End Theme Top */}

          {/* Theme Bottom */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 }}>

            {/* Theme Left */}
            <View style={{paddingRight: 40}}>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                    <TouchableOpacity onPress={ () => this._onPressButton(itemCoBan2, levelCoBan2)}>  
                          <Image style={styles.ImgTop} source={require('./image/eggcb2_1.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
              </View>
                <Text style={styles.textStyle}>{itemCoBan2}</Text>
            </View>

            {/* Theme Right */}
            <View>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                    <TouchableOpacity disabled={true} onPress={() => { Alert.alert('Hello World!');}}>  
                          <Image style={styles.ImgTop} source={require('./image/cumtu.png')}></Image>   
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
              </View>
              <Text style={styles.textStyle}>{itemCumTu}</Text>
            </View>
            {/* End Theme Bottom */}
            
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigation.navigate ('ShortenSkillTest', {title: itemTest3})}>  
            <Text style={{ padding: 5, textDecorationLine: 'underline', fontSize: 12, color:'#FFFFFF' }}>
              {itemTest3}
            </Text>
          </TouchableOpacity>
          {/* End Group 1 */}

          {/* Start Group 2 */}
          {/* Theme Top */}
          <View style={{ alignItems: 'center', paddingBottom: 20, paddingTop: 20}}>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
              <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                  <TouchableOpacity disabled={true} onPress={this._onPressButtonCoBan1}>  
                        <Image style={styles.ImgTop} source={require('./image/animal.png')}></Image> 
                  </TouchableOpacity>
                </View>
                
              </View>
              <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
            </View>
            <Text style={styles.textStyle}>{itemDongVat}</Text>
          </View>
          {/* End Theme Top */}

          {/* Theme Bottom */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 }}>

            {/* Theme Left */}
            <View style={{paddingRight: 40}}>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                    <TouchableOpacity disabled={true} onPress={() => { Alert.alert('Hello World!')}}>  
                          <Image style={styles.ImgTop} source={require('./image/clothe.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
              </View>
                <Text style={styles.textStyle}>{itemQuanAo}</Text>
            </View>

            {/* Theme Right */}
            <View>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                    <TouchableOpacity disabled={true} onPress={() => { Alert.alert('Hello World!');}}>  
                          <Image style={styles.ImgTop} source={require('./image/flower.png')}></Image>   
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
              </View>
              <Text style={styles.textStyle}>{itemSoNhieu}</Text>
            </View>
            {/* End Theme Bottom */}
            
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigation.navigate ('ShortenSkillTest', {title: itemTest6})}>  
            <Text style={{ padding: 5, textDecorationLine: 'underline', fontSize: 12, color:'#FFFFFF' }}>
              {itemTest6}
            </Text>
          </TouchableOpacity>
          {/* End Group 2 */}

          {/* Start Group 3 */}
          {/* Theme Top */}
          <View style={{ alignItems: 'center', paddingBottom: 20, paddingTop: 20}}>
            <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
              <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                  <TouchableOpacity disabled={true} onPress={this._onPressButtonCoBan1}>  
                        <Image style={styles.ImgTop} source={require('./image/color.png')}></Image> 
                  </TouchableOpacity>
                </View>
                
              </View>
              <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
            </View>
            <Text style={styles.textStyle}>{itemMauSac}</Text>
          </View>
          {/* End Theme Top */}

          {/* Theme Bottom */}
          <View style={{ flexDirection: 'row', paddingBottom: 20 }}>

            {/* Theme Left */}
            <View style={{paddingRight: 40}}>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                    <TouchableOpacity disabled={true} onPress={() => { Alert.alert('Hello World!')}}>  
                          <Image style={styles.ImgTop} source={require('./image/family.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
              </View>
                <Text style={styles.textStyle}>{itemGiaDinh}</Text>
            </View>

            {/* Theme Right */}
            <View>
              <View style={{ flexDirection:'row', justifyContent:'center', marginLeft: 15}}>
                <View style={{ alignItems: 'center', padding: 2, borderColor: '#999', borderWidth:3, borderRadius: 50, width:70, height:70, }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#999', borderRadius: 50}} >
                    <TouchableOpacity disabled={true} onPress={() => { Alert.alert('Hello World!');}}>  
                          <Image style={styles.ImgTop} source={require('./image/watch.png')}></Image>   
                    </TouchableOpacity>
                  </View>
                </View>
                <Image style={{ marginTop: 10, marginLeft: 5, width: 15, height: 50}} source={require('./image/0.png')}></Image>
              </View>
              <Text style={styles.textStyle}>{itemThoiGian}</Text>
            </View>
            {/* End Theme Bottom */}
            
          </View>
          <TouchableOpacity style={styles.containerItem} onPress={() => this.props.navigation.navigate ('ShortenSkillTest', {title: itemTest9})}>  
            <Text style={{ padding: 5, textDecorationLine: 'underline', fontSize: 12, color:'#FFFFFF' }}>
              {itemTest9}
            </Text>
          </TouchableOpacity>
          {/* End Group 3 */}

        </View>
      </ScrollView>
      

    );
  }
}
const styles = StyleSheet.create({
  content: {
    justifyContent:'center',
  },
  ImgTop: {
          width:60, height:60,
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 50
  },
  containerItem: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor:'#FF9900'
  },

  textStyle:{
    color:'#990000',
    fontSize:12,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  }
});
