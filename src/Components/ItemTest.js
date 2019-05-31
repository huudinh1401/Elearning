
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isChoosingA, isChoosingB, isChoosingC, isChoosingD } from '../redux/actionCreators';
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


class ItemTest extends Component {
    
    onPressChoosing = (item, answer)=>{

        Alert.alert(
            'Câu trả lời cuối cùng của bạn là?', 'Đáp án: ' + item ,
            [
                { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => {
                                                
                                                if(item === 'A')
                                                    this.props.isChoosingA(answer)
                                                else if (item === 'B')
                                                    this.props.isChoosingB(answer)
                                                else if (item === 'C')
                                                    this.props.isChoosingC(answer)
                                                else this.props.isChoosingD(answer)
                                            }
                },
            ],
            {cancelable: false},
        )
        
    }
    getBackgroundChoosing(isChoosing){
        if (isChoosing)
            return '#66FFFF'
        else return '#999'
    }
    disabledTouch(){
        if (this.props.Choosed)
          return true;
        return false;
    }
  
  render() {
    const {ChoosingA, ChoosingB,ChoosingC, ChoosingD} = this.props;
    const { type, content, answerA, answerB, answerC, answerD, stt } = this.props;

    return (
        <View style={styles.container}>
          <View style={{flex: 4 }}>
            <View style={styles.styleQuestion}>
              <Text style={ styles.typeText }>Câu {stt}: { type }</Text>
              <Text style={ styles.contentText }>{ content }</Text>
            </View>
            
            <TouchableOpacity disabled={this.disabledTouch()} style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingA), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('A', answerA)}>  
                <Text style={ styles.textAnswer }>A. { answerA }</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={this.disabledTouch()} style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingB), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('B', answerB)}>  
                <Text style={ styles.textAnswer }>B. { answerB }</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={this.disabledTouch()} style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingC), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('C', answerC)}>  
                <Text style={ styles.textAnswer }>C. { answerC }</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={this.disabledTouch()} style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(ChoosingD), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('D', answerD)}>  
                <Text style={ styles.textAnswer }>D. { answerD }</Text>
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
  textAnswer: {
    padding: 5 * ratio(height), 
    fontSize: 14 * ratio(height), 
    color:'#000' 
  },

  typeText:{ 
    padding: 5 * ratio(height), 
    fontWeight: 'bold', 
    fontSize:  16 * ratio(height), 
    color:'#000' },
  contentText:{ 
    paddingHorizontal: 5 * ratio(height), 
    paddingBottom: 5 * ratio(height), 
    fontSize: 16 * ratio(height), 
    color:'#000' },

  styleQuestion: {
    backgroundColor:'#DDDDDD',
    marginBottom: 40 * ratio(height),
    marginHorizontal: 30 * ratio(height),
    marginTop: 25 * ratio(height),
  },
});
function mapStateToProps(state) {
    return {
      Choosed: state.Choosed,
      ChoosingA: state.ChoosingA,
      ChoosingB: state.ChoosingB,
      ChoosingC: state.ChoosingC,
      ChoosingD: state.ChoosingD
    };
  }
  
  export default connect(mapStateToProps, { isChoosingA, isChoosingB, isChoosingC, isChoosingD })(ItemTest);