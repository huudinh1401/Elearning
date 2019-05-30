
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Choosed } from '../redux/actionCreators';
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


class ItemTest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isChoosingA: false,
          isChoosingB: false,
          isChoosingC: false,
          isChoosingD: false,
        }
    }
    onPressChoosing = (item)=>{
    
        Alert.alert(
        'Câu trả lời cuối cùng của bạn là?', 'Đáp án: ' + item ,
        [
            { text: 'Hủy Bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => {
                                            if(item === 'A')
                                                this.setState({ 
                                                    isChoosingA: true,
                                                    isChoosingB: false,
                                                    isChoosingC: false,
                                                    isChoosingD: false,
                                                })
                                            else if (item === 'B')
                                                    this.setState({ 
                                                        isChoosingA: false,
                                                        isChoosingB: true,
                                                        isChoosingC: false,
                                                        isChoosingD: false,
                                                    })
                                            else if (item === 'C')
                                                    this.setState({ 
                                                        isChoosingA: false,
                                                        isChoosingB: false,
                                                        isChoosingC: true,
                                                        isChoosingD: false,
                                                    })
                                            else this.setState({ 
                                                    isChoosingA: false,
                                                    isChoosingB: false,
                                                    isChoosingC: false,
                                                    isChoosingD: true,
                                                })
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
 
  
  render() {
    const {isChoosingA, isChoosingB,isChoosingC, isChoosingD} = this.state;
    const { type, content, answerA, answerB, answerC, answerD } = this.props;

    return (
        <View style={styles.container}>
          <View style={{flex: 4 }}>
            <View style={styles.styleQuestion}>
              <Text style={ styles.typeText }>{ type }</Text>
              <Text style={ styles.contentText }>{ content }</Text>
            </View>
            
            <TouchableOpacity style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(isChoosingA), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('A')}>  
                <Text style={ styles.textAnswer }>A. { answerA }</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(isChoosingB), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('B')}>  
                <Text style={ styles.textAnswer }>B. { answerB }</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(isChoosingC), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('C')}>  
                <Text style={ styles.textAnswer }>C. { answerC }</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderRadius: 5 * ratio(height), backgroundColor:this.getBackgroundChoosing(isChoosingD), marginHorizontal: 30 * ratio(height), marginBottom: 20 * ratio(height)}} onPress={() => this.onPressChoosing('D')}>  
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
    marginTop: 5 * ratio(height),
  },
});
function mapStateToProps(state) {
    return {
      Choosed: state.Choosed
    };
  }
  
  export default connect(mapStateToProps, { Choosed })(ItemTest);