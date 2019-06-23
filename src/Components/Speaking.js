
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Voice from 'react-native-voice';
import { isChoosingSpeak} from '../redux/actionCreators';
class Speaking extends Component {
  
  constructor(){
    super();
    this.state = {
      results: []
    }
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechResults(e){
    this.setState({
      results:e.value
    })
  }
  
  onSpeechStart(){
    Voice.start('en-US');
  }

  onSpeechEnd(results){
    if (results[0]==null){
      this.props.isChoosingSpeak("No Name");
    }
    else {
      this.props.isChoosingSpeak(results[0]);
    }
    
    console.log(results[0])
  }
  
  render() {

    return (
      <View>
        <View style={{ flexDirection:'row', justifyContent:'center'}}>
          <TouchableOpacity style={styles.speaking} 
                          onPress={() => this.onSpeechStart()}>  
              <Image style={{ width: 80 * ratio(height), height: 80 * ratio(height) }} source={require('../image/micro.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.speaking} 
                          onPress={() => this.onSpeechEnd(this.state.results)}>  
              <Image style={{ width: 50 * ratio(height), height: 80 * ratio(height) }} source={require('../image/micro_end.png')}></Image>
          </TouchableOpacity>
        </View>
      
        <View style={styles.yourSpeak}>
          <Text style = {{padding: 5 * ratio(height), fontSize: 14 * ratio(height), }} >{this.state.results[0]}</Text> 
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
  speaking: {
    borderRadius: 100 * ratio(height), 
   },
  yourSpeak: {
    marginTop: 20 * ratio(height), 
    borderRadius: 5 * ratio(height), 
    backgroundColor: '#66FFFF', 
    marginHorizontal: 30 * ratio(height), 
    marginBottom: 20 * ratio(height)
  },
  
});
function mapStateToProps(state) {
    return {
      Choosed: state.Choosed,
      ChoosingA: state.ChoosingSpeak
    };
  } 
  export default connect(mapStateToProps, { isChoosingSpeak })(Speaking);