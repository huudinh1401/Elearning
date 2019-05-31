import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';


export default class Form extends Component {
    
    render() {
        const { textTitle, textAnswer } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.textTop}>{ textTitle }</Text>
                <Text style={styles.textBottom}>{ textAnswer }</Text>   
            </View>
        );
    }
}
const {height} = Dimensions.get('window');
export function ratio(height) {
    return (height / 568);
}
const styles = StyleSheet.create({
    textTop: {
        marginHorizontal: 30 * ratio(height),
        fontWeight:'bold',
        fontSize: 14 * ratio(height),
        paddingBottom: 5 * ratio(height),
    },
    textBottom: {
        marginHorizontal: 30 * ratio(height),
        fontSize: 12 * ratio(height), 
    }
});